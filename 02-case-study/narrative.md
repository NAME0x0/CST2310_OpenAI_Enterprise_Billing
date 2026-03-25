# Case Study Narrative

## OpenAI Enterprise Billing System — CST2310

---

## 1. Information System Classification

Before examining the case study, it is essential to define the types of information systems relevant to this analysis.

### Business Information System (BIS)

A Business Information System is a computer-based system that supports the operational and managerial activities of an organisation. It collects, processes, stores, and distributes information to support decision-making, coordination, control, and analysis (Laudon and Laudon, 2020). A BIS integrates hardware, software, data, people, and procedures to serve strategic, tactical, and operational objectives.

### Transaction Processing System (TPS)

A Transaction Processing System is the most fundamental type of information system. It records and processes the data resulting from routine business transactions such as sales, purchases, and payments (Stair and Reynolds, 2018). A TPS must operate with high reliability, processing large volumes of transactions accurately and efficiently. Examples include point-of-sale systems, payroll processing, and — in the context of this case study — the real-time recording of API usage events and their associated costs.

### Management Information System (MIS)

A Management Information System provides middle managers with reports and online access to the organisation's current performance and historical records (Laudon and Laudon, 2020). An MIS typically draws data from a TPS and presents it in summarised form through dashboards, scheduled reports, and ad-hoc queries. It supports structured decision-making by highlighting trends, exceptions, and variances against targets.

### Classification of the OpenAI Enterprise Billing System

The proposed system operates as a **Business Information System** that incorporates both TPS and MIS characteristics:

- **TPS layer:** Every API call generates a usage record (tokens consumed, cost incurred, timestamp, model used). The system processes thousands of such transactions daily with high accuracy and reliability.
- **MIS layer:** The dashboard aggregates transaction data into KPI cards, spend-over-time charts, department cost comparisons, quota utilisation gauges, and exportable compliance reports. These support managerial decision-making regarding budget allocation, cost control, and resource planning.
- **BIS integration:** The system unifies transactional processing with management reporting, adding governance capabilities (API key lifecycle management, role-based access control, audit trails) that serve the organisation's strategic objectives around AI cost optimisation and regulatory compliance.

---

## 2. Background and Market Context

The rapid adoption of large language models (LLMs) and generative AI across enterprises has created a new category of operational expenditure. Organisations deploying OpenAI's API for tasks such as customer support, code generation, content creation, and data analysis face significant challenges in managing the associated costs.

OpenAI's enterprise offerings provide access to models including GPT-4o, GPT-4.5, and specialised models (o1, o3) through a usage-based pricing model. Enterprises are charged per token — the fundamental unit of text processed by the model — with different rates for input and output tokens and across different model tiers.

As AI adoption scales within large organisations, the following challenges emerge:

- **Cost visibility:** Multiple departments and project teams consume API resources independently, making it difficult to attribute costs accurately
- **Budget control:** Without real-time spending visibility, departments frequently exceed their allocated budgets before finance teams become aware
- **Compliance requirements:** Financial regulations and internal audit standards require comprehensive audit trails of all billing-related activities
- **Security governance:** API keys — the credentials used to access OpenAI's services — must be managed securely, with rotation policies, revocation capabilities, and usage monitoring
- **Sustainability reporting:** Increasing regulatory pressure requires organisations to estimate and report the energy consumption and carbon footprint of their AI workloads

---

## 3. Current System Problems

Without a centralised billing management system, enterprises currently face:

1. **Manual spend tracking:** Finance teams rely on monthly invoices from OpenAI and manually reconcile usage against department budgets using spreadsheets
2. **Delayed budget alerts:** By the time a department's overspending is identified, the budget may already be significantly exceeded
3. **Fragmented API key management:** Developers create and manage API keys informally, with no central register of active keys, their permissions, or when they were last rotated
4. **No real-time anomaly detection:** Unusual usage patterns (e.g., a compromised key generating excessive API calls) go undetected until the monthly invoice arrives
5. **Audit gaps:** There is no systematic record of who changed settings, acknowledged alerts, or modified budgets, creating compliance risks
6. **No sustainability visibility:** The energy and carbon impact of AI usage is unknown, making environmental reporting impossible

---

## 4. Proposed System Description

The OpenAI Enterprise Billing system is a web-based dashboard that provides centralised management of AI model usage, billing, and governance for enterprise organisations. The system comprises the following functional areas:

| Module | Description |
|---|---|
| **Dashboard** | Real-time KPIs: total spend, active departments, total tokens, active alerts. Spend-over-time charts, cost-by-department breakdown, usage-by-model distribution, quota utilisation gauges |
| **Usage Tracking** | Detailed usage records filterable by department, model, project, date range. Token counts, costs, and trends |
| **Model Catalogue** | Registry of available AI models with pricing (cost per 1K input/output tokens), context window sizes, and status (active/deprecated/restricted) |
| **Department Management** | Department profiles with budget allocation, current spend, headcount, and cost centre mapping |
| **Project Management** | Project-level budget tracking within departments, with status management (active/paused/completed) |
| **API Key Management** | Full lifecycle: creation, permission assignment, rotation, revocation. Masked key display, usage timestamp tracking |
| **Alert System** | Configurable alerts for quota thresholds, usage anomalies, security events, and billing milestones. Severity levels (info/warning/critical) with acknowledgement workflow |
| **Reporting** | Monthly and ad-hoc report generation for finance, compliance, and management. CSV export functionality |
| **Audit Trail** | Immutable log of all system actions: settings changes, alert acknowledgements, key operations, access events. Categorised by access/config/billing/security |
| **Settings** | System configuration: quota threshold percentage, alert email, currency (USD/EUR/GBP), user role management |

---

## 5. System Actors

| Actor | Type | Description | Key Interactions |
|---|---|---|---|
| **Administrator** | Primary | Full system access; responsible for system configuration, user management, and department setup | Creates departments, manages API keys, configures settings, reviews audit trail |
| **Department Manager** | Primary | Manages their department's budget, projects, and usage | Views department spend, creates projects, acknowledges alerts, requests budget changes |
| **Finance Officer** | Primary | Responsible for financial oversight, reporting, and budget approval | Generates reports, reviews billing data, approves budget allocations, exports financial data |
| **Developer** | Primary | Uses API keys to access OpenAI services; views own usage | Creates API keys, views usage records, manages project associations |
| **Auditor** | Primary | External or internal auditor with read-only access to compliance data | Reviews audit trail, generates compliance reports, verifies access controls |
| **System** | Secondary (automated) | The platform itself, performing automated functions | Records usage transactions, triggers alerts, computes energy metrics, enforces quota limits |

---

## 6. Key Business Processes

### 6.1 Usage Tracking and Billing

When a developer makes an API call through OpenAI's service, the billing system records a usage event containing the model used, tokens consumed (input and output), computed cost, timestamp, and the associated department and project. These records are aggregated in real time and displayed on the dashboard.

### 6.2 Budget Management

Each department is assigned a budget by the administrator or finance officer. The system continuously compares actual spending against the budget and triggers alerts when configurable thresholds are reached (e.g., 80%, 90%, 100%). Department managers can view their spending trajectory and request budget adjustments.

### 6.3 API Key Lifecycle

API keys are created by administrators or developers, assigned to a department, and granted specific permissions. The system tracks creation date, last usage, and status (active/revoked/expired). Security policies require periodic rotation; compromised keys can be immediately revoked, with an audit entry recorded for each lifecycle event.

### 6.4 Alert Handling

The system generates alerts across four categories: quota (budget thresholds), anomaly (unusual usage patterns), security (failed authentication, key compromise), and billing (invoice milestones). Each alert has a severity level and must be acknowledged by an authorised user. Unacknowledged critical alerts are escalated.

### 6.5 Audit and Compliance

Every significant action within the system — settings changes, alert acknowledgements, key operations, budget modifications — is recorded in an immutable audit trail. Auditors can query this trail by category, date range, actor, or action type. Compliance reports can be generated for regulatory purposes.

### 6.6 Sustainability Monitoring

The system estimates energy consumption (kWh) and carbon emissions (kg CO₂) based on token usage, applying configurable factors for energy per token, carbon intensity per kWh, power usage effectiveness (PUE), and renewable energy percentage. These metrics support the organisation's environmental reporting obligations.

---

## References

Laudon, K.C. and Laudon, J.P. (2020) *Management Information Systems: Managing the Digital Firm*. 16th edn. Harlow: Pearson.

Stair, R.M. and Reynolds, G.W. (2018) *Principles of Information Systems*. 13th edn. Boston: Cengage Learning.
