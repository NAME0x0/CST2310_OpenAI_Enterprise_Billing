# Activity List

## OpenAI Enterprise Billing System — CST2310

**Version:** 1.0
**Date:** [Week 7 Date]
**Methodology:** Unified Process

---

## Activity Table

| Activity ID | Activity Name | Description | Owner | Duration | Dependencies | UP Phase |
|---|---|---|---|---|---|---|
| **A1** | **Project Initiation** | Establish project scope, objectives, and team roles | Afsah | 2 days | — | Inception |
| A1.1 | Draft Project Initiation Document | Write PID with scope, objectives, stakeholders, constraints, assumptions | Afsah | 2 days | — | Inception |
| A1.2 | Define team roles and responsibilities | Assign UP roles and technical areas to each member | All | 1 day | — | Inception |
| **A2** | **Project Management Artefacts** | Produce all PM documentation required for the 20-mark criterion | Afsah | 5 days | A1 | Inception |
| A2.1 | Create Activity List | This document — comprehensive list of all project activities | Afsah | 1 day | A1.1 | Inception |
| A2.2 | Create Work Breakdown Structure | Deliverables-based WBS to Level 3+ with dictionary | [Member 2] | 2 days | A2.1 | Inception |
| A2.3 | Create Gantt Chart | Scheduled timeline with dependencies and milestones in ProjectLibre/Excel | Afsah | 2 days | A2.2 | Inception |
| A2.4 | Create Risk Matrix | Identify 9–10 risks with likelihood, impact, mitigation, and contingency | [Member 3] | 2 days | A1.1 | Inception |
| A2.5 | Identify Critical Path | Analyse the activity network for zero-float activities | Afsah | 1 day | A2.3 | Inception |
| **A3** | **Case Study Analysis** | Analyse the OpenAI Enterprise Billing system as a BIS | All | 8 days | A1 | Inception–Elaboration |
| A3.1 | Write case study narrative | Background, context, current problems, proposed system | Afsah | 3 days | A1.1 | Inception |
| A3.2 | Develop business case | Problem statement, proposed solution, benefits, costs, ROI, success criteria | [Member 2] | 3 days | A3.1 | Inception |
| A3.3 | Elicit functional requirements | 15–20 functional requirements using MoSCoW prioritisation | [Member 3] | 3 days | A3.1 | Elaboration |
| A3.4 | Elicit non-functional requirements | 10–15 NFRs covering performance, security, usability, compliance | [Member 4] | 2 days | A3.1 | Elaboration |
| A3.5 | Document data collection methods | 4–5 methods: interviews, questionnaires, observation, document analysis, prototyping | [Member 2] | 2 days | A3.3 | Elaboration |
| A3.6 | Define system actors | Identify and describe all actors interacting with the system | [Member 3] | 1 day | A3.1 | Inception |
| **A4** | **Use Case Diagrams** | Produce 4–6 use case diagrams (15 marks) | [Member 3] | 6 days | A3.3, A3.6 | Elaboration |
| A4.1 | UCD 1: Billing and Usage Management | Use cases for tracking usage, viewing costs, filtering records | [Member 3] | 1 day | A3.3 | Elaboration |
| A4.2 | UCD 2: API Key Lifecycle Management | Use cases for creating, rotating, revoking, and viewing API keys | [Member 3] | 1 day | A3.3 | Elaboration |
| A4.3 | UCD 3: Alert and Notification System | Use cases for configuring, triggering, acknowledging, and escalating alerts | [Member 4] | 1 day | A3.3 | Elaboration |
| A4.4 | UCD 4: Reporting and Audit Compliance | Use cases for generating reports, viewing audit trail, exporting data | [Member 4] | 1 day | A3.3 | Elaboration |
| A4.5 | UCD 5: Department and Project Management | Use cases for managing departments, budgets, projects | [Member 2] | 1 day | A3.3 | Elaboration |
| A4.6 | UCD 6: System Administration and Settings | Use cases for configuring system settings, managing users, roles | Afsah | 1 day | A3.3 | Elaboration |
| **A5** | **Use Case Descriptors** | Write 4–6 fully dressed use case descriptors (10 marks) | [Member 2] | 5 days | A4 | Elaboration |
| A5.1 | UC Descriptor: Record API Usage | Main success scenario, alternatives, exceptions | [Member 2] | 1 day | A4.1 | Elaboration |
| A5.2 | UC Descriptor: Manage Department Budget | Fully dressed format with business rules | [Member 2] | 1 day | A4.5 | Elaboration |
| A5.3 | UC Descriptor: Rotate API Key | Full lifecycle with security considerations | [Member 3] | 1 day | A4.2 | Elaboration |
| A5.4 | UC Descriptor: Configure Quota Alert | Threshold setting, notification preferences | [Member 4] | 1 day | A4.3 | Elaboration |
| A5.5 | UC Descriptor: Generate Compliance Report | Report parameters, output formats, audit trail | Afsah | 1 day | A4.4 | Elaboration |
| A5.6 | UC Descriptor: Acknowledge Security Alert | Triage, escalation, resolution workflow | [Member 4] | 1 day | A4.3 | Elaboration |
| **A6** | **Class Diagram and ERD** | Produce class diagram and entity-relationship diagram (10 marks) | [Member 2] | 4 days | A3.3, A3.4 | Elaboration |
| A6.1 | Design class diagram | All entity classes with attributes, methods, relationships | [Member 2] | 3 days | A3.3 | Elaboration |
| A6.2 | Design ERD | Entity-relationship diagram with PKs, FKs, cardinalities | [Member 2] | 2 days | A6.1 | Elaboration |
| **A7** | **Activity Diagrams** | Produce 4–6 activity diagrams with swim lanes (10 marks) | [Member 3] | 5 days | A5 | Elaboration |
| A7.1 | AD 1: API Usage Recording and Billing | End-to-end usage tracking with budget checks | [Member 3] | 1 day | A5.1 | Elaboration |
| A7.2 | AD 2: API Key Rotation Workflow | Key rotation with validation and notification | [Member 3] | 1 day | A5.3 | Elaboration |
| A7.3 | AD 3: Budget Overspend Alert Handling | Alert trigger, notification, escalation, resolution | [Member 4] | 1 day | A5.4 | Elaboration |
| A7.4 | AD 4: Monthly Compliance Audit Process | Audit report generation and review workflow | Afsah | 1 day | A5.5 | Elaboration |
| A7.5 | AD 5: Department Onboarding | New department setup with budget and key provisioning | [Member 2] | 1 day | A5.2 | Elaboration |
| A7.6 | AD 6: Anomaly Detection and Response | Automated detection, alert, investigation, remediation | [Member 4] | 1 day | A5.6 | Elaboration |
| **A8** | **Sequence Diagrams** | Produce 4–6 sequence diagrams (10 marks) | [Member 4] | 5 days | A5 | Elaboration |
| A8.1 | SD 1: API Call → Usage Recorded → Budget Checked | Developer interaction with billing pipeline | [Member 4] | 1 day | A5.1 | Elaboration |
| A8.2 | SD 2: Monthly Report Generation | Finance officer triggers report, system compiles data | [Member 4] | 1 day | A5.5 | Elaboration |
| A8.3 | SD 3: Compromised API Key Rotation | Administrator-initiated emergency rotation | [Member 3] | 1 day | A5.3 | Elaboration |
| A8.4 | SD 4: Quota Threshold Alert Cycle | System detection → alert → manager acknowledgement | [Member 4] | 1 day | A5.4 | Elaboration |
| A8.5 | SD 5: Audit Trail Review | Auditor queries and filters audit entries | Afsah | 1 day | A5.5 | Elaboration |
| A8.6 | SD 6: Department Budget Update | Administrator updates budget with approval workflow | [Member 2] | 1 day | A5.2 | Elaboration |
| **A9** | **Collaboration Diagrams** | Produce 4–6 collaboration diagrams corresponding to sequence diagrams | [Member 4] | 3 days | A8 | Elaboration |
| A9.1 | Collaboration diagrams for SD 1–6 | Re-express sequence interactions emphasising structural relationships | [Member 4] | 3 days | A8 | Elaboration |
| **A10** | **User Interface Designs** | Design 4–6 UI mockups with Nielsen's Heuristics (part of sequence marks) | Afsah | 5 days | A5 | Elaboration |
| A10.1 | UI 1: Dashboard Overview | KPI cards, spend charts, quota utilisation, filters | Afsah | 1 day | A5 | Elaboration |
| A10.2 | UI 2: Department Budget Management | Budget table, edit modal, visual indicators | [Member 2] | 1 day | A5.2 | Elaboration |
| A10.3 | UI 3: API Key Management Console | Key list, create/rotate/revoke, permissions | [Member 3] | 1 day | A5.3 | Elaboration |
| A10.4 | UI 4: Alert Centre | Alert list, filters, acknowledge action, detail view | [Member 4] | 1 day | A5.4 | Elaboration |
| A10.5 | UI 5: Usage Analytics Report | Date range, model/department filters, export options | Afsah | 1 day | A5.5 | Elaboration |
| A10.6 | UI 6: Audit Trail Viewer | Searchable log, category filters, detail expansion | Afsah | 1 day | A5.5 | Elaboration |
| **A11** | **Law and Ethics Analysis** | GDPR, security, and equality analysis (10 marks) | All | 4 days | A3 | Elaboration |
| A11.1 | GDPR compliance analysis | UK GDPR, data subjects, lawful basis, DPIA, breach notification | [Member 2] | 2 days | A3.3 | Elaboration |
| A11.2 | Information security analysis | CIA triad, authentication, encryption, audit, ISO 27001 | [Member 3] | 2 days | A3.4 | Elaboration |
| A11.3 | Equality and accessibility analysis | Equality Act 2010, WCAG 2.1, digital inclusion | [Member 4] | 2 days | A3.4 | Elaboration |
| **A12** | **Report Production** | Assemble and format the final report | All | 5 days | All above | Construction |
| A12.1 | Write introduction (BIS/TPS/MIS definitions) | Define information system types, classify the case study | Afsah | 1 day | A3.1 | Construction |
| A12.2 | Write PM chapter | Activity list, WBS, Gantt, risk matrix, critical path with explanations | Afsah | 2 days | A2 | Construction |
| A12.3 | Write case study chapter | Narrative, business case, requirements, data collection | [Member 2] | 2 days | A3 | Construction |
| A12.4 | Write UML models chapter | All diagrams with written explanations and cross-references | [Member 3], [Member 4] | 2 days | A4–A9 | Construction |
| A12.5 | Write UI design chapter | Mockups with Nielsen's Heuristics analysis per UI | Afsah | 1 day | A10 | Construction |
| A12.6 | Write law and ethics chapter | GDPR, security, equality analysis consolidated | [Member 2] | 1 day | A11 | Construction |
| A12.7 | Write conclusions | Summary of findings, recommendations, lessons learned | Afsah | 1 day | A12.1–A12.6 | Construction |
| A12.8 | Peer review of all sections | Every section reviewed by at least one member who did not write it | All | 1 day | A12.1–A12.7 | Construction |
| A12.9 | Formatting, TOC, references, proofread | Final formatting, Harvard referencing, table of contents | Afsah | 1 day | A12.8 | Construction |
| **A13** | **Presentation** | Prepare and deliver group presentation (5 marks) | All | 3 days | A12 | Transition |
| A13.1 | Design slides and allocate sections | Slide deck covering all marking criteria | All | 1 day | A12.4 | Transition |
| A13.2 | Prepare visual aids | Diagrams, charts, UML models for slides | All | 1 day | A13.1 | Transition |
| A13.3 | Rehearsal (timed) | Full run-through within allocated time slot | All | 1 day | A13.2 | Transition |
| A13.4 | Final presentation delivery | Deliver to seminar tutor and peers | All | 1 day | A13.3 | Transition |

---

## Activity Summary

| UP Phase | Activities | Duration |
|---|---|---|
| Inception (Weeks 7–8) | A1–A2, A3.1–A3.2, A3.6 | 2 weeks |
| Elaboration (Weeks 9–11) | A3.3–A3.5, A4–A11 | 3 weeks |
| Construction (Week 12) | A12 | 1 week |
| Transition (Week 12) | A13 | 1 week |

---

## Notes

- All activities follow the Unified Process lifecycle
- Dependencies marked with "—" have no predecessors
- Duration estimates assume parallel work across team members
- The critical path runs through: A1 → A3.1 → A3.3 → A4 → A5 → A7/A8 → A12.4 → A12.8 → A12.9 → A13
