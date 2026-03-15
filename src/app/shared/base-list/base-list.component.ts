import { Directive, OnInit, inject } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastService } from '../../core/services/toast.service';

export type SortDirection = 'asc' | 'desc' | '';

@Directive()
export abstract class BaseListComponent<T> implements OnInit {

  protected toast = inject(ToastService);

  // ── Data ──────────────────────────────────────────────
  items: T[] = [];
  filtered: T[] = [];
  paginated: T[] = [];
  loading = false;

  // ── Search & Pagination ───────────────────────────────
  searchQuery = '';
  page = 1;
  pageSize = 10;
  totalPages = 1;

  // ── Sorting ───────────────────────────────────────────
  sortColumn: keyof T | '' = '';
  sortDirection: SortDirection = '';

  // ── Modal ─────────────────────────────────────────────
  showModal = false;
  saving = false;
  editItem: T | null = null;
  form: Partial<T> = {};

  // ── Delete Confirm ────────────────────────────────────
  showConfirm = false;
  deleteTarget: T | null = null;

  // ── Track add vs edit ─────────────────────────────────
  private _isEditing = false;

  // ─────────────────────────────────────────────────────
  // Abstract — child must implement these 4
  // ─────────────────────────────────────────────────────

  abstract loadData(): void;
  abstract defaultForm(): Partial<T>;
  abstract saveItem(data: Partial<T>): void;
  abstract deleteItem(): void;

  // Override in child for label e.g. 'Bank', 'Agent'
  protected itemLabel(): string { return 'Record'; }

  // ─────────────────────────────────────────────────────
  // Extract message from backend response or error
  // ─────────────────────────────────────────────────────

  protected getSuccessMessage(response: any, fallback: string): string {
    debugger;
    return response?.message
      || response?.body?.message
      || fallback;
  }

  protected getErrorMessage(error: any, fallback: string): string {
  if (error instanceof HttpErrorResponse) {
    const body = error.error;

    // Extract all validation messages from errors object
    // e.g. { "Name": ["The Bank Name field is required."] }
    if (body?.errors && typeof body.errors === 'object') {
      const messages = Object.values(body.errors)
        .flat()
        .filter(Boolean)
        .join(', ');
      if (messages) return messages;
    }

    return body?.message
      || body?.title
      || error.message
      || fallback;
  }
  return error?.message || error?.error?.message || fallback;
}

  // ─────────────────────────────────────────────────────
  // Lifecycle
  // ─────────────────────────────────────────────────────

  ngOnInit(): void {
    this.loadData();
  }

  // ─────────────────────────────────────────────────────
  // Sorting
  // ─────────────────────────────────────────────────────

  sortBy(column: keyof T): void {
    if (this.sortColumn === column) {
      this.sortDirection =
        this.sortDirection === 'asc' ? 'desc' :
        this.sortDirection === 'desc' ? '' : 'asc';
      if (this.sortDirection === '') this.sortColumn = '';
    } else {
      this.sortColumn = column;
      this.sortDirection = 'asc';
    }
    this.applyFilter();
  }

  getSortIcon(column: keyof T): string {
    if (this.sortColumn !== column) return 'unfold_more';
    return this.sortDirection === 'asc' ? 'arrow_upward' : 'arrow_downward';
  }

  private applySorting(data: T[]): T[] {
    if (!this.sortColumn || !this.sortDirection) return data;
    const col = this.sortColumn;
    const dir = this.sortDirection === 'asc' ? 1 : -1;
    return [...data].sort((a, b) => {
      const aVal = a[col];
      const bVal = b[col];
      if (aVal == null) return 1;
      if (bVal == null) return -1;
      if (typeof aVal === 'string' && typeof bVal === 'string') {
        return aVal.localeCompare(bVal) * dir;
      }
      return (aVal > bVal ? 1 : aVal < bVal ? -1 : 0) * dir;
    });
  }

  // ─────────────────────────────────────────────────────
  // Search & Filter
  // ─────────────────────────────────────────────────────

  matchesSearch(item: T, query: string): boolean {
    if (!query.trim()) return true;
    const q = query.toLowerCase();
    return Object.values(item as object).some(val =>
      val !== null && val !== undefined && String(val).toLowerCase().includes(q)
    );
  }

  applyFilter(): void {
    const searched = this.items.filter(item =>
      this.matchesSearch(item, this.searchQuery)
    );
    this.filtered = this.applySorting(searched);
    this.page = 1;
    this.recalcPagination();
  }

  onSearchChange(): void {
    this.applyFilter();
  }

  // ─────────────────────────────────────────────────────
  // Pagination
  // ─────────────────────────────────────────────────────

  goToPage(p: number): void {
    if (p < 1 || p > this.totalPages || p === this.page) return;
    this.page = p;
    this.updatePage();
  }

  onPageSizeChange(size: number): void {
    this.pageSize = Number(size);
    this.page = 1;
    this.recalcPagination();
  }

  private recalcPagination(): void {
    this.totalPages = Math.max(1, Math.ceil(this.filtered.length / this.pageSize));
    this.updatePage();
  }

  private updatePage(): void {
    const start = (this.page - 1) * this.pageSize;
    this.paginated = this.filtered.slice(start, start + this.pageSize);
  }

  // ─────────────────────────────────────────────────────
  // Modal
  // ─────────────────────────────────────────────────────

  openAddModal(): void {
    this._isEditing = false;
    this.editItem = null;
    this.form = this.defaultForm();
    this.showModal = true;
  }

  openEditModal(item: T): void {
    this._isEditing = true;
    this.editItem = item;
    this.form = { ...item };
    this.showModal = true;
  }

  closeModal(): void {
    this.showModal = false;
    this.editItem = null;
    this.form = {};
  }

  // ─────────────────────────────────────────────────────
  // Delete
  // ─────────────────────────────────────────────────────

  confirmDelete(item: T): void {
    this.deleteTarget = item;
    this.showConfirm = true;
  }

  cancelDelete(): void {
    this.showConfirm = false;
    this.deleteTarget = null;
  }

  // ─────────────────────────────────────────────────────
  // Hooks — pass the response/error object in
  // ─────────────────────────────────────────────────────

  protected onSaveSuccess(response?: any): void {
    debugger;
    this.saving = false;
    this.closeModal();
    this.loadData();
    const action = this._isEditing ? 'updated' : 'created';
    const msg = this.getSuccessMessage(response, `${this.itemLabel()} ${action} successfully`);
    this.toast.success(msg);
  }

  protected onSaveError(error?: any): void {
    debugger;
    this.saving = false;
    const msg = this.getErrorMessage(error, `Failed to save ${this.itemLabel()}`);
    this.toast.error(msg);
  }

  protected onDeleteSuccess(response?: any): void {
    debugger;
    this.showConfirm = false;
    this.deleteTarget = null;
    this.loadData();
    const msg = this.getSuccessMessage(response, `${this.itemLabel()} deleted successfully`);
    this.toast.success(msg);
  }

  protected onDeleteError(error?: any): void {
     debugger;
    this.showConfirm = false;
    const msg = this.getErrorMessage(error, `Failed to delete ${this.itemLabel()}`);
    this.toast.error(msg);
  }

  // ─────────────────────────────────────────────────────
  // Utility
  // ─────────────────────────────────────────────────────

  min(a: number, b: number): number { return Math.min(a, b); }
}