# OpenAI Enterprise Billing System

**CST2310 — Information Systems Analysis and Design | Group Coursework 2 (50%)**

Requirements specification and UML modelling for an enterprise-grade OpenAI API billing management system. Built using the Unified Process methodology.

## Repository Structure

```text
CST2310_OpenAI_Enterprise_Billing/
├── 01-project-management/     # Activity list, WBS, Gantt guide, risk matrix, critical path
├── 02-case-study/             # Narrative, business case, requirements, data collection
├── 03-uml-models/             # Use case, class, activity, sequence, collaboration diagrams
├── 04-user-interfaces/        # 6 UI designs with Nielsen's Heuristics evaluation
├── 05-law-ethics/             # GDPR, security measures, equality analysis
├── 06-minutes/                # Meeting minutes template (weeks 7-12)
├── 07-self-peer-assessment/   # Self-assessment, peer assessment, reflective diary
├── 08-final-report/           # Report template (Pandoc → DOCX/PDF)
├── 09-references/             # Coursework brief, marking criteria
├── 10-appendices/             # Supporting materials
├── .github/                   # CI/CD workflows, issue templates, PR template
└── CONTRIBUTING.md            # Git workflow and branching guide
```

## Case Study

The OpenAI Enterprise Billing System manages API usage costs across departments within a large organisation. It tracks token consumption, calculates costs per model, enforces budget quotas, generates compliance reports, and maintains a complete audit trail.

**System actors:** Administrator, Department Manager, Finance Officer, Developer, Auditor, System

**Key entities:** Department, UsageRecord, Model, ApiKey, Alert, Project, AuditEntry, AppSettings

## Methodology

This project follows the **Unified Process** with two main phases:

| Phase | Weeks | Focus |
|---|---|---|
| Inception | 7-8 | Requirements, vision, scope, business case, project planning |
| Elaboration | 9-11 | UML modelling, UI design, law & ethics, report drafting |
| Submission | 12 | Final report and presentation (24 April 2026) |

## Marking Criteria

| Component | Marks |
|---|---|
| Case Study | 10 |
| Use Case Diagrams | 15 |
| Use Case Descriptors | 10 |
| Class Diagram | 10 |
| Activity Diagrams | 10 |
| Sequence Diagrams | 10 |
| Project Management | 20 |
| Law & Ethics | 10 |
| Presentation | 5 |
| **Total** | **100** |

## Quick Start

1. Clone the repository
2. Review `09-references/marking-criteria.md` for the full checklist
3. Check `CONTRIBUTING.md` for the Git workflow
4. Use issue templates to create and track tasks

## CI/CD

| Workflow | Trigger | Purpose |
|---|---|---|
| Build Report | Push to `08-final-report/` | Generates DOCX/PDF via Pandoc |
| Lint Markdown | Push/PR with `.md` files | Checks formatting |
| Spell Check | Push/PR with `.md` files | Catches typos |
| Link Checker | Weekly + push | Validates URLs |
| Word Count | Push to report | Estimates page count |
| Auto Label | PR opened | Labels by file path |
| Stale | Weekly | Flags inactive issues |
| Contributor Activity | Weekly (Friday) | Team contribution stats |
| Release | Tag push (`v*`) | Builds and publishes report |
| Deploy Dashboard | Push to `dashboard/` | Deploys PM dashboard |

## UML Diagrams

All UML diagrams use **PlantUML** syntax for version control. To render:

- **VS Code:** Install the PlantUML extension
- **Online:** Paste code at [plantuml.com](https://www.plantuml.com/plantuml/uml/)
- **CLI:** `java -jar plantuml.jar filename.puml`
