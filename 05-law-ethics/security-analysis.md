# Security Measures Analysis

## OpenAI Enterprise Billing System — CST2310

---

## 1. Introduction

The OpenAI Enterprise Billing System handles sensitive financial data, API credentials, and personal information. Robust security measures are essential to safeguard this data against unauthorised access, disclosure, alteration, and destruction. This analysis examines the security measures implemented in the system, structured around the CIA triad (Confidentiality, Integrity, Availability) and aligned with ISO/IEC 27001:2022 information security controls (ISO, 2022).

---

## 2. The CIA Triad

### 2.1 Confidentiality

Confidentiality ensures that information is accessible only to those authorised to access it (Stallings and Brown, 2018).

| Measure | Implementation | System Component |
|---|---|---|
| Role-Based Access Control (RBAC) | Five defined roles (Administrator, Dept Manager, Finance Officer, Developer, Auditor) with least-privilege permissions | `User.role`, `hasPermission()` |
| API key hashing | Keys stored as bcrypt hashes; full key shown only once at creation | `ApiKey.keyHash`, `maskedKey` |
| Password hashing | User passwords stored as salted bcrypt hashes, never plaintext | `User.passwordHash` |
| Data masking | API keys displayed as masked values (e.g., `sk-...a1b2`) in all UI views | `ApiKey.getMaskedDisplay()` |
| Encryption in transit | All HTTP traffic uses TLS 1.3 with strong cipher suites | Infrastructure layer |
| Encryption at rest | Database encryption using AES-256 for sensitive fields | Database layer |
| Session management | Secure session tokens with expiry; automatic logout after inactivity | Authentication module |

### 2.2 Integrity

Integrity ensures that information is accurate, complete, and has not been tampered with (Stallings and Brown, 2018).

| Measure | Implementation | System Component |
|---|---|---|
| Immutable audit trail | All significant actions logged with actor, target, timestamp, and details; entries cannot be modified or deleted | `AuditEntry` entity |
| Input validation | Budget values validated (>= 0, >= current spend); API key permissions validated against allowed list | `Department Service`, `Key Service` |
| Referential integrity | Foreign key constraints between entities (e.g., UsageRecord -> Department, UsageRecord -> Model) | Database schema (ERD) |
| Cost calculation verification | Costs calculated server-side using verified model pricing, not client-submitted values | `Billing Service.calculateCost()` |
| Data versioning | `AppSettings.dataVersion` tracks schema changes to prevent data corruption during migrations | `AppSettings` entity |

### 2.3 Availability

Availability ensures that information and systems are accessible when needed by authorised users (Stallings and Brown, 2018).

| Measure | Implementation | System Component |
|---|---|---|
| Quota alerting | Proactive alerts at 80%, 90%, and 100% budget utilisation prevent unexpected service disruption | `Alert Service`, threshold evaluation |
| Graceful degradation | The system continues recording usage even if alert or audit services are temporarily unavailable | `Billing Service` error handling |
| Data export | Reports and audit data can be exported as CSV for offline access | `Export Service` |
| Backup and recovery | Regular automated database backups with tested restoration procedures | Infrastructure layer |
| Escalation timers | Unacknowledged alerts automatically escalate after 24 hours to prevent issues being overlooked | `Alert Service.startEscalationTimer()` |

---

## 3. Authentication and Authorisation

### 3.1 Authentication Mechanisms

- **Password-based authentication:** Users authenticate with email and password; passwords are hashed using bcrypt with a minimum cost factor of 12
- **Password policy:** Minimum 12 characters, requiring uppercase, lowercase, digits, and special characters
- **Account lockout:** After 5 failed login attempts, the account is locked for 30 minutes; the event is logged as a SECURITY audit entry
- **Session expiry:** Sessions expire after 30 minutes of inactivity; re-authentication is required for sensitive operations (e.g., API key rotation, budget changes)

### 3.2 Authorisation Matrix

| Action | Administrator | Dept Manager | Finance Officer | Developer | Auditor |
|---|---|---|---|---|---|
| Create/edit departments | Yes | No | No | No | No |
| Update department budget | Yes | No | No | No | No |
| Create/rotate API keys | Yes | No | No | No | No |
| View own usage data | Yes | Yes | No | Yes | No |
| View department usage | Yes | Yes | Yes | No | No |
| Generate reports | Yes | No | Yes | No | No |
| Acknowledge alerts | Yes | Yes | No | No | No |
| View audit trail | Yes | No | No | No | Yes |
| Export audit reports | No | No | No | No | Yes |
| Modify system settings | Yes | No | No | No | No |

---

## 4. API Key Security

API keys are the most sensitive credentials in the system. The following measures protect them:

1. **One-time display:** The full API key is shown exactly once at creation. After the user copies it, the key is cleared from the display and never shown again
2. **Hashed storage:** Only the bcrypt hash of the key is stored in the database (`keyHash`). The system cannot retrieve the original key
3. **Masked display:** A truncated version (`maskedKey`, e.g., `sk-...a1b2`) is used for identification in lists and logs
4. **Emergency rotation:** Compromised keys can be immediately revoked and replaced with a new key that inherits the same permissions
5. **Usage tracking:** `lastUsed` timestamps enable identification of unused or potentially compromised keys
6. **Audit logging:** All key creation, rotation, and revocation events are logged with SECURITY category

---

## 5. Alignment with ISO/IEC 27001:2022

| ISO 27001 Control | System Implementation |
|---|---|
| A.5.1 Information security policies | Security policies documented; RBAC enforced system-wide |
| A.5.15 Access control | Five-role RBAC with least-privilege principle |
| A.5.23 Information security for cloud services | TLS 1.3 for API communication with OpenAI; SCCs in place |
| A.5.33 Protection of records | Immutable audit trail; 7-year retention for financial records |
| A.8.2 Privileged access rights | Administrator role restricted; all admin actions audited |
| A.8.3 Information access restriction | Users see only data relevant to their role and department |
| A.8.5 Secure authentication | Bcrypt password hashing; session management; account lockout |
| A.8.9 Configuration management | `AppSettings` with version tracking; change logging |
| A.8.24 Use of cryptography | AES-256 at rest; TLS 1.3 in transit; bcrypt for credentials |

---

## 6. Threat Assessment

| Threat | Likelihood | Impact | Mitigation |
|---|---|---|---|
| API key compromise | Medium | Critical | Emergency rotation, one-time display, hashed storage, anomaly detection |
| Unauthorised data access | Low | High | RBAC, session management, audit trail |
| SQL injection | Low | Critical | Parameterised queries, input validation, ORM usage |
| Cross-site scripting (XSS) | Low | Medium | Output encoding, Content Security Policy headers |
| Insider threat | Low | High | Least-privilege access, immutable audit trail, separation of duties |
| Brute-force attack | Medium | Medium | Account lockout, bcrypt cost factor, rate limiting |

---

## References

- ISO (2022) *ISO/IEC 27001:2022 Information security, cybersecurity and privacy protection*. International Organization for Standardization.
- Stallings, W. and Brown, L. (2018) *Computer Security: Principles and Practice*. 4th edn. Harlow: Pearson Education.
- NCSC (2024) *Cyber Essentials*. National Cyber Security Centre.
