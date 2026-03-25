# OpenAI Enterprise Billing — AI Context

## Project Overview

This is a **university coursework project** (CST2310 — Information Systems Analysis and Design) where a team of 3–4 students produces a requirements specification report and group presentation for an **OpenAI Enterprise Billing** system.

## Key Facts

- **Module:** CST2310, Semester 2 2025/26, Middlesex University Dubai
- **Assessment:** Group Coursework 2 (50% of module grade)
- **Deadline:** 24 April 2026 (report), presentation during Week 12
- **Deliverables:** Requirements specification report + group presentation
- **Methodology:** Unified Process (Inception → Elaboration → Construction → Transition)
- **Case Study:** OpenAI Enterprise Billing — a Business Information System for managing AI model usage, billing, department budgets, API keys, alerts, audit trails, and sustainability metrics

## System Overview

The OpenAI Enterprise Billing system is a web-based dashboard that enables enterprises to:

- Track AI model usage and costs per department/project
- Manage department budgets with quota thresholds
- Administer API key lifecycle (create, rotate, revoke)
- Receive and manage alerts (quota, anomaly, security, billing)
- Generate compliance and usage reports
- Maintain a full audit trail of all actions
- Monitor energy consumption and sustainability metrics

### Key Actors

| Actor | Description |
|---|---|
| Administrator | Full system access; manages departments, users, settings |
| Department Manager | Manages department budget, projects, and usage |
| Finance Officer | Generates reports, reviews billing, manages invoices |
| Developer | Uses API keys, views usage, manages projects |
| Auditor | Read-only access to audit trails and compliance reports |
| System (automated) | Processes usage records, triggers alerts, computes metrics |

### Key Entities

| Entity | Key Attributes |
|---|---|
| Department | id, name, budget, spent, headcount, costCenter |
| UsageRecord | id, departmentId, model, tokens, cost, date, project, user |
| Model | id, name, provider, costPer1kInput, costPer1kOutput, contextWindow, status |
| ApiKey | id, name, key (masked), departmentId, createdAt, lastUsed, status, permissions |
| Alert | id, type, severity, title, message, departmentId, acknowledged |
| Project | id, name, departmentId, budget, spent, status |
| AuditEntry | id, action, actor, target, timestamp, details, category |
| AppSettings | quotaThreshold, alertEmail, currency, role |

## Marking Criteria (/100)

| Criterion | Marks | Key Requirement |
|---|---|---|
| Case Study | 10 | Narrative, business case, functional/non-functional requirements, data collection methods |
| Use Case Diagrams | 15 | 4–6 use case diagrams with actors, relationships |
| Use Case Descriptors | 10 | 4–6 fully dressed use case descriptors |
| Class Diagram + ERD | 10 | Comprehensive class diagram and entity-relationship diagram |
| Activity Diagrams | 10 | 4–6 activity diagrams with swim lanes |
| Sequence Diagrams | 10 | 4–6 sequence diagrams + collaboration diagrams |
| Project Management | 20 | Activity list, WBS, Gantt chart, risk matrix, critical path |
| Law & Ethics | 10 | GDPR, security, equality analysis |
| Presentation | 5 | Group presentation |

## Repository Structure

```
01-project-management/    Activity list, WBS, Gantt guide, risk matrix, critical path
02-case-study/            Narrative, business case, requirements, data collection
03-uml-models/            Use case diagrams/descriptors, class/ERD, activity, sequence, collaboration
04-user-interfaces/       UI mockups with Nielsen's Heuristics analysis
05-law-ethics/            GDPR, security, equality analysis
06-minutes/               Meeting minutes
07-self-peer-assessment/  Self-assessment, peer assessment, reflective diaries
08-final-report/          Assembled report for pandoc conversion
09-references/            Coursework brief, marking criteria
10-appendices/            Supporting materials
```

## Unified Process Phases

| Phase | Weeks | Focus |
|---|---|---|
| Inception | 7–8 | PM artefacts, case study analysis, initial requirements |
| Elaboration | 9–11 | UML models, UI designs, law & ethics, refined requirements |
| Construction | 12 | Report assembly, formatting, presentation preparation |
| Transition | 12 | Final submission and presentation delivery |

## When Helping with This Project

1. Always use UK English spelling
2. Use Unified Process terminology (not PRINCE2, not Agile)
3. All UML diagrams should use PlantUML syntax for version control
4. Functional requirements use MoSCoW prioritisation
5. Respect the report structure defined in the coursework specification
6. Reference Nielsen's 10 Usability Heuristics for UI designs
7. Every diagram needs a written explanation — not just pasted in without context
8. The system is a BIS (Business Information System) — classify it as such
