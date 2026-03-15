import { FieldConfig } from '../field-config-file/field-config.model';

export const AGENT_FIELDS: FieldConfig[] = [
  { key: 'fullName', label: 'Full Name', type: 'text', required: true },
  { key: 'aadhaar', label: 'Aadhaar', type: 'text', placeholder: 'XXXX XXXX XXXX' },
  { key: 'email', label: 'Email', type: 'email', placeholder: 'Enter email address' },
  { key: 'mobile', label: 'Mobile', type: 'text', placeholder: '+91 XXXXX XXXXX' },
  { key: 'password', label: 'Password', type: 'password', placeholder: 'Enter password' },
  { key: 'bankId', label: 'Bank ID', type: 'number' },
  { key: 'assignedWorkflows', label: 'Assigned Workflows', type: 'textarea' },
  { key: 'access', label: 'Access', type: 'checkbox' },
  {
    key: 'approvalStatus',
    label: 'Approval Status',
    type: 'select',
    options: [
      { label: 'Pending', value: 'Pending' },
      { label: 'Approved', value: 'Approved' },
      { label: 'Rejected', value: 'Rejected' },
    ]
  },
  { key: 'photo', label: 'Photo', type: 'text' },
  { key: 'notes', label: 'Notes', type: 'textarea' },
  {
    key: 'status',
    label: 'Status',
    type: 'select',
    options: [
      { label: 'Active', value: 'Active' },
      { label: 'Inactive', value: 'Inactive' },
    ]
  },
  { key: 'role', label: 'Role', type: 'text' },
];
