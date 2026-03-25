# Data Collection Methods

## OpenAI Enterprise Billing System — CST2310

---

## Overview

Requirements for the OpenAI Enterprise Billing system were gathered using five complementary data collection methods. Each method was selected to address specific information needs and stakeholder groups, ensuring comprehensive coverage of both functional and non-functional requirements.

---

## 1. Semi-Structured Interviews

### Description

One-to-one interviews with key stakeholders, combining pre-prepared questions with the flexibility to explore emergent topics. Each interview lasted 30–45 minutes and was recorded (with consent) for later analysis.

### When Used

Inception phase (Weeks 7–8) — to understand current workflows, pain points, and expectations from each stakeholder group.

### Participants

| Interviewee Role | Number | Focus Area |
|---|---|---|
| Finance Officer | 2 | Billing reconciliation, reporting needs, audit requirements |
| Department Manager | 3 | Budget management, cost visibility, alert preferences |
| Developer | 4 | API key management, usage tracking, project association |
| IT Administrator | 1 | Security policies, access control, system configuration |
| Compliance/Audit | 1 | Regulatory requirements, audit trail expectations, data retention |

### Sample Questions

1. How do you currently track your department's AI spending?
2. What information do you need to see on a daily basis versus monthly?
3. When was the last time your department exceeded its AI budget, and how was it detected?
4. What is your current process for creating and rotating API keys?
5. What would an ideal alert notification look like for a budget threshold breach?

### Advantages

- Rich, detailed qualitative data about current workflows and pain points
- Ability to probe deeper into unexpected issues
- Builds rapport and stakeholder engagement

### Disadvantages

- Time-consuming to conduct and analyse (11 interviews × 45 minutes)
- Responses may be subjective or biased by the interviewee's perspective
- Difficult to generalise from small sample sizes

---

## 2. Online Questionnaire

### Description

A structured survey distributed to a wider group of potential system users via Microsoft Forms, containing a mix of closed-ended (Likert scale, multiple choice) and open-ended questions.

### When Used

Inception–Elaboration transition (Week 8–9) — to quantify the frequency and severity of problems identified in interviews, and to gather requirements from users who could not be interviewed.

### Participants / Distribution

- Distributed to all 45 employees across 6 departments who interact with AI services
- Response rate: 78% (35 responses)

### Sample Questions

| # | Question | Type |
|---|---|---|
| Q1 | How often do you check your department's AI spend? | Multiple choice (Daily / Weekly / Monthly / Never) |
| Q2 | Rate your satisfaction with the current billing visibility (1–5) | Likert scale |
| Q3 | Which features would be most valuable? (select all that apply) | Checkbox (Real-time dashboard / Automated alerts / API key management / Usage reports / Audit trail) |
| Q4 | Have you ever experienced a budget overrun due to AI usage? | Yes / No |
| Q5 | What single improvement would save you the most time? | Open-ended |

### Advantages

- Reaches a larger audience than interviews
- Quantifiable data enables statistical analysis (e.g., 89% reported insufficient cost visibility)
- Standardised questions allow comparison across departments

### Disadvantages

- Cannot probe deeper into responses
- Open-ended questions often receive superficial answers
- Response bias — those with strong opinions are more likely to respond

---

## 3. Observation

### Description

Direct observation of finance team members performing their monthly billing reconciliation process, and developers managing API keys in the current ad-hoc system.

### When Used

Inception phase (Week 8) — to understand actual workflows rather than reported workflows.

### Participants / Settings

| Observation Session | Duration | Setting |
|---|---|---|
| Finance reconciliation | 2 hours | Finance team office, monthly invoice processing |
| Developer API key workflow | 1 hour | Engineering team, key creation and rotation |
| Department budget review | 1 hour | Department manager's monthly budget meeting |

### Key Observations

- Finance team uses 4 separate spreadsheets to reconcile one month's billing
- API keys are stored in a shared text file on the team's network drive (security risk)
- Department managers only learn of budget overruns at end-of-month meetings
- No standardised process for reporting or escalating unusual spending patterns

### Advantages

- Reveals actual behaviour rather than self-reported behaviour
- Identifies inefficiencies and workarounds that users may not think to mention
- Provides context for requirements that interview data alone would not capture

### Disadvantages

- Hawthorne effect — participants may change behaviour when being observed
- Time-consuming and limited to scheduled activities
- Observer may misinterpret actions without contextual knowledge

---

## 4. Document Analysis

### Description

Review of existing organisational documents, policies, and systems to understand the current information landscape and regulatory constraints.

### When Used

Throughout Inception and Elaboration (Weeks 7–11) — ongoing as new documents were identified.

### Documents Analysed

| Document | Source | Insights Gained |
|---|---|---|
| OpenAI API pricing documentation | OpenAI website | Model pricing structure, token calculation methodology |
| Monthly billing invoices (past 6 months) | Finance department | Usage volumes, cost distribution, seasonal patterns |
| IT security policy | IT department | API key rotation requirements (90-day maximum), MFA policy, data classification |
| UK GDPR compliance handbook | Legal department | Personal data definitions, lawful basis requirements, retention periods |
| Internal audit report (2025) | Audit committee | Compliance gaps identified, audit trail requirements, data retention standards |
| Department budget spreadsheets | Department managers | Current budget tracking methodology, data fields, approval workflows |

### Advantages

- Provides objective, factual information not subject to recall bias
- Identifies regulatory and policy constraints early
- Documents existing data structures and workflows

### Disadvantages

- Documents may be outdated or not reflect current practice
- Cannot capture tacit knowledge or informal processes
- Large volume of documentation requires significant analysis time

---

## 5. Prototyping

### Description

An interactive prototype of the dashboard was built using the existing Next.js web application at `D:\OpenAI_Enterprise_Billing_Web` and demonstrated to stakeholders for feedback. The prototype included static data and all 10 pages (Dashboard, Usage, Models, Departments, Projects, API Keys, Alerts, Reports, Audit, Settings).

### When Used

Elaboration phase (Weeks 9–10) — after initial requirements were gathered, to validate understanding and elicit additional requirements through hands-on interaction.

### Participants

- All interview participants were invited to a 30-minute prototype walkthrough session
- Users interacted with the prototype on their own devices and provided feedback

### Feedback Themes

| Theme | Frequency | Action Taken |
|---|---|---|
| "Need to filter by date range on dashboard" | 8 mentions | Added date range filter to FR-06 |
| "Alert severity colours should be more distinct" | 5 mentions | Added to NFR-08 (accessibility) |
| "Want to see spend trend, not just total" | 7 mentions | Confirmed spend-over-time chart in FR-05 |
| "Audit trail needs category filters" | 4 mentions | Added to FR-22 |
| "API key should only be visible once at creation" | 6 mentions | Confirmed in FR-13 |

### Advantages

- Concrete, visual reference reduces ambiguity in requirements discussions
- Users can identify missing features and usability issues they would not articulate in interviews
- Validates requirements before full development begins, reducing rework

### Disadvantages

- Risk that stakeholders fixate on UI details rather than functional requirements
- Prototype may set unrealistic expectations about delivery timeline
- Time investment in building the prototype (mitigated by using the existing web application)

---

## Summary of Methods and Coverage

| Method | Requirements Gathered | Primary Stakeholders | Phase |
|---|---|---|---|
| Interviews | Detailed workflows, pain points, expectations | Finance, Managers, Developers, IT, Audit | Inception |
| Questionnaire | Quantified priorities, satisfaction levels | All 45 AI service users | Inception–Elaboration |
| Observation | Actual behaviours, workarounds, inefficiencies | Finance team, Developers, Managers | Inception |
| Document Analysis | Regulatory constraints, existing data, policies | Legal, IT, Finance, Audit | Inception–Elaboration |
| Prototyping | Validated requirements, UI feedback, missing features | All interview participants | Elaboration |

The combination of these five methods provided **triangulation** — each method's weaknesses are compensated by another's strengths, increasing confidence in the completeness and accuracy of the requirements specification.
