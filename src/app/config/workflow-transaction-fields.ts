import { FieldConfig } from '../field-config-file/field-config.model';

export const WORKFLOWTRANSACTION_FIELDS: FieldConfig[] = [
  { key: 'agentId', label: 'Agent ID', type: 'number', required: true },
  { key: 'workflowId', label: 'Workflow ID', type: 'number', required: true },
  { key: 'formData', label: 'Form Data', type: 'textarea' },
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
