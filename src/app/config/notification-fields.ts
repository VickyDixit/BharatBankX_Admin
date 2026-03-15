import { FieldConfig } from '../field-config-file/field-config.model';

export const NOTIFICATION_FIELDS: FieldConfig[] = [
  { key: 'title', label: 'Title', type: 'text', required: true },
  { key: 'message', label: 'Message', type: 'text' },
  { key: 'agentId', label: 'Agent ID', type: 'number' },
  {
    key: 'type',
    label: 'Type',
    type: 'select',
    options: [
      { label: 'Info', value: 'Info' },
      { label: 'Warning', value: 'Warning' },
      { label: 'Alert', value: 'Alert' },
      { label: 'Update', value: 'Update' },
    ]
  },
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
