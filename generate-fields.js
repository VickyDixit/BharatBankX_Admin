#!/usr/bin/env node
/**
 * generate-fields.js
 * Auto-generates Angular FieldConfig[] files from swagger.json
 * Usage:  node generate-fields.js
 * package.json:  "generate:fields": "node generate-fields.js"
 *
 * Valid FieldConfig types: text | number | email | password | textarea | select | checkbox | date
 * Valid FieldConfig props:  key, label, type, required?, options?, disabled?, placeholder?
 */

const fs   = require('fs');
const path = require('path');

const SWAGGER_PATH = path.join(__dirname, 'swagger.json');
const OUTPUT_DIR   = path.join(__dirname, 'src/app/config');

// ── Always skip — system managed fields ──────────────
const SKIP_FIELDS = new Set([
  'createdAt', 'updatedAt', 'createdDate', 'updatedDate',
  'lastLogin', 'lastUpdateDate', 'lastUsedAt',
  'firstVersion', 'currentVersion'
]);

// ── Select fields ─────────────────────────────────────
const SELECT_FIELDS = new Set([
  'status', 'approvalStatus', 'logType', 'type',
  'jsonType', 'inputType'
]);

// ── Textarea fields ───────────────────────────────────
const TEXTAREA_FIELDS = new Set([
  'notes', 'description', 'remarks', 'address',
  'assignedWorkflows', 'formData', 'validation',
  'content', 'options', 'placeholder', 'defaultValue'
]);

// ── Helpers ───────────────────────────────────────────

function toLabel(key) {
  return key
    .replace(/([A-Z])/g, ' $1')
    .trim()
    .replace(/\b\w/g, c => c.toUpperCase())
    .replace(/\bId\b/g,  'ID')
    .replace(/\bUrl\b/g, 'URL');
}

function toKebab(str) {
  return str.replace(/([A-Z])/g, '-$1').toLowerCase().replace(/^-/, '');
}

function isPrimaryKey(key, prop, schema) {
  // PK = integer + not in required[] + (named 'id' or ends with 'Id')
  const required    = schema.required || [];
  const isInt       = prop.type === 'integer';
  const isIdName    = key.toLowerCase() === 'id' || key.toLowerCase().endsWith('id');
  const notNullable = prop.nullable === undefined;
  const notRequired = !required.includes(key);
  return isInt && isIdName && notNullable && notRequired;
}

function isRequired(key, schema) {
  return (schema.required || []).includes(key);
}

/**
 * Map swagger property to valid FieldConfig type only:
 * text | number | email | password | textarea | select | checkbox | date
 */
function getFieldType(key, prop) {
  const fmt = prop.format || '';

  if (fmt === 'password')        return 'password';
  if (fmt === 'email')           return 'email';
  if (fmt === 'date-time')       return 'date';
  if (fmt === 'date')            return 'date';
  if (fmt === 'uri')             return 'text';   // URL → plain text
  if (TEXTAREA_FIELDS.has(key))  return 'textarea';
  if (SELECT_FIELDS.has(key))    return 'select';
  if (prop.type === 'boolean')   return 'checkbox';
  if (prop.type === 'integer')   return 'number';
  if (prop.type === 'number')    return 'number';
  return 'text';
}

function getPlaceholder(key, prop) {
  const fmt = prop.format || '';
  if (fmt === 'email')    return 'Enter email address';
  if (fmt === 'password') return 'Enter password';
  if (fmt === 'uri')      return 'https://example.com';
  if (key === 'mobile')   return '+91 XXXXX XXXXX';
  if (key === 'aadhaar')  return 'XXXX XXXX XXXX';
  return null;
}

function getSelectOptions(key) {
  if (key === 'logType') return [
    { label: 'Login',   value: 'Login'   },
    { label: 'Logout',  value: 'Logout'  },
    { label: 'Error',   value: 'Error'   },
    { label: 'Action',  value: 'Action'  },
  ];
  if (key === 'type') return [
    { label: 'Info',    value: 'Info'    },
    { label: 'Warning', value: 'Warning' },
    { label: 'Alert',   value: 'Alert'   },
    { label: 'Update',  value: 'Update'  },
  ];
  if (key === 'approvalStatus') return [
    { label: 'Pending',  value: 'Pending'  },
    { label: 'Approved', value: 'Approved' },
    { label: 'Rejected', value: 'Rejected' },
  ];
  if (key === 'jsonType') return [
    { label: 'Form',          value: 'Form'         },
    { label: 'Field',         value: 'Field'        },
    { label: 'Full Workflow', value: 'FullWorkflow' },
  ];
  if (key === 'inputType') return [
    { label: 'Text',     value: 'text'     },
    { label: 'Number',   value: 'number'   },
    { label: 'Email',    value: 'email'    },
    { label: 'Date',     value: 'date'     },
    { label: 'Select',   value: 'select'   },
    { label: 'Checkbox', value: 'checkbox' },
    { label: 'Textarea', value: 'textarea' },
  ];
  // Default status options
  return [
    { label: 'Active',   value: 'Active'   },
    { label: 'Inactive', value: 'Inactive' },
  ];
}

// ── Code generator ────────────────────────────────────

function generateFields(modelName, schema) {
  const props = schema.properties || {};
  const lines = [];

  lines.push(`import { FieldConfig } from '../field-config-file/field-config.model';`);
  lines.push(``);
  lines.push(`export const ${modelName.toUpperCase()}_FIELDS: FieldConfig[] = [`);

  for (const [key, prop] of Object.entries(props)) {
    if (SKIP_FIELDS.has(key))             continue;
    if (isPrimaryKey(key, prop, schema))  continue;

    const label       = toLabel(key);
    const type        = getFieldType(key, prop);
    const req         = isRequired(key, schema);
    const placeholder = getPlaceholder(key, prop);

    if (type === 'select') {
      const opts = getSelectOptions(key);
      lines.push(`  {`);
      lines.push(`    key: '${key}',`);
      lines.push(`    label: '${label}',`);
      lines.push(`    type: 'select',`);
      if (req) lines.push(`    required: true,`);
      lines.push(`    options: [`);
      opts.forEach(o => lines.push(`      { label: '${o.label}', value: '${o.value}' },`));
      lines.push(`    ]`);
      lines.push(`  },`);

    } else if (type === 'checkbox') {
      lines.push(`  { key: '${key}', label: '${label}', type: 'checkbox' },`);

    } else if (type === 'textarea') {
      const reqStr = req         ? `, required: true`               : '';
      const phStr  = placeholder ? `, placeholder: '${placeholder}'` : '';
      lines.push(`  { key: '${key}', label: '${label}', type: 'textarea'${reqStr}${phStr} },`);

    } else {
      const reqStr = req         ? `, required: true`               : '';
      const phStr  = placeholder ? `, placeholder: '${placeholder}'` : '';
      lines.push(`  { key: '${key}', label: '${label}', type: '${type}'${reqStr}${phStr} },`);
    }
  }

  lines.push(`];`);
  lines.push(``);
  return lines.join('\n');
}

// ── Main ──────────────────────────────────────────────

const swagger = JSON.parse(fs.readFileSync(SWAGGER_PATH, 'utf8'));
const schemas = swagger?.components?.schemas || {};

const skipSuffixes = ['ApiResponse', 'ListApiResponse', 'Request'];
const models = Object.entries(schemas).filter(
  ([name]) => !skipSuffixes.some(s => name.endsWith(s))
);

fs.mkdirSync(OUTPUT_DIR, { recursive: true });

let count = 0;
for (const [modelName, schema] of models) {
  const content  = generateFields(modelName, schema);
  const fileName = `${toKebab(modelName)}-fields.ts`;
  const outPath  = path.join(OUTPUT_DIR, fileName);
  fs.writeFileSync(outPath, content, 'utf8');
  console.log(`✅  ${fileName}`);
  count++;
}

console.log(`\n🎉  Done! ${count} files generated in src/app/config/`);