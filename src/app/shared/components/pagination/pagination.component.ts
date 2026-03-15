import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.scss'
})
export class PaginationComponent implements OnChanges {

  @Input() page = 1;
  @Input() pageSize = 10;
  @Input() totalCount = 0;
  @Input() pageSizeOptions: number[] = [5, 10, 20, 50];

  @Output() pageChange     = new EventEmitter<number>();
  @Output() pageSizeChange = new EventEmitter<number>();

  totalPages = 1;
  pages: number[] = [];

  ngOnChanges(): void {
    this.totalPages = Math.max(1, Math.ceil(this.totalCount / this.pageSize));
    this.buildPages();
  }

  private buildPages(): void {
    const start = Math.max(1, this.page - 2);
    const end   = Math.min(this.totalPages, this.page + 2);
    this.pages  = Array.from({ length: end - start + 1 }, (_, i) => start + i);
  }

  go(p: number): void {
    if (p < 1 || p > this.totalPages || p === this.page) return;
    this.pageChange.emit(p);
  }

  onPageSizeChange(size: number): void {
    this.pageSizeChange.emit(Number(size));
  }

  get rangeStart(): number { return this.totalCount === 0 ? 0 : (this.page - 1) * this.pageSize + 1; }
  get rangeEnd():   number { return Math.min(this.page * this.pageSize, this.totalCount); }
}