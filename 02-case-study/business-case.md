# Business Case

## OpenAI Enterprise Billing System — CST2310

---

## 1. Problem Statement

Enterprise organisations using OpenAI's API services lack a centralised platform to manage, monitor, and control their AI-related expenditure. Current processes rely on manual reconciliation of monthly invoices against departmental spreadsheets, resulting in delayed cost visibility, budget overruns, security blind spots in API key management, and non-compliance with financial audit requirements. The absence of real-time monitoring means anomalous usage — whether from a compromised API key or an unoptimised application — can incur significant unplanned costs before detection.

---

## 2. Proposed Solution

A web-based enterprise billing management dashboard that provides:

- **Real-time usage and cost tracking** across all departments, projects, and AI models
- **Automated budget monitoring** with configurable threshold alerts
- **Centralised API key lifecycle management** (creation, rotation, revocation, permissions)
- **Multi-category alerting** (quota, anomaly, security, billing) with severity levels and acknowledgement workflows
- **Comprehensive audit trail** for regulatory compliance and internal governance
- **Sustainability metrics** estimating energy consumption and carbon emissions from AI workloads
- **Role-based access control** supporting Administrator, Department Manager, Finance Officer, Developer, and Auditor personas

---

## 3. Benefits Analysis

### 3.1 Tangible Benefits

| Benefit | Estimated Value | Basis |
|---|---|---|
| Reduction in budget overruns | 15–25% decrease in unplanned AI spend | Real-time alerts enable proactive budget management |
| Finance team time savings | 20 hours/month saved on manual reconciliation | Automated reporting replaces spreadsheet-based tracking |
| Faster anomaly detection | Response time reduced from 30 days to < 1 hour | Real-time monitoring versus monthly invoice review |
| Reduced security incidents | Estimated 40% reduction in key-related breaches | Automated rotation policies and usage monitoring |
| Audit preparation time | 80% reduction in compliance audit preparation | Automated audit trail versus manual evidence gathering |

### 3.2 Intangible Benefits

- **Improved decision-making:** Managers gain data-driven insight into AI spending patterns and model efficiency
- **Enhanced accountability:** Department-level budget ownership with transparent cost attribution
- **Regulatory confidence:** Demonstrable compliance with financial audit, GDPR, and emerging AI governance requirements
- **Sustainability credentials:** Quantified environmental impact supports corporate ESG reporting
- **Operational agility:** Faster onboarding of new departments and projects through self-service capabilities

---

## 4. Costs and ROI

### 4.1 Development Costs (Estimated)

| Cost Category | Estimated Cost (GBP) |
|---|---|
| Requirements analysis and design | £15,000 |
| Frontend development (Next.js dashboard) | £30,000 |
| Backend development (API, database, integrations) | £35,000 |
| Testing and quality assurance | £10,000 |
| Infrastructure (cloud hosting, first year) | £8,000 |
| Training and documentation | £5,000 |
| **Total** | **£103,000** |

### 4.2 Annual Operating Costs

| Item | Annual Cost (GBP) |
|---|---|
| Cloud hosting and infrastructure | £8,000 |
| Maintenance and support | £12,000 |
| **Total** | **£20,000** |

### 4.3 Return on Investment

For an enterprise spending £500,000/year on OpenAI API services:

- **Annual savings from reduced overruns:** £75,000–£125,000 (15–25% of £500,000)
- **Annual savings from efficiency gains:** £25,000 (20 hrs/month × £104/hr loaded cost)
- **Total annual benefit:** £100,000–£150,000
- **Payback period:** 9–12 months
- **3-year ROI:** 190–335%

---

## 5. Risk Assessment

| Risk | Impact | Mitigation |
|---|---|---|
| OpenAI changes its API or billing structure | High | Design system with abstraction layer; monitor OpenAI changelog |
| User adoption resistance | Medium | Involve key stakeholders in requirements gathering; iterative prototyping |
| Integration complexity with existing finance systems | Medium | Define clear API interfaces; phased integration approach |
| Data security breach | High | Encryption at rest and in transit; RBAC; regular penetration testing |
| Scope creep during development | Medium | Fixed scope defined by requirements specification; change control process |

---

## 6. Success Criteria and KPIs

| KPI | Target | Measurement Method |
|---|---|---|
| Budget overrun frequency | < 5% of departments per quarter | System-reported threshold breaches |
| Mean time to detect anomalies | < 1 hour | Alert timestamp versus usage event timestamp |
| Finance reconciliation time | < 2 hours/month (down from 20) | User survey and time tracking |
| API key rotation compliance | 100% of keys rotated within policy period | System-reported key age metrics |
| Audit preparation time | < 1 day (down from 5 days) | Auditor feedback and time tracking |
| User satisfaction | > 4.0/5.0 | Post-deployment survey (SUS score) |
| System availability | 99.9% uptime | Infrastructure monitoring |

---

## 7. Recommendation

The business case demonstrates clear financial justification for the OpenAI Enterprise Billing system. The combination of measurable cost savings, risk reduction, and compliance benefits delivers a strong return on investment within the first year. The project is recommended for approval.
