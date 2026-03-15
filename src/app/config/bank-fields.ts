import { FieldConfig } from '../field-config-file/field-config.model';

export const BANK_FIELDS: FieldConfig[] = [
  { key: 'name', label: 'Name', type: 'text', required: true },
  { key: 'shortName', label: 'Short Name', type: 'text', required: true },
  { key: 'code', label: 'Code', type: 'text' },
  { key: 'website', label: 'Website', type: 'text', placeholder: 'https://example.com' },
  { key: 'logo', label: 'Logo', type: 'text' },
  { key: 'isGovernment', label: 'Is Government', type: 'checkbox' },
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
