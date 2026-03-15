import { FieldConfig } from '../field-config-file/field-config.model';

export const LOGINRESPONSE_FIELDS: FieldConfig[] = [
  { key: 'token', label: 'Token', type: 'text' },
  { key: 'role', label: 'Role', type: 'text' },
  { key: 'expiry', label: 'Expiry', type: 'date' },
];
