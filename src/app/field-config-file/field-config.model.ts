export type FieldType =
  | 'text'
  | 'number'
  | 'email'
  | 'password'
  | 'textarea'
  | 'select'
  | 'checkbox'
  | 'date';

export interface FieldConfig {
  key: string;
  label: string;
  type: FieldType;
  required?: boolean;
  options?: { label: string; value: any }[];
  disabled?: boolean;
  placeholder?: string;
  maxLength?: number;
  minLength?: number;
  min?: number;
  max?: number;
}