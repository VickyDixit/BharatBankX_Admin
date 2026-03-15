/* =======================
   BANK
======================= */
export interface Bank {
  bank_id: number;
  name: string;
  short_name?: string | null;
  code?: string | null;
  website?: string | null;
  logo?: string | null;
  is_government: boolean;
  status: 'Active' | 'Inactive';
  created_at: string;
  updated_at: string;
}

/* =======================
   ADMIN USER
======================= */
export interface AdminUser {
  id: number;
  username?: string | null;
  password?: string | null;
  role?: 'SuperAdmin' | 'Admin' | 'Viewer' | string | null;
  email?: string | null;
  last_login?: string | null;
  created_at: string;
  updated_at: string;
}

/* =======================
   AGENT
======================= */
export interface Agent {
  id: number;
  full_name: string;
  aadhaar?: string | null;
  email?: string | null;
  mobile?: string | null;
  password?: string | null;
  bank_id?: number | null;
  assigned_workflows?: string | null; // JSON
  access: boolean;
  approval_status: 'Pending' | 'Approved' | 'Rejected';
  photo?: string | null;
  notes?: string | null;
  last_login?: string | null;
  first_version?: string | null;
  current_version?: string | null;
  last_update_date?: string | null;
  status: 'Active' | 'Inactive';
  created_at: string;
  updated_at: string;
}

/* =======================
   AGENT LOG
======================= */
export interface AgentLog {
  id: number;
  agent_id: number;
  log_type: 'Login' | 'Error' | 'Update' | 'Action' | string;
  description?: string | null;
  software_version?: string | null;
  created_at: string;
  updated_at: string;
}

/* =======================
   AUDIT LOG
======================= */
export interface AuditLog {
  id: number;
  admin_id?: number | null;
  action?: string | null;
  details?: string | null;
  created_at: string;
  updated_at: string;
}

/* =======================
   AUTH
======================= */
export interface LoginRequest {
  username: string;
  password: string;
}

export interface LoginResponse {
  token: string;
  expiry: string;
}

/* =======================
   DEVICE LOCK
======================= */
export interface DeviceLock {
  id: number;
  agent_id: number;
  device_id: string;
  last_used_at?: string | null;
  status: 'Locked' | 'Unlocked';
  created_at: string;
  updated_at: string;
}

/* =======================
   JSON DEBUGGER
======================= */
export interface JsonDebugger {
  id: number;
  json_type: 'Form' | 'Field' | 'FullWorkflow' | string;
  content?: string | null; // JSON string
  status: 'Active' | 'Inactive';
  created_at: string;
  updated_at: string;
}

/* =======================
   MASTER WORKFLOW
======================= */
export interface MasterWorkflow {
  id: number;
  name: string;
  short_name?: string | null;
  description?: string | null;
  status: 'Active' | 'Inactive';
  created_at: string;
  updated_at: string;
}

/* =======================
   NOTIFICATION
======================= */
export interface Notification {
  id: number;
  title: string;
  message?: string | null;
  agent_id?: number | null;
  type: 'Info' | 'Warning' | 'Alert' | 'Update' | string;
  status: 'Pending' | 'Success' | 'Failed';
  created_at: string;
  updated_at: string;
}

/* =======================
   UPDATE PUSH
======================= */
export interface UpdatePush {
  id: number;
  version?: string | null;
  notes?: string | null;
  file_url?: string | null;
  status: 'Live' | 'Archived';
  created_at: string;
  updated_at: string;
}

/* =======================
   WORKFLOW
======================= */
export interface Workflow {
  id: number;
  bank_id: number;
  master_workflow_id: number;
  workflow_code?: string | null;
  total_steps: number;
  version?: string | null;
  description?: string | null;
  status: 'Active' | 'Inactive';
  created_at: string;
  updated_at: string;
}

/* =======================
   WORKFLOW FORM
======================= */
export interface WorkflowForm {
  id: number;
  workflow_id: number;
  step_number: number;
  field_name: string;
  input_type?: string | null;
  validation?: string | null;
  placeholder?: string | null;
  default_value?: string | null;
  is_required: boolean;
  options?: string | null; // JSON
  field_order: number;
  status: 'Active' | 'Inactive';
  created_at: string;
  updated_at: string;
}

/* =======================
   WORKFLOW TRANSACTION
======================= */
export interface WorkflowTransaction {
  id: number;
  agent_id: number;
  workflow_id: number;
  form_data?: string | null; // JSON string
  status: 'Pending' | 'Success' | 'Failed';
  created_at: string;
  updated_at: string;
}

/* =======================
   PAGED RESULT
======================= */
export interface PagedResult<T> {
  data: T[];
  total: number;
  page: number;
  pageSize: number;
}