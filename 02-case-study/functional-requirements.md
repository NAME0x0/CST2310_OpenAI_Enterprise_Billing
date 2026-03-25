# Functional Requirements

## OpenAI Enterprise Billing System — CST2310

**Prioritisation:** MoSCoW (Must, Should, Could, Won't)

---

## User Management

| FR ID | Requirement | Description | Priority | Actor | Related UC |
|---|---|---|---|---|---|
| FR-01 | Authenticate users | The system shall authenticate users via email and password with multi-factor authentication | Must | All | UC: System Login |
| FR-02 | Enforce role-based access | The system shall restrict functionality based on user role (Administrator, Department Manager, Finance Officer, Developer, Auditor) | Must | Administrator | UC: Manage User Roles |
| FR-03 | Manage user accounts | The system shall allow administrators to create, deactivate, and modify user accounts | Must | Administrator | UC: Manage Users |

---

## Billing and Usage Tracking

| FR ID | Requirement | Description | Priority | Actor | Related UC |
|---|---|---|---|---|---|
| FR-04 | Record API usage | The system shall automatically record each API usage event with model, tokens (input/output), cost, timestamp, department, project, and user | Must | System | UC: Record API Usage |
| FR-05 | Display real-time spend | The system shall display total spend, tokens consumed, and active departments on the dashboard with real-time updates | Must | All | UC: View Dashboard |
| FR-06 | Filter usage records | The system shall allow users to filter usage records by department, model, project, date range, and user | Must | Dept Manager, Finance | UC: View Usage |
| FR-07 | Track model pricing | The system shall maintain a catalogue of AI models with cost per 1K input tokens, cost per 1K output tokens, context window, and status | Must | Administrator | UC: Manage Models |
| FR-08 | Calculate department spend | The system shall compute cumulative spend per department by aggregating all usage records linked to that department | Must | System | UC: View Department |
| FR-09 | Monitor project budgets | The system shall track spend against budget for each project within a department | Should | Dept Manager | UC: Manage Projects |

---

## API Key Management

| FR ID | Requirement | Description | Priority | Actor | Related UC |
|---|---|---|---|---|---|
| FR-10 | Create API keys | The system shall allow authorised users to create new API keys with a name, department association, and permission set | Must | Administrator, Developer | UC: Create API Key |
| FR-11 | Rotate API keys | The system shall support manual and scheduled rotation of API keys, generating a new key and revoking the old one atomically | Must | Administrator | UC: Rotate API Key |
| FR-12 | Revoke API keys | The system shall allow immediate revocation of compromised or unused API keys | Must | Administrator | UC: Revoke API Key |
| FR-13 | Display masked keys | The system shall display API keys in masked format (e.g., `sk-...abc123`) and only show the full key at creation time | Must | Developer | UC: View API Keys |
| FR-14 | Track key usage | The system shall record the last-used timestamp for each API key | Should | System | UC: View API Keys |

---

## Alerting and Notifications

| FR ID | Requirement | Description | Priority | Actor | Related UC |
|---|---|---|---|---|---|
| FR-15 | Configure quota alerts | The system shall allow users to set quota threshold percentages that trigger alerts when a department's spend reaches that proportion of its budget | Must | Administrator, Dept Manager | UC: Configure Quota Alert |
| FR-16 | Generate automatic alerts | The system shall automatically generate alerts for quota breaches, usage anomalies, security events, and billing milestones | Must | System | UC: Trigger Alert |
| FR-17 | Acknowledge alerts | The system shall allow authorised users to acknowledge alerts, recording the acknowledgement in the audit trail | Must | Dept Manager, Administrator | UC: Acknowledge Alert |
| FR-18 | Filter alerts | The system shall allow users to filter alerts by type (quota/anomaly/security/billing), severity (info/warning/critical), and acknowledgement status | Should | All | UC: View Alerts |

---

## Reporting and Audit

| FR ID | Requirement | Description | Priority | Actor | Related UC |
|---|---|---|---|---|---|
| FR-19 | Generate usage reports | The system shall generate monthly and ad-hoc usage reports summarising spend by department, model, and project | Must | Finance Officer | UC: Generate Report |
| FR-20 | Export data | The system shall support CSV export of usage records, department summaries, and audit logs | Should | Finance Officer, Auditor | UC: Export Data |
| FR-21 | Maintain audit trail | The system shall record an immutable audit entry for every significant action (settings change, alert acknowledgement, key operation, budget modification) with actor, timestamp, and details | Must | System | UC: Record Audit Entry |
| FR-22 | Query audit trail | The system shall allow auditors to search and filter audit entries by category (access/config/billing/security), date range, actor, and action type | Must | Auditor | UC: Review Audit Trail |

---

## Settings and Configuration

| FR ID | Requirement | Description | Priority | Actor | Related UC |
|---|---|---|---|---|---|
| FR-23 | Configure system settings | The system shall allow administrators to set quota threshold defaults, alert email recipients, display currency (USD/EUR/GBP), and data version | Should | Administrator | UC: Manage Settings |
| FR-24 | Compute energy metrics | The system shall estimate energy consumption (kWh), CO₂ emissions (kg), PUE ratio, and renewable energy percentage based on total token usage | Could | System | UC: View Sustainability |

---

## Summary

| Priority | Count |
|---|---|
| Must | 17 |
| Should | 5 |
| Could | 1 |
| Won't (this release) | 0 |
| **Total** | **23** |
