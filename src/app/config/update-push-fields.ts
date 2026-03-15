import { FieldConfig } from '../field-config-file/field-config.model';

export const UPDATEPUSH_FIELDS: FieldConfig[] = [
  { key: 'version', label: 'Version', type: 'text' },
  { key: 'notes', label: 'Notes', type: 'textarea' },
  { key: 'fileUrl', label: 'File URL', type: 'text', placeholder: 'https://example.com' },
  {
    key: 'status',
    label: 'Status',
    type: 'select',
    options: [
      { label: 'Active', value: 'Active' },
      { label: 'Inactive', value: 'Inactive' },
    ]
  },
];
