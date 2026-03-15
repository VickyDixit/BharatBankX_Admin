import { FieldConfig } from '../field-config-file/field-config.model';

export const WORKFLOW_FIELDS: FieldConfig[] = [
  { key: 'bankId', label: 'Bank ID', type: 'number', required: true },
  { key: 'masterWorkflowId', label: 'Master Workflow ID', type: 'number', required: true },
  { key: 'workflowCode', label: 'Workflow Code', type: 'text' },
  { key: 'totalSteps', label: 'Total Steps', type: 'number', required: true },
  { key: 'version', label: 'Version', type: 'text' },
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
