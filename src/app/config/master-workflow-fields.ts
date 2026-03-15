import { FieldConfig } from '../field-config-file/field-config.model';

export const MASTERWORKFLOW_FIELDS: FieldConfig[] = [
  { key: 'name', label: 'Name', type: 'text', required: true },
  { key: 'shortName', label: 'Short Name', type: 'text' },
  { key: 'description', label: 'Description', type: 'textarea' },
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
