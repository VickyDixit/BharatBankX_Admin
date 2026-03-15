# BharatBankX Admin — Angular 18

## ✅ Compatible With
- Node.js v20 / v22 / **v24**
- npm v10 / **v11**
- Angular 18 + TypeScript 5.4

---

## 🚀 Setup

```bash
cd bharatbankx-admin
npm install --legacy-peer-deps
npm start
```

Open **http://localhost:4200**

---

## ⚙️ Proxy (for .NET Core API)

`proxy.conf.json` is already configured. Change the target to match your .NET port:

```json
{
  "/api": {
    "target": "https://localhost:7001",   ← your .NET port here
    "secure": false,
    "changeOrigin": true
  }
}
```

`npm start` automatically uses the proxy.
To run WITHOUT proxy: `npm run start:no-proxy`

---

## 📁 Project Structure

```
src/
├── styles.scss                      ← ALL styles (one file)
├── app/
│   ├── app.component.ts / .html / .scss
│   ├── app.config.ts
│   ├── app.routes.ts
│   ├── core/
│   │   ├── models/models.ts         ← all interfaces
│   │   └── services/
│   │       └── toast.service.ts     ← only kept service
│   ├── features/
│   │   ├── dashboard/               ← .ts + .html + .scss
│   │   ├── banks/
│   │   ├── master-workflows/
│   │   ├── workflows/
│   │   ├── workflow-forms/
│   │   ├── agents/
│   │   ├── agent-logs/
│   │   ├── workflow-transactions/
│   │   ├── json-debugger/
│   │   ├── update-pushes/
│   │   ├── notifications/
│   │   └── device-locks/
│   └── shared/
│       └── components/
│           ├── layout/
│           ├── sidebar/
│           ├── topbar/
│           └── toast-container/
└── environments/
    ├── environment.ts               ← dev (uses proxy)
    └── environment.prod.ts          ← production URL
```

---

## 🔌 Adding Your Swagger Services

1. Generate services from your .NET Swagger using **NSwag** or **ng-openapi-gen**:
   ```bash
   # Option A: NSwag
   npx nswag openapi2tsclient /input:https://localhost:7001/swagger/v1/swagger.json /output:src/app/core/services/api-client.ts

   # Option B: ng-openapi-gen
   npx ng-openapi-gen --input https://localhost:7001/swagger/v1/swagger.json --output src/app/core/services
   ```

2. Inject the generated service into each feature component:
   ```ts
   constructor(private svc: BanksService) {}
   ngOnInit() { this.svc.getBanks().subscribe(r => { this.items = r; this.applyFilter(); }); }
   ```

---

## 📦 12 Modules
Dashboard · Banks · Master Workflows · Workflows · Workflow Forms ·
Agents · Agent Logs · Transactions · JSON Debugger · Update Pushes ·
Notifications · Device Locks
