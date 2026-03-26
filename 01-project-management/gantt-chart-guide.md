# Gantt Chart Guide

## OpenAI Enterprise Billing System — CST2310

**Note:** This document provides the task list, durations, dependencies, and milestones you need to build your Gantt chart in MS Project, ProjectLibre, Excel, or any other tool.

---

## Task List for Gantt Chart

Summary (parent) rows are **bold**; their children are indented beneath them.

| WBS | Task Name | Start | End | Duration | Owner | Dependencies |
|---|---|---|---|---|---|---|
| **1.1** | **PROJECT MANAGEMENT** | **W7** | **W12** | **6 weeks** | **All** | |
| 1.1.1 | Activity List | W7 Day 1 | W7 Day 2 | 2 days | Afsah | — |
| 1.1.2 | Work Breakdown Structure | W7 Day 2 | W7 Day 3 | 2 days | Syed | — |
| 1.1.3 | Gantt Chart | W7 Day 3 | W8 Day 1 | 2 days | Afsah | 1.1.2 |
| 1.1.4 | Risk Matrix | W7 Day 3 | W8 Day 2 | 3 days | Jake | 1.1.1 |
| 1.1.5 | Critical Path Analysis | W8 Day 1 | W8 Day 2 | 2 days | Afsah | 1.1.3 |
| | | | | | | |
| **1.2** | **CASE STUDY ANALYSIS** | **W7** | **W9** | **3 weeks** | **All** | |
| 1.2.1 | Case study narrative | W7 Day 1 | W8 Day 2 | 6 days | Afsah | — |
| 1.2.2 | Business case | W8 Day 1 | W8 Day 4 | 3 days | Syed | 1.2.1 |
| 1.2.5 | System actors definition | W7 Day 3 | W7 Day 4 | 2 days | Jake | 1.2.1 (partial) |
| 1.2.3 | Functional requirements | W8 Day 3 | W9 Day 3 | 5 days | Jake | 1.2.1 |
| 1.2.4 | Non-functional requirements | W9 Day 1 | W9 Day 3 | 3 days | Eeshitha | 1.2.1 |
| 1.2.6 | Data collection methods | W9 Day 2 | W9 Day 4 | 3 days | Syed | 1.2.3 |
| ★ | **MILESTONE: Inception Complete** | **W8 Day 5** | | **0 days** | All | 1.1.1–1.1.5, 1.2.1, 1.2.2 |
| | | | | | | |
| **1.3** | **UML SCHEMATIC MODELS** | **W9** | **W11** | **3 weeks** | **All** | **1.2.3** |
| 1.3.1.1 | UCD: Billing and Usage Management | W9 Day 3 | W9 Day 5 | 2 days | Jake | 1.2.3 |
| 1.3.1.2 | UCD: API Key Lifecycle Management | W9 Day 3 | W9 Day 5 | 2 days | Jake | 1.2.3 |
| 1.3.1.3 | UCD: Alert and Notification System | W9 Day 4 | W10 Day 1 | 2 days | Eeshitha | 1.2.3 |
| 1.3.1.4 | UCD: Reporting and Audit Compliance | W9 Day 4 | W10 Day 1 | 2 days | Eeshitha | 1.2.3 |
| 1.3.1.5 | UCD: Department and Project Management | W9 Day 5 | W10 Day 2 | 2 days | Syed | 1.2.3 |
| 1.3.1.6 | UCD: System Administration | W10 Day 1 | W10 Day 2 | 2 days | Afsah | 1.2.3 |
| ★ | **MILESTONE: Use Case Diagrams Complete** | **W10 Day 2** | | **0 days** | All | All 1.3.1.x |
| 1.3.2.1 | UC Descriptor: Record API Usage | W10 Day 1 | W10 Day 2 | 2 days | Syed | 1.3.1.1 |
| 1.3.2.2 | UC Descriptor: Manage Department Budget | W10 Day 1 | W10 Day 3 | 3 days | Syed | 1.3.1.5 |
| 1.3.2.3 | UC Descriptor: Rotate API Key | W10 Day 2 | W10 Day 3 | 2 days | Jake | 1.3.1.2 |
| 1.3.2.4 | UC Descriptor: Configure Quota Alert | W10 Day 2 | W10 Day 4 | 3 days | Eeshitha | 1.3.1.3 |
| 1.3.2.5 | UC Descriptor: Generate Compliance Report | W10 Day 3 | W10 Day 4 | 2 days | Afsah | 1.3.1.4 |
| 1.3.2.6 | UC Descriptor: Acknowledge Security Alert | W10 Day 3 | W10 Day 5 | 3 days | Eeshitha | 1.3.1.3 |
| 1.3.3 | Class diagram | W10 Day 2 | W10 Day 5 | 4 days | Syed | 1.2.3, 1.2.4 |
| 1.3.4 | Entity-relationship diagram | W10 Day 4 | W11 Day 1 | 2 days | Syed | 1.3.3 |
| 1.3.5.1 | AD: API Usage Recording and Billing | W10 Day 4 | W10 Day 5 | 2 days | Jake | 1.3.2.1 |
| 1.3.5.2 | AD: API Key Rotation Workflow | W10 Day 5 | W11 Day 1 | 2 days | Jake | 1.3.2.3 |
| 1.3.5.3 | AD: Budget Overspend Alert Handling | W10 Day 5 | W11 Day 2 | 2 days | Eeshitha | 1.3.2.4 |
| 1.3.5.4 | AD: Monthly Compliance Audit | W11 Day 1 | W11 Day 2 | 2 days | Afsah | 1.3.2.5 |
| 1.3.5.5 | AD: Department Onboarding | W11 Day 1 | W11 Day 2 | 2 days | Syed | 1.3.2.2 |
| 1.3.5.6 | AD: Anomaly Detection and Response | W11 Day 2 | W11 Day 3 | 2 days | Eeshitha | 1.3.2.6 |
| 1.3.6.1 | SD: API Call → Usage → Budget Check | W11 Day 1 | W11 Day 2 | 2 days | Eeshitha | 1.3.2.1 |
| 1.3.6.2 | SD: Monthly Report Generation | W11 Day 1 | W11 Day 3 | 3 days | Eeshitha | 1.3.2.5 |
| 1.3.6.3 | SD: Compromised API Key Rotation | W11 Day 2 | W11 Day 3 | 2 days | Jake | 1.3.2.3 |
| 1.3.6.4 | SD: Quota Threshold Alert Cycle | W11 Day 2 | W11 Day 4 | 3 days | Eeshitha | 1.3.2.4 |
| 1.3.6.5 | SD: Audit Trail Review | W11 Day 3 | W11 Day 4 | 2 days | Afsah | 1.3.2.5 |
| 1.3.6.6 | SD: Department Budget Update | W11 Day 3 | W11 Day 4 | 2 days | Syed | 1.3.2.2 |
| 1.3.7 | Collaboration diagrams (all 6) | W11 Day 3 | W11 Day 5 | 3 days | Syed | 1.3.6 |
| ★ | **MILESTONE: All UML Models Complete** | **W11 Day 5** | | **0 days** | All | All 1.3.x |
| | | | | | | |
| **1.4** | **USER INTERFACE DESIGN** | **W10** | **W11** | **2 weeks** | **Afsah** | **1.3.2** |
| 1.4.1 | UI: Dashboard Overview | W10 Day 3 | W10 Day 4 | 2 days | Afsah | 1.3.2 |
| 1.4.2 | UI: Department Budget Management | W10 Day 4 | W10 Day 5 | 2 days | Syed | 1.3.2.2 |
| 1.4.3 | UI: API Key Management Console | W10 Day 5 | W11 Day 1 | 2 days | Jake | 1.3.2.3 |
| 1.4.4 | UI: Alert Centre | W11 Day 1 | W11 Day 2 | 2 days | Eeshitha | 1.3.2.4 |
| 1.4.5 | UI: Usage Analytics Report | W11 Day 2 | W11 Day 3 | 2 days | Afsah | 1.3.2.5 |
| 1.4.6 | UI: Audit Trail Viewer | W11 Day 3 | W11 Day 4 | 2 days | Afsah | 1.3.2.5 |
| 1.4.7 | Nielsen's Heuristics evaluation | W11 Day 4 | W11 Day 5 | 2 days | Afsah | 1.4.1–1.4.6 |
| | | | | | | |
| **1.5** | **LAW AND ETHICS** | **W10** | **W11** | **2 weeks** | **All** | **1.2.3, 1.2.4** |
| 1.5.1 | GDPR compliance analysis | W10 Day 3 | W11 Day 1 | 3 days | Syed | 1.2.3 |
| 1.5.2 | Information security analysis | W10 Day 4 | W11 Day 2 | 3 days | Jake | 1.2.4 |
| 1.5.3 | Equality and accessibility analysis | W11 Day 1 | W11 Day 3 | 3 days | Eeshitha | 1.2.4 |
| ★ | **MILESTONE: Elaboration Complete** | **W11 Day 5** | | **0 days** | All | 1.3, 1.4, 1.5 |
| | | | | | | |
| **1.6** | **REPORT PRODUCTION** | **W12** | **W12** | **1 week** | **All** | **Elaboration Complete** |
| 1.6.1 | Write: Introduction (BIS/TPS/MIS) | W12 Day 1 | W12 Day 1 | 1 day | Afsah | Elaboration Complete |
| 1.6.2 | Write: PM chapter | W12 Day 1 | W12 Day 2 | 2 days | Afsah | 1.1 |
| 1.6.3 | Write: Case study chapter | W12 Day 1 | W12 Day 2 | 2 days | Syed | 1.2 |
| 1.6.4 | Write: UML models chapter | W12 Day 1 | W12 Day 2 | 2 days | Jake, Eeshitha | 1.3 |
| 1.6.5 | Write: UI design chapter | W12 Day 2 | W12 Day 2 | 1 day | Afsah | 1.4 |
| 1.6.6 | Write: Law and ethics chapter | W12 Day 2 | W12 Day 3 | 2 days | Syed | 1.5 |
| 1.6.7 | Write: Conclusions | W12 Day 3 | W12 Day 3 | 1 day | Afsah | 1.6.1–1.6.6 |
| 1.6.8 | Peer review of all sections | W12 Day 3 | W12 Day 3 | 1 day | All | 1.6.1–1.6.7 |
| 1.6.9 | Formatting, TOC, references, proofread | W12 Day 3 | W12 Day 4 | 2 days | Afsah | 1.6.8 |
| ★ | **MILESTONE: Report Draft Complete** | **W12 Day 4** | | **0 days** | All | 1.6.9 |
| | | | | | | |
| **1.7** | **PRESENTATION** | **W12** | **W12** | **1 week** | **All** | **Report Draft** |
| 1.7.1 | Design slides and allocate sections | W12 Day 3 | W12 Day 3 | 1 day | All | 1.6.4 |
| 1.7.2 | Prepare visual aids | W12 Day 3 | W12 Day 4 | 2 days | All | 1.7.1 |
| 1.7.3 | Rehearsal (timed) | W12 Day 5 | W12 Day 5 | 1 day | All | 1.7.2 |
| ★ | **MILESTONE: Final Report Submitted** | **24 April 2026** | | **0 days** | All | 1.6.9 |
| 1.7.4 | Final presentation delivery | W12 (20–24 April) | | 1 day | All | 1.7.3 |

---

## Key Dependencies (Critical Path)

```mermaid
graph LR
    AL["Activity List"] --> WBS
    WBS --> Gantt
    Gantt --> CP["Critical Path"]
    CP --> CSN["Case Study Narrative"]
    CSN --> FR["Functional Requirements"]
    FR --> UCD["Use Case Diagrams"]
    UCD --> UCD2["Use Case Descriptors"]
    UCD2 --> SAD["Sequence / Activity Diagrams"]
    SAD --> RC["Report Chapters"]
    RC --> PR["Peer Review"]
    PR --> FMT["Formatting"]
    FMT --> SUB["Submission"]

    style AL fill:#e74c3c,color:#fff
    style WBS fill:#e74c3c,color:#fff
    style Gantt fill:#e74c3c,color:#fff
    style CP fill:#e74c3c,color:#fff
    style CSN fill:#e74c3c,color:#fff
    style FR fill:#e74c3c,color:#fff
    style UCD fill:#e74c3c,color:#fff
    style UCD2 fill:#e74c3c,color:#fff
    style SAD fill:#e74c3c,color:#fff
    style RC fill:#e74c3c,color:#fff
    style PR fill:#e74c3c,color:#fff
    style FMT fill:#e74c3c,color:#fff
    style SUB fill:#e74c3c,color:#fff
```

Any delay on this chain directly delays the submission date. Tasks off the critical path (e.g., non-functional requirements, law & ethics) have float.

---

## Milestones Summary

| Milestone | Target Date | Predecessor |
|---|---|---|
| Inception Complete | End of Week 8 | PM artefacts + case study narrative + business case |
| Use Case Diagrams Complete | Week 10 Day 2 | All 6 UCDs |
| All UML Models Complete | End of Week 11 | All diagrams + descriptors |
| Elaboration Complete | End of Week 11 | UML + UI + Law & Ethics |
| Report Draft Complete | Week 12 Day 4 | All chapters + peer review + formatting |
| Final Report Submitted | 24 April 2026 | Final proofread |
| Presentation Delivered | 20–24 April 2026 | Rehearsal complete |

---

## How to Build This in Your Chosen Tool

### Microsoft Project / ProjectLibre

1. Enter each task row with the WBS code as a custom field
2. Set summary tasks as parent rows; indent children beneath
3. Enter Start/End dates or durations; let the tool calculate
4. Add dependencies using the Predecessors column
5. Insert milestones as tasks with 0 duration
6. Assign resources (member names) in the Resource column
7. The tool will auto-highlight the critical path in red

### Excel

1. Create columns: WBS Code | Task Name | Owner | Start Week | End Week | W7 | W8 | W9 | W10 | W11 | W12
2. For each task, fill/colour the cells in the week columns that the task spans
3. Use different colours per team member
4. Draw arrows manually (using shapes) for key dependencies
5. Mark milestones with a diamond shape (◆) in the appropriate week column
6. Bold the summary rows

---

## Notes

- Update this Gantt chart at each formal meeting if the plan changes
- Record any schedule changes in the meeting minutes
- Include both the original and final version in the report to show how the plan evolved
