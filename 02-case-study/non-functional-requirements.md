# Non-Functional Requirements

## OpenAI Enterprise Billing System — CST2310

---

## Requirements Table

| NFR ID | Category | Requirement | Metric / Measure | Priority |
|---|---|---|---|---|
| NFR-01 | **Performance** | The dashboard shall load within 2 seconds on a standard broadband connection | Page load time ≤ 2s (Lighthouse performance score ≥ 90) | Must |
| NFR-02 | **Performance** | The system shall process and display a usage record within 500ms of the API call completing | End-to-end latency ≤ 500ms from event to dashboard update | Should |
| NFR-03 | **Performance** | The system shall support concurrent access by at least 200 users without degradation | Response time remains ≤ 2s under 200 concurrent sessions | Must |
| NFR-04 | **Security** | All data in transit shall be encrypted using TLS 1.3 | Certificate validation; no cleartext HTTP endpoints | Must |
| NFR-05 | **Security** | All API keys shall be stored using one-way cryptographic hashing (bcrypt or Argon2) | Keys cannot be recovered from stored values; only masked display | Must |
| NFR-06 | **Security** | The system shall enforce role-based access control (RBAC) with least-privilege principles | Each role has only the permissions documented in the role matrix | Must |
| NFR-07 | **Security** | User sessions shall expire after 30 minutes of inactivity | Automatic logout after 30 minutes; session token invalidation | Must |
| NFR-08 | **Usability** | The system shall conform to WCAG 2.1 Level AA accessibility standards | Automated accessibility audit (axe-core) passes with zero critical violations | Must |
| NFR-09 | **Usability** | All interactive elements shall be accessible via keyboard navigation | Tab order is logical; all actions achievable without a mouse | Must |
| NFR-10 | **Usability** | The system shall provide clear error messages with actionable guidance when operations fail | Error messages include what went wrong and what the user should do next | Should |
| NFR-11 | **Reliability** | The system shall maintain 99.9% uptime (excluding planned maintenance windows) | Measured over rolling 30-day periods; ≤ 43 minutes unplanned downtime/month | Must |
| NFR-12 | **Reliability** | The audit trail shall be immutable — entries cannot be modified or deleted | Database constraints prevent UPDATE/DELETE on audit table; verified by penetration test | Must |
| NFR-13 | **Scalability** | The system shall handle 1 million usage records per month without performance degradation | Query response time ≤ 3s for filtered views on 12 months of data | Should |
| NFR-14 | **Compliance** | The system shall comply with UK GDPR requirements for processing personal data | DPIA completed; lawful basis documented; data subject rights implemented | Must |
| NFR-15 | **Compliance** | The system shall retain audit log entries for a minimum of 7 years | Retention policy configured; automated archival after active period | Must |
| NFR-16 | **Maintainability** | The system codebase shall maintain ≥ 80% unit test coverage | Measured by CI pipeline on every merge to main branch | Should |
| NFR-17 | **Maintainability** | The system shall use environment-based configuration (no hardcoded secrets or connection strings) | All secrets managed via environment variables or a secrets manager | Must |

---

## Summary by Category

| Category | Count | Must | Should |
|---|---|---|---|
| Performance | 3 | 2 | 1 |
| Security | 4 | 4 | 0 |
| Usability | 3 | 2 | 1 |
| Reliability | 2 | 2 | 0 |
| Scalability | 1 | 0 | 1 |
| Compliance | 2 | 2 | 0 |
| Maintainability | 2 | 1 | 1 |
| **Total** | **17** | **13** | **4** |
