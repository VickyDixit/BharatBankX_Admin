import { FieldConfig } from '../field-config-file/field-config.model';

export const JSONDEBUGGER_FIELDS: FieldConfig[] = [
  {
    key: 'jsonType',
    label: 'Json Type',
    type: 'select',
    options: [
      { label: 'Form', value: 'Form' },
      { label: 'Field', value: 'Field' },
      { label: 'Full Workflow', value: 'FullWorkflow' },
    ]
  },
  { key: 'content', label: 'Content', type: 'textarea' },
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
