import { FieldConfig } from '../field-config-file/field-config.model';

export const DEVICELOCK_FIELDS: FieldConfig[] = [
  { key: 'agentId', label: 'Agent ID', type: 'number', required: true },
  { key: 'deviceId', label: 'Device ID', type: 'text', required: true },
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
