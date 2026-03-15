import { FieldConfig } from '../field-config-file/field-config.model';

export const AGENTLOG_FIELDS: FieldConfig[] = [
  { key: 'agentId', label: 'Agent ID', type: 'number', required: true },
  {
    key: 'logType',
    label: 'Log Type',
    type: 'select',
    options: [
      { label: 'Login', value: 'Login' },
      { label: 'Logout', value: 'Logout' },
      { label: 'Error', value: 'Error' },
      { label: 'Action', value: 'Action' },
    ]
  },
  { key: 'description', label: 'Description', type: 'textarea' },
  { key: 'softwareVersion', label: 'Software Version', type: 'text' },
];
