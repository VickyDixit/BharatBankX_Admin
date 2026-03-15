import { FieldConfig } from '../field-config-file/field-config.model';

export const WORKFLOWFORM_FIELDS: FieldConfig[] = [
  { key: 'workflowId', label: 'Workflow ID', type: 'number', required: true },
  { key: 'stepNumber', label: 'Step Number', type: 'number', required: true },
  { key: 'fieldName', label: 'Field Name', type: 'text', required: true },
  {
    key: 'inputType',
    label: 'Input Type',
    type: 'select',
    options: [
      { label: 'Text', value: 'text' },
      { label: 'Number', value: 'number' },
      { label: 'Email', value: 'email' },
      { label: 'Date', value: 'date' },
      { label: 'Select', value: 'select' },
      { label: 'Checkbox', value: 'checkbox' },
      { label: 'Textarea', value: 'textarea' },
    ]
  },
  { key: 'validation', label: 'Validation', type: 'textarea' },
  { key: 'placeholder', label: 'Placeholder', type: 'textarea' },
  { key: 'defaultValue', label: 'Default Value', type: 'textarea' },
  { key: 'isRequired', label: 'Is Required', type: 'checkbox' },
  { key: 'options', label: 'Options', type: 'textarea' },
  { key: 'fieldOrder', label: 'Field Order', type: 'number' },
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
