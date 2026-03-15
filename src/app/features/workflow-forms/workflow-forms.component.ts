import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// TODO: import your Swagger-generated service here
// import { WorkflowFormsService } from '../../core/services/...';

@Component({
  selector: 'app-workflow-forms',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './workflow-forms.component.html',
  styleUrl: './workflow-forms.component.scss'
})
export class WorkflowFormsComponent implements OnInit {
  items: any[] = [];
  filtered: any[] = [];
  paginated: any[] = [];
  loading = false;
  saving = false;
  showModal = false;
  showConfirm = false;
  editItem: any = null;
  deleteTarget: any = null;
  searchQuery = '';
  page = 1;
  pageSize = 10;
  totalPages = 1;
  form: any = {};

  // TODO: inject your service via constructor
  // constructor(private svc: YourService) {}

  ngOnInit(): void {
    // TODO: call this.svc.getAll().subscribe(...)
  }

  applyFilter(): void {
    // TODO: implement filter logic
    this.filtered = [...this.items];
    this.totalPages = Math.max(1, Math.ceil(this.filtered.length / this.pageSize));
    this.paginated = this.filtered.slice((this.page - 1) * this.pageSize, this.page * this.pageSize);
  }

  openModal(item?: any): void {
    this.editItem = item || null;
    this.form = item ? { ...item } : {};
    this.showModal = true;
  }

  closeModal(): void {
    this.showModal = false;
    this.editItem = null;
  }

  save(): void {
    // TODO: call this.svc.create(this.form) or this.svc.update(...)
  }

  confirmDelete(item: any): void {
    this.deleteTarget = item;
    this.showConfirm = true;
  }

  deleteItem(): void {
    // TODO: call this.svc.delete(this.deleteTarget.id)
    this.showConfirm = false;
  }

  pageNumbers(): number[] {
    const start = Math.max(1, this.page - 2);
    const end = Math.min(this.totalPages, this.page + 2);
    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  }

  min(a: number, b: number): number { return Math.min(a, b); }
}
