# 🇮🇳 BharatBankX — Admin Panel

<p align="center">
  <img src="https://img.shields.io/badge/Angular-18-red?logo=angular&style=for-the-badge" />
  <img src="https://img.shields.io/badge/TypeScript-5.4-3178C6?logo=typescript&style=for-the-badge" />
  <img src="https://img.shields.io/badge/RxJS-7.8-B7178C?logo=reactivex&style=for-the-badge" />
  <img src="https://img.shields.io/badge/ng--openapi--gen-0.16-blue?style=for-the-badge" />
  <img src="https://img.shields.io/badge/JWT-Auth-yellow?logo=jsonwebtokens&style=for-the-badge" />
  <img src="https://img.shields.io/badge/Standalone-Components-orange?style=for-the-badge" />
  <img src="https://img.shields.io/badge/License-MIT-lightgrey?style=for-the-badge" />
</p>

**BharatBankX Admin** is the Angular 18 admin panel for the BharatBankX CSP banking platform. It provides a complete management interface for agents, banks, banking workflows, transactions, device locks, notifications, and update pushes — all built with standalone components, lazy-loaded routes, and a powerful generic CRUD architecture.

This repository is one of three in the BharatBankX ecosystem:

| Repository | Tech | Role |
|---|---|---|
| `BharatBankX_Admin` | Angular 18 | **This repo** — Admin panel SPA |
| `BharatBankX_API` | ASP.NET Core 8.0 | RESTful backend API |
| `BharatBankX_Desktop` | — | Desktop client for CSP agents |

---

## 📁 Project Structure

```
bharatbankx-admin/
├── src/
│   ├── app/
│   │   ├── api/                          # Auto-generated from swagger.json (ng-openapi-gen)
│   │   │   ├── models/                   # TypeScript interfaces — Agent, Bank, Workflow …
│   │   │   │   ├── agent.ts
│   │   │   │   ├── bank.ts
│   │   │   │   ├── workflow.ts
│   │   │   │   ├── workflow-form.ts
│   │   │   │   ├── workflow-transaction.ts
│   │   │   │   ├── agent-log.ts
│   │   │   │   ├── notification.ts
│   │   │   │   ├── device-lock.ts
│   │   │   │   ├── update-push.ts
│   │   │   │   └── json-debugger.ts
│   │   │   ├── services/                 # Typed HTTP service classes per module
│   │   │   │   ├── agent.service.ts
│   │   │   │   ├── bank.service.ts
│   │   │   │   ├── workflow.service.ts
│   │   │   │   ├── workflow-forms.service.ts
│   │   │   │   ├── workflow-transactions.service.ts
│   │   │   │   ├── agent-logs.service.ts
│   │   │   │   ├── notifications.service.ts
│   │   │   │   ├── device.service.ts
│   │   │   │   ├── update-pushes.service.ts
│   │   │   │   ├── json-debugger.service.ts
│   │   │   │   ├── master-workflow.service.ts
│   │   │   │   └── auth.service.ts
│   │   │   ├── api-configuration.ts      # rootUrl injection
│   │   │   ├── base-service.ts           # HttpClient base class
│   │   │   ├── api.module.ts
│   │   │   └── index.ts
│   │   ├── config/                       # FieldConfig[] arrays for dynamic form modal
│   │   │   ├── agent-fields.ts
│   │   │   ├── bank-fields.ts
│   │   │   ├── workflow-fields.ts
│   │   │   ├── workflow-form-fields.ts
│   │   │   ├── workflow-transaction-fields.ts
│   │   │   ├── master-workflow-fields.ts
│   │   │   ├── agent-log-fields.ts
│   │   │   ├── notification-fields.ts
│   │   │   ├── device-lock-fields.ts
│   │   │   ├── update-push-fields.ts
│   │   │   └── json-debugger-fields.ts
│   │   ├── core/
│   │   │   ├── guards/
│   │   │   │   └── auth.guard.ts         # Route protection — checks bbx_token
│   │   │   ├── interceptors/
│   │   │   │   ├── auth.interceptor.ts   # Injects Authorization: Bearer on every request
│   │   │   │   ├── loader.interceptor.ts # Global spinner + 401 auto-logout
│   │   │   │   └── cache.interceptor.ts  # Caches GET responses in memory
│   │   │   ├── models/
│   │   │   │   ├── api-response.model.ts # Typed ApiResponse<T> wrapper
│   │   │   │   └── models.ts             # Shared local models
│   │   │   └── services/
│   │   │       ├── loader.service.ts     # BehaviorSubject<boolean> loading state
│   │   │       ├── toast.service.ts      # Success / error / warning toasts
│   │   │       ├── cache.service.ts      # In-memory GET response cache
│   │   │       └── dashboard-state.service.ts
│   │   ├── features/                     # All feature pages (lazy-loaded)
│   │   │   ├── auth/
│   │   │   │   └── login/               # Login page — JWT flow
│   │   │   ├── dashboard/               # Overview + stats
│   │   │   ├── agents/                  # CSP agent management
│   │   │   ├── agent-logs/              # Agent activity logs (read-only)
│   │   │   ├── banks/                   # Bank master data
│   │   │   ├── master-workflows/        # Top-level workflow categories
│   │   │   ├── workflows/               # Bank-linked workflows
│   │   │   ├── workflow-forms/          # Dynamic form field definitions
│   │   │   ├── workflow-transactions/   # Transaction records
│   │   │   ├── json-debugger/           # Dev JSON form tester
│   │   │   ├── notifications/           # In-app notification management
│   │   │   ├── device-locks/            # RD device binding
│   │   │   └── update-pushes/           # App version release management
│   │   ├── shared/
│   │   │   ├── base-list/
│   │   │   │   └── base-list.component.ts   # Abstract generic CRUD base (BaseListComponent<T>)
│   │   │   ├── dynamic-form-modal/
│   │   │   │   └── dynamic-form-modal.component.ts  # Reusable FieldConfig-driven modal
│   │   │   ├── components/
│   │   │   │   ├── layout/              # Shell — sidebar + topbar + router-outlet
│   │   │   │   ├── sidebar/             # Navigation sidebar with all route links
│   │   │   │   ├── topbar/              # Header — avatar, profile dropdown, logout
│   │   │   │   ├── pagination/          # Page controls with page-size selector
│   │   │   │   └── toast-container/     # Global toast UI renderer
│   │   │   └── loader/                  # Full-page loading spinner overlay
│   │   ├── field-config-file/
│   │   │   └── field-config.model.ts    # FieldConfig interface definition
│   │   ├── app.routes.ts                # Route definitions — login public, all others guarded
│   │   ├── app.config.ts                # ApplicationConfig — providers + interceptor stack
│   │   └── app.component.ts             # Root component — JWT expiry check every 30s
│   ├── environments/
│   │   ├── environment.ts               # Dev: apiUrl = '/api' (proxied to localhost:7104)
│   │   └── environment.prod.ts          # Prod: apiUrl = '/api' (Nginx reverse proxy)
│   ├── styles.scss                      # Global styles — layout, topbar, sidebar, modals
│   └── index.html                       # HTML shell — Material Icons font links
├── proxy.conf.json                      # Dev proxy: /api → https://localhost:7104
├── swagger.json                         # OpenAPI spec (source for ng-openapi-gen)
├── ng-openapi-gen.json                  # Code-gen configuration
├── generate-fields.js                   # Node script — scaffolds field config files
├── angular.json
├── package.json
└── tsconfig.json
```

---

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| Angular | 18 | SPA framework — standalone components, no NgModules |
| TypeScript | 5.4 | Type-safe development |
| RxJS | 7.8 | Reactive HTTP streams and state management |
| ng-openapi-gen | 0.16 | Auto-generates typed models + service classes from `swagger.json` |
| Angular Router | 18 | Lazy-loaded feature routes with `authGuard` protection |
| Material Icons | Round | Google Material Icons via CDN font link |

### HTTP Interceptor Stack

All three interceptors are registered in `app.config.ts` and run in order on every HTTP request:

```
Request
  ↓
cacheInterceptor     — Return cached response if available (GET only)
  ↓
LoaderInterceptor    — Show global spinner + catch any 401 → auto-logout
  ↓
authInterceptor      — Inject Authorization: Bearer <token> header
  ↓
API
```

---

## ✅ Prerequisites

| Tool | Version | Install |
|---|---|---|
| Node.js | 18.x or 20.x LTS | https://nodejs.org |
| Angular CLI | 18+ | `npm install -g @angular/cli` |
| Git | Latest | https://git-scm.com |

```bash
node -v      # v18.x or v20.x
ng version   # Angular CLI: 18.x
```

> The BharatBankX API (`BharatBankX_API` repo) must be running before the admin panel can fully function. See that README for backend setup.

---

## 🚀 Getting Started

### Step 1 — Install Dependencies

```bash
cd bharatbankx-admin
npm install
```

### Step 2 — Start Development Server

```bash
npm start
```

Open: **http://localhost:4200**

All `/api/*` requests are automatically proxied to `https://localhost:7104` (the .NET API). No CORS configuration is needed during development.

### Step 3 — Log In

Use your SuperAdmin credentials (set up in the API database). The login flow:

1. Submit email + password → `POST /api/auth/login`
2. Receive JWT token + role
3. Fetch full profile → `GET /api/agent/by-username/{email}`
4. Store `bbx_token`, `bbx_user`, `bbx_role` in localStorage
5. Navigate to `/dashboard`

---

## 📜 NPM Scripts

| Command | Purpose |
|---|---|
| `npm start` | Dev server with proxy (port 4200) |
| `npm run build` | Production build → `dist/bharatbankx-admin/browser/` |
| `npm test` | Run unit tests via Karma |
| `npm run generate-api` | Regenerate API models + services from `swagger.json` |
| `npm run generate:fields` | Scaffold field config files from `swagger.json` |
| `npm run watch` | Watch mode build for development |

---

## 🔐 Authentication & Security

### Full Login Flow

```
1. User submits email + password on /login
           ↓
2. POST /api/auth/login
           ↓
3. API returns { token, role, expiry }
           ↓
4. GET /api/agent/by-username/{email}
           ↓
5. Full agent profile loaded (name, mobile, photo, role)
           ↓
6. Stored in localStorage:
     bbx_token  → JWT string
     bbx_user   → { id, name, email, mobile, role, photo }
     bbx_role   → Role string
           ↓
7. Navigate to /dashboard ✅
```

### localStorage Keys

| Key | Value | Description |
|---|---|---|
| `bbx_token` | JWT string | Used by `authInterceptor` on every request |
| `bbx_user` | JSON object | Profile data displayed in topbar and sidebar |
| `bbx_role` | Role string | `SuperAdmin` / `Admin` / `Agent` |

### Token Expiry — Client-Side Check

`AppComponent` sets up a 30-second interval timer that checks whether `bbx_token` has expired. If expired, it clears localStorage and redirects to `/login` — even if the user hasn't made a request.

```typescript
// app.component.ts — checks every 30 seconds
setInterval(() => {
  const token = localStorage.getItem('bbx_token');
  if (token && this.isTokenExpired(token)) {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}, 30000);
```

### 401 Auto-Logout — `LoaderInterceptor`

If any API call returns `401 Unauthorized`, the `LoaderInterceptor` immediately:
1. Removes `bbx_token`, `bbx_user`, `bbx_role` from localStorage
2. Clears `sessionStorage`
3. Redirects to `/login`

This covers scenarios like token expiry mid-session or a token invalidated server-side.

### `authGuard`

All routes except `/login` are protected by `authGuard`. It checks for the presence of `bbx_token` in localStorage before activating any route. If the token is missing, the user is redirected to `/login`.

---

## 🧩 Angular Architecture

### Route Structure

```typescript
// app.routes.ts
[
  {
    path: 'login',
    loadComponent: () => import('./features/auth/login/login.component')
  },
  {
    path: '',
    component: LayoutComponent,
    canActivate: [authGuard],      // ← All children protected
    children: [
      { path: 'dashboard',        loadComponent: ... },
      { path: 'banks',            loadComponent: ... },
      { path: 'agents',           loadComponent: ... },
      { path: 'agent-logs',       loadComponent: ... },
      { path: 'master-workflows', loadComponent: ... },
      { path: 'workflows',        loadComponent: ... },
      { path: 'workflow-forms',   loadComponent: ... },
      { path: 'transactions',     loadComponent: ... },
      { path: 'json-debugger',    loadComponent: ... },
      { path: 'notifications',    loadComponent: ... },
      { path: 'device-locks',     loadComponent: ... },
      { path: 'update-pushes',    loadComponent: ... },
    ]
  },
  { path: '**', redirectTo: 'login' }
]
```

All feature routes use `loadComponent` with dynamic imports — each module is only loaded when its route is first visited.

### `BaseListComponent<T>` — Generic CRUD

The most important architectural piece. All 12 feature pages extend `BaseListComponent<T>` which provides a complete, working CRUD list out of the box.

**What it provides automatically:**
- Paginated data table (default 10 records per page)
- Client-side keyword search across all fields
- Column sorting (asc / desc / none, cycle through)
- Add modal (`openAddModal()`)
- Edit modal (`openEditModal(item)`) — pre-fills form
- Delete confirmation dialog
- Toast success and error notifications
- Loading state management (`loading = true/false`)
- Error message extraction from both `HttpErrorResponse` and raw error objects (including ASP.NET validation error format `{ errors: { Field: ["msg"] } }`)

**What child components implement — only 4 abstract methods:**

```typescript
// Example: banks.component.ts
export class BanksComponent extends BaseListComponent<Bank> {

  // 1. Fetch data from API
  loadData(): void {
    this.loading = true;
    this.bankService.bankGetAll$Json().subscribe({
      next: (res) => {
        this.items = res.data ?? [];
        this.applyFilter();
        this.loading = false;
      },
      error: (err) => { this.loading = false; }
    });
  }

  // 2. Default blank form for Add modal
  defaultForm(): Partial<Bank> {
    return { name: '', code: '', isActive: true };
  }

  // 3. Create or update via API
  saveItem(data: Partial<Bank>): void {
    this.saving = true;
    if (this.editItem) {
      this.bankService.bankUpdate$Json({ id: (data as Bank).id, body: data as Bank })
        .subscribe({ next: (r) => this.onSaveSuccess(r), error: (e) => this.onSaveError(e) });
    } else {
      this.bankService.bankCreate$Json({ body: data as Bank })
        .subscribe({ next: (r) => this.onSaveSuccess(r), error: (e) => this.onSaveError(e) });
    }
  }

  // 4. Delete via API
  deleteItem(): void {
    this.bankService.bankDelete$Json({ id: (this.deleteTarget as Bank).id })
      .subscribe({ next: (r) => this.onDeleteSuccess(r), error: (e) => this.onDeleteError(e) });
  }

  protected itemLabel() { return 'Bank'; }
}
```

The base class automatically calls `loadData()` on `ngOnInit`, manages the `paginated` array, and drives the template.

### `DynamicFormModalComponent`

A single reusable modal that renders any form from a `FieldConfig[]` configuration array. Used by all feature pages and the topbar profile editor.

**FieldConfig interface:**

```typescript
interface FieldConfig {
  key: string;                   // Object property name
  label: string;                 // Display label
  type: 'text' | 'email' | 'password' | 'number' |
        'textarea' | 'select' | 'checkbox' | 'date';
  required?: boolean;
  placeholder?: string;
  options?: { value: any; label: string }[];   // For 'select' type only
  readonly?: boolean;            // Shows as disabled in modal
}
```

**Example field config — Banks:**

```typescript
// src/app/config/bank-fields.ts
export const bankFields: FieldConfig[] = [
  { key: 'name',   label: 'Bank Name', type: 'text',   required: true,  placeholder: 'e.g. State Bank of India' },
  { key: 'code',   label: 'Bank Code', type: 'text',   required: true,  placeholder: 'e.g. SBI' },
  { key: 'active', label: 'Active',    type: 'checkbox' },
];
```

> ℹ️ `*Request` models (e.g. `UpdateProfileRequest`) are intentionally skipped by `generate:fields` — these are manually maintained since they represent UI-specific forms, not data entity models.

### Sorting — `BaseListComponent`

Click any column header to toggle sort:
- First click → ascending ↑
- Second click → descending ↓
- Third click → unsorted (original order)

The sort icon updates automatically via `getSortIcon(column)`:
- `unfold_more` — unsorted
- `arrow_upward` — ascending
- `arrow_downward` — descending

---

## 👤 Topbar — User Profile

The topbar displays the logged-in agent's avatar, name, and role. Click the avatar to open a profile dropdown:

```
┌──────────────────────────────┐
│  [V]   Vicky Dixit           │
│        SuperAdmin            │
│  ─────────────────────────   │
│  📧   dixitvicky@gmail.com   │
│  📱   +91-9712729575         │
│  🪪   Agent ID: #32          │
│  ─────────────────────────   │
│  ✏️   Edit Profile           │
└──────────────────────────────┘
                            [→ Logout]
```

**Edit Profile** opens `DynamicFormModalComponent` with these fields:

| Field | Editable | Notes |
|---|---|---|
| Full Name | ✅ Yes | Updates `bbx_user.name` in localStorage on success |
| Mobile | ✅ Yes | Updates `bbx_user.mobile` in localStorage on success |
| Old Password | ✅ If changing | BCrypt-verified server-side |
| New Password | ✅ If changing | Requires Old Password to be filled too |
| Email / Role / Status | ❌ No | Admin-managed — not exposed in self-update |

**Password change validation (client-side):**
- If only `oldPassword` filled → toast warning: "Fill both password fields"
- If only `newPassword` filled → toast warning: "Fill both password fields"
- Both empty → only name/mobile updated (no password change sent)

**Logout** shows a confirmation dialog before:
1. Removing `bbx_token`, `bbx_user`, `bbx_role` from localStorage
2. Clearing sessionStorage
3. Navigating to `/login`

---

## 🔌 Dev Proxy Configuration

During development, `proxy.conf.json` routes all `/api` requests to the .NET API:

```json
{
  "/api": {
    "target": "https://localhost:7104",
    "secure": false,
    "changeOrigin": true
  }
}
```

This is wired into `npm start` via `angular.json`. No browser CORS issues in development.

> ⚠️ If you change the API's HTTPS port from `7104`, update the `target` here accordingly.

---

## 🔄 Regenerating API Services

Whenever the backend API changes (new endpoints, updated models):

### Step 1 — Download Fresh Swagger Spec

```bash
# With API running:
curl http://localhost:5113/swagger/v1/swagger.json -o swagger.json
```

Or open `http://localhost:5113/swagger/v1/swagger.json` in a browser and replace `swagger.json` in the project root.

### Step 2 — Regenerate TypeScript Services & Models

```bash
npm run generate-api
# Runs: ng-openapi-gen -i swagger.json -o src/app/api
```

This overwrites everything in `src/app/api/models/` and `src/app/api/services/`.

### Step 3 — Regenerate Field Configs (Optional)

```bash
npm run generate:fields
# Runs: node generate-fields.js
```

This scaffolds `FieldConfig[]` arrays in `src/app/config/` from the swagger models. It intentionally skips models whose name ends in `Request` (like `UpdateProfileRequest`) — those are manually maintained.

> After regenerating, review any breaking changes in existing feature components before running.

---

## 🚀 Production Build & Deployment

### Build

```bash
npm run build
# Output → dist/bharatbankx-admin/browser/
```

### Deploy Static Files

```bash
cp -r dist/bharatbankx-admin/browser/* /var/www/bharatbankx/
```

### Nginx Configuration

```nginx
server {
    listen 80;
    server_name yourdomain.com;
    root /var/www/bharatbankx;
    index index.html;

    # Angular SPA — all routes serve index.html
    location / {
        try_files $uri $uri/ /index.html;
    }

    # Proxy /api/* to the .NET backend
    location /api/ {
        proxy_pass http://localhost:5113/api/;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    }
}
```

> In production, `environment.prod.ts` uses `apiUrl = '/api'` — Nginx's `location /api/` block routes all API calls to the backend. No CORS headers needed.

---

## 🐛 Troubleshooting

| Problem | Fix |
|---|---|
| `npm start` fails | Run `npm install`. Ensure Node.js v18+ and Angular CLI v18+. |
| Angular can't reach API | Check `proxy.conf.json` `target` port matches API HTTPS port (default `7104`). |
| `401 Unauthorized` on all API calls | `authInterceptor` not registered in `app.config.ts`, or `bbx_token` is missing from localStorage. |
| Login succeeds but topbar shows no name | `GET /api/agent/by-username/{email}` failing — check the endpoint returns the agent and the email stored in localStorage matches. |
| Token keeps expiring instantly | Set `ExpiryMinutes` to `480` in the API's `appsettings.json` (8-hour session). |
| Password change fails silently | Old password was incorrect — API returns `400`. The `TopbarComponent` toasts `"Old password is incorrect"` on any error. |
| API services show type errors | Run `npm run generate-api` after updating `swagger.json`. |
| Field config modal shows wrong fields | Run `npm run generate:fields`. Note `*Request` models are intentionally skipped. |
| Build fails after API regeneration | A model was renamed or removed — update any affected feature component that referenced the old type. |
| Loader spinner never disappears | Check that `LoaderInterceptor` is registered and the API call is actually completing (success or error). |
| Page shows blank after route change | Lazy-loaded component has a compile error — check browser console for the specific Angular error. |

---

## 🔮 Roadmap

### ✅ Phase 1 — Completed
- JWT login with profile fetch + localStorage session management
- Angular 18 standalone components — no NgModules
- Lazy-loaded routes with `authGuard`
- Three-interceptor stack: cache + loader + auth
- 30-second JWT expiry timer in `AppComponent`
- `BaseListComponent<T>` — generic CRUD base for all 12 feature pages
- `DynamicFormModalComponent` — single reusable form modal driven by `FieldConfig[]`
- Topbar profile dropdown — name, role, email, mobile, agent ID
- Edit Profile modal with BCrypt-verified password change
- Pagination component with configurable page size
- Toast notification system (success / error / warning)
- Global loading spinner overlay
- ng-openapi-gen auto-generated typed API services
- `generate:fields` script — auto-scaffold field configs from swagger

### 🚧 Phase 2 — Planned
- Role-based sidebar menu visibility (hide items by role)
- Hide Edit / Delete on Agents page for Agent role users
- Dashboard analytics charts
- Export to CSV / Excel on list pages
- Refresh token silent renewal

### 🔮 Phase 3 — Future
- Dark mode support
- Reseller sub-panel with white-labeling
- Real-time notifications via SignalR or WebSocket
- AI-powered agent risk dashboard

---

## 📞 Contact & Support

| Channel | Details |
|---|---|
| 📧 Email | dixitvicky521@gmail.com |
| 📞 WhatsApp | +91-9712729575 |
| 🌐 Website | https://bharatbankx.com *(Coming Soon)* |

---

## 🛡️ Disclaimer

This is a professional-grade fintech application. Actual deployment of AEPS, UPI, BBPS, or Micro ATM services requires real-time integration with certified banking APIs, NPCI, UIDAI, and full compliance with RBI / IRDA regulations. This repository is intended for development, demonstration, and integration-ready deployment **for licensed entities only**.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

<p align="center">Built with ❤️ for Bharat by <strong>V-Key Dixit</strong></p>
