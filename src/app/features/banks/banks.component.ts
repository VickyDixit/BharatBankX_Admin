import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Bank, BankService } from '../../api';
import { BANK_FIELDS } from '../../config/bank-fields';
import { BaseListComponent } from '../../shared/base-list/base-list.component';
import { DynamicFormModalComponent } from '../../shared/dynamic-form-modal/dynamic-form-modal.component';
import { PaginationComponent } from '../../shared/components/pagination/pagination.component';

@Component({
  selector: 'app-banks',
  standalone: true,
  imports: [CommonModule, FormsModule, DynamicFormModalComponent, PaginationComponent],
  templateUrl: './banks.component.html',
  styleUrl: './banks.component.scss'
})
export class BanksComponent extends BaseListComponent<Bank> {

  bankFields = BANK_FIELDS;

  constructor(private bankService: BankService) {
    super();
  }

  // ── Load ─────────────────────────────────────────────

  loadData(): void {
    this.loading = true;
    this.bankService.bankGetAllBanks$Json$Response().subscribe({
      next: (res) => {
        if (res.status === 200) {
          this.items = res.body.data || [];
          this.applyFilter();
        }
        this.loading = false;
      },
      error: () => { this.loading = false; }
    });
  }

  // ── Default form ──────────────────────────────────────

  defaultForm(): Partial<Bank> {
    return {
      bankId: undefined,
      name: '',
      shortName: '',
      code: null,
      website: null,
      logo: null,
      isGovernment: false,
      status: 'Active'
    };
  }

  // ── Save ─────────────────────────────────────────────

  saveItem(data: Partial<Bank>): void {
    debugger
    this.saving = true;

const now = new Date().toISOString();

if (this.editItem) {
  // Editing: only update updatedDate
  this.bankService.bankUpdateBank$Json({
    id: this.editItem.bankId!,
    body: {
      ...data as Bank,
      updatedAt: now
    }
  }).subscribe({
    next: (response) => {
      debugger;
      this.onSaveSuccess(response);
    },
     error: (response) => {
      debugger;
      this.onSaveError(response);
       this.saving = false; }
  });
} else {
  // Creating: set both createdDate and updatedDate
  this.bankService.bankCreateBank$Json({
    body: {
      ...data as Bank,
      createdAt: now,
      updatedAt: now
    }
  }).subscribe({
    next: (response) => {
      debugger;
      this.onSaveSuccess(response);
    },
    error: (response) => {
      debugger;
      this.onSaveError(response);
       this.saving = false; }
  });
}
  }

  // ── Delete ────────────────────────────────────────────

  deleteItem(): void {
    if (!this.deleteTarget?.bankId) return;
    this.bankService.bankDeleteBank$Json({
      id: this.deleteTarget.bankId
    }).subscribe({
      next: () => this.onDeleteSuccess(),
      error: () => { this.showConfirm = false; this.deleteTarget = null; }
    });
  }

  // ── Custom search ─────────────────────────────────────

  override matchesSearch(item: Bank, query: string): boolean {
    const q = query.toLowerCase();
    return !q ||
      item.name?.toLowerCase().includes(q) ||
      item.shortName?.toLowerCase().includes(q) ||
      item.code?.toLowerCase().includes(q) ||
      item.website?.toLowerCase().includes(q) || false;
  }
}