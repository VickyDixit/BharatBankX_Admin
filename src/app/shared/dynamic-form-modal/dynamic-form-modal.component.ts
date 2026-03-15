import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FieldConfig } from '../../field-config-file/field-config.model';

@Component({
  selector: 'app-dynamic-form-modal',
  standalone: true,                 // 🔥 REQUIRED
  imports: [CommonModule, FormsModule],
  templateUrl: './dynamic-form-modal.component.html',
  styleUrls: ['./dynamic-form-modal.component.scss']
})
export class DynamicFormModalComponent {
  @Input() show = false;
  @Input() title = '';
  @Input() fields: FieldConfig[] = [];
  @Input() form: any = {};
  @Input() saving = false;

  @Output() save = new EventEmitter<any>();
  @Output() close = new EventEmitter<void>();

  onSave() {
    this.save.emit(this.form);
  }
}