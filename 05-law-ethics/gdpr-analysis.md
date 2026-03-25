# GDPR Compliance Analysis

## OpenAI Enterprise Billing System — CST2310

---

## 1. Introduction to UK GDPR

The UK General Data Protection Regulation (UK GDPR), retained from EU Regulation 2016/679 after Brexit and supplemented by the Data Protection Act 2018, governs the processing of personal data relating to individuals in the United Kingdom (ICO, 2024). The OpenAI Enterprise Billing System processes personal data of employees (developers, managers, finance officers, auditors, administrators) and must therefore comply with the seven key principles of UK GDPR.

---

## 2. Personal Data Processed by the System

| Data Category | Examples | Data Subjects | Lawful Basis |
|---|---|---|---|
| Identity data | Name, email, user ID | All users | Legitimate interest (Art. 6(1)(f)) |
| Authentication data | Password hash, last login | All users | Legitimate interest |
| Usage data | API calls, token counts, timestamps | Developers | Performance of contract (Art. 6(1)(b)) |
| Financial data | Department budgets, spend totals, cost records | Finance Officers, Dept Managers | Performance of contract |
| Audit trail data | Action, actor, target, timestamp, details | All users (as actors) | Legal obligation (Art. 6(1)(c)) |
| API key metadata | Key hash, masked key, permissions, last used | Developers, Administrators | Legitimate interest |
| Alert data | Alert type, severity, acknowledgement records | Dept Managers | Legitimate interest |

---

## 3. Compliance with the Seven Principles

### 3.1 Lawfulness, Fairness, and Transparency (Article 5(1)(a))

**Implementation:**

- A clear privacy notice is displayed at first login, explaining what data is collected, why, and how it is used
- Each data processing activity maps to a specific lawful basis (see table above)
- Users can access a "Privacy & Data" section in Settings to review what data the system holds about them
- Processing purposes are communicated in plain English, avoiding technical jargon

**System features supporting this principle:**

- Privacy notice acceptance is recorded in the audit trail
- The `AuditEntry` entity logs all data processing activities with actor, action, and timestamp
- Data collection is limited to what is necessary for billing operations

### 3.2 Purpose Limitation (Article 5(1)(b))

**Implementation:**

- Data is collected solely for the purposes of API usage billing, budget management, security monitoring, and compliance auditing
- Usage data is not repurposed for employee performance monitoring or surveillance
- The system does not share personal data with third parties beyond what is necessary for OpenAI API interactions
- Any new processing purpose requires a Data Protection Impact Assessment (DPIA) before implementation

### 3.3 Data Minimisation (Article 5(1)(c))

**Implementation:**

- API keys are stored as hashes (`keyHash`) rather than plaintext — the full key is shown only once at creation
- The `maskedKey` field displays only the last four characters (e.g., `sk-...a1b2`) for identification
- Usage records store department-level attribution rather than individual keystroke-level tracking
- The `User` entity collects only the minimum fields required: name, email, role, department
- Passwords are stored as cryptographic hashes, never in plaintext

### 3.4 Accuracy (Article 5(1)(d))

**Implementation:**

- Users can update their own profile information (name, email) through the Settings page
- Department Managers can correct budget and project information
- Administrators can deactivate (not delete) user accounts to maintain audit trail integrity
- The `lastLogin` timestamp automatically updates, ensuring session data remains current
- Model pricing data (`costPer1kInput`, `costPer1kOutput`) is maintained by Administrators and versioned

### 3.5 Storage Limitation (Article 5(1)(e))

**Implementation:**

- A data retention policy defines maximum retention periods:
  - Usage records: 7 years (financial regulatory requirement)
  - Audit entries: 7 years (compliance requirement)
  - Revoked API keys: 90 days, then permanently deleted
  - Deactivated user accounts: 2 years, then anonymised
- Automated retention jobs flag records approaching their retention limit
- The `AppSettings` entity includes a `dataVersion` field to track schema migrations

### 3.6 Integrity and Confidentiality (Article 5(1)(f))

**Implementation:**

- Role-Based Access Control (RBAC) restricts data access by user role:
  - Developers: own usage data only
  - Department Managers: department-level data
  - Finance Officers: organisation-wide financial data (read-only)
  - Auditors: audit trail (read-only)
  - Administrators: full system access
- All data in transit is encrypted via TLS 1.3
- All data at rest is encrypted using AES-256
- API keys are hashed using bcrypt before storage
- The audit trail provides a tamper-evident record of all system actions
- See `05-law-ethics/security-analysis.md` for detailed security measures

### 3.7 Accountability (Article 5(2))

**Implementation:**

- The organisation maintains a Record of Processing Activities (ROPA) as required by Article 30
- A Data Protection Officer (DPO) is designated to oversee GDPR compliance
- The `AuditEntry` entity provides an immutable record of who did what and when
- DPIAs are conducted before introducing new features that process personal data
- Staff training records are maintained to demonstrate ongoing compliance awareness
- The system logs all data access events, enabling retrospective accountability reviews

---

## 4. Data Subject Rights

| Right | GDPR Article | System Implementation |
|---|---|---|
| Right of access | Art. 15 | Users can export their personal data from the Settings page |
| Right to rectification | Art. 16 | Users can edit their profile; Admins can correct department data |
| Right to erasure | Art. 17 | Admins can anonymise user records (subject to retention requirements) |
| Right to restriction | Art. 18 | User accounts can be deactivated, halting processing while retaining data |
| Right to data portability | Art. 20 | Usage data and reports can be exported as CSV |
| Right to object | Art. 21 | Users can object to processing; escalated to DPO for assessment |
| Automated decision-making | Art. 22 | Quota alerts involve automated processing but do not produce legal effects; human review is required before any budget enforcement action |

---

## 5. Data Protection Impact Assessment (DPIA)

A DPIA is required under Article 35 because the system involves:

- **Systematic monitoring** of employee API usage patterns
- **Large-scale processing** of usage data across multiple departments
- **Automated alerting** based on spending thresholds

The DPIA should assess:

1. The necessity and proportionality of processing
2. Risks to data subjects (e.g., usage data being used for performance management)
3. Measures to mitigate identified risks
4. Consultation with the DPO and, where necessary, the ICO

---

## 6. International Data Transfers

Since API calls are made to OpenAI's servers (headquartered in the United States), the system involves international data transfers. Compliance measures include:

- Standard Contractual Clauses (SCCs) with OpenAI as the data processor
- A Transfer Impact Assessment documenting the adequacy of US data protection
- Data minimisation in API requests — sending only the minimum data required for the API call
- The billing system itself is hosted within the UK, with only API request/response data crossing borders

---

## 7. Breach Notification

In the event of a personal data breach, the system supports compliance with Articles 33 and 34:

- **Detection:** The Alert Service generates CRITICAL security alerts for anomalous activity (e.g., suspected API key compromise)
- **72-hour notification:** The audit trail provides the evidence needed to notify the ICO within 72 hours
- **Communication to data subjects:** The Notification Service can send breach notifications to affected users
- **Documentation:** All breach-related actions are logged in the audit trail for regulatory evidence

---

## References

- ICO (2024) *Guide to the UK General Data Protection Regulation (UK GDPR)*. Information Commissioner's Office.
- Data Protection Act 2018, c. 12. London: The Stationery Office.
- Regulation (EU) 2016/679 of the European Parliament and of the Council (General Data Protection Regulation).
