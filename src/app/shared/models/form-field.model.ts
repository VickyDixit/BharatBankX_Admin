// shared/models/form-field.model.ts
export interface FormField {
  key: string;
  label: string;
  type: 'text' | 'email' | 'number' | 'checkbox' | 'select';
  placeholder?: string;
  options?: { label: string; value: any }[];
  required?: boolean;
}