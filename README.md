<p align="center">
  <strong>OpenAI Enterprise Billing System</strong><br>
  <em>CST2310 — Information Systems Analysis and Design &nbsp;|&nbsp; Group Coursework 2 (50%)</em>
</p>

<p align="center">
  <a href="https://github.com/NAME0x0/CST2310_OpenAI_Enterprise_Billing/actions/workflows/build-report.yml"><img src="https://github.com/NAME0x0/CST2310_OpenAI_Enterprise_Billing/actions/workflows/build-report.yml/badge.svg" alt="Build Report"></a>
  <a href="https://github.com/NAME0x0/CST2310_OpenAI_Enterprise_Billing/actions/workflows/markdown-lint.yml"><img src="https://github.com/NAME0x0/CST2310_OpenAI_Enterprise_Billing/actions/workflows/markdown-lint.yml/badge.svg" alt="Lint Markdown"></a>
  <a href="https://github.com/NAME0x0/CST2310_OpenAI_Enterprise_Billing/actions/workflows/spell-check.yml"><img src="https://github.com/NAME0x0/CST2310_OpenAI_Enterprise_Billing/actions/workflows/spell-check.yml/badge.svg" alt="Spell Check"></a>
  <a href="https://github.com/NAME0x0/CST2310_OpenAI_Enterprise_Billing/actions/workflows/deploy-dashboard.yml"><img src="https://github.com/NAME0x0/CST2310_OpenAI_Enterprise_Billing/actions/workflows/deploy-dashboard.yml/badge.svg" alt="Deploy Dashboard"></a>
  <a href="https://github.com/NAME0x0/CST2310_OpenAI_Enterprise_Billing/actions/workflows/render-plantuml.yml"><img src="https://github.com/NAME0x0/CST2310_OpenAI_Enterprise_Billing/actions/workflows/render-plantuml.yml/badge.svg" alt="Render PlantUML"></a>
</p>

---

## About

A requirements specification and UML modelling project for an **enterprise-grade OpenAI API billing management system**. The system enables organisations to track AI model usage costs, manage department budgets, administer API key lifecycles, handle alerts, generate compliance reports, and maintain immutable audit trails.

Built as part of Middlesex University Dubai's CST2310 module using the **Unified Process** methodology.

**Deadline:** 24 April 2026 &nbsp;|&nbsp; **Dashboard:** [Live Preview](https://name0x0.github.io/CST2310_OpenAI_Enterprise_Billing/)

---

## Team

| Member | GitHub | Role | Primary Deliverables |
|---|---|---|---|
| **Afsah** | [@NAME0x0](https://github.com/NAME0x0) | Project Manager / Report Lead | PM artefacts, narrative, GDPR analysis, UI designs, final report |
| **Jake** | [@JakeSajith](https://github.com/JakeSajith) | UML Lead — Use Cases & UI | Use case diagrams, functional requirements, risk matrix, API key diagrams |
| **Eeshitha** | [@Eeshitha-afk](https://github.com/Eeshitha-afk) | UML Lead — Activity & Sequence | Activity diagrams, sequence diagrams, alert system, equality analysis |
| **Syed** | [@Syed-Nihaal](https://github.com/Syed-Nihaal) | UML Lead — Class Diagram & ERD | WBS, class diagram, ERD, collaboration diagrams, security analysis |

---

## Repository Structure

```text
CST2310_OpenAI_Enterprise_Billing/
│
├── 01-project-management/          # PM artefacts (20 marks)
│   ├── activity-list.md            #   All project activities, owners, durations, dependencies
│   ├── WBS.md                      #   Deliverables-based Work Breakdown Structure (Level 3+)
│   ├── gantt-chart-guide.md        #   Task list with WBS codes for building the Gantt chart
│   ├── risk-matrix.md              #   9–10 risks with likelihood, impact, mitigation strategies
│   └── critical-path.md            #   Activity network table with ES/EF/LS/LF/float analysis
│
├── 02-case-study/                  # Case study analysis (10 marks)
│   ├── narrative.md                #   Background, BIS/TPS/MIS classification, system description
│   ├── business-case.md            #   Problem statement, benefits, costs, ROI, success criteria
│   ├── functional-requirements.md  #   15–20 requirements with MoSCoW prioritisation
│   ├── non-functional-requirements.md  #   10–15 NFRs: performance, security, usability, compliance
│   └── data-collection-methods.md  #   Interviews, questionnaires, observation, document analysis
│
├── 03-uml-models/                  # UML diagrams (55 marks total)
│   ├── use-case-diagrams.md        #   6 UCDs in PlantUML: billing, API keys, alerts, audit, depts, admin
│   ├── use-case-descriptors.md     #   6 fully dressed descriptors with main/alt/exception flows
│   ├── class-diagram.md            #   Entity classes with attributes, methods, relationships
│   ├── activity-diagrams.md        #   6 activity diagrams with swim lanes
│   ├── sequence-diagrams.md        #   6 sequence diagrams for key system interactions
│   └── collaboration-diagrams.md   #   6 collaboration diagrams mirroring the sequence diagrams
│
├── 04-user-interfaces/             # UI mockups (assessed within sequence marks)
│   └── ui-designs.md               #   6 UI designs with Nielsen's 10 Heuristics evaluation
│
├── 05-law-ethics/                  # Law and ethics analysis (10 marks)
│   ├── gdpr-analysis.md            #   UK GDPR, data subjects, lawful basis, DPIA, breach handling
│   ├── security-analysis.md        #   CIA triad, authentication, encryption, ISO 27001 alignment
│   └── equality-analysis.md        #   Equality Act 2010, WCAG 2.1, digital inclusion
│
├── 06-minutes/                     # Meeting minutes (Weeks 7–12)
│   └── TEMPLATE.md                 #   Standard template for recording meeting decisions and actions
│
├── 07-self-peer-assessment/        # Individual reflections (5 marks)
│   ├── self-assessment.md          #   Individual contribution statement
│   ├── peer-assessment.md          #   Peer evaluation of team members
│   └── TEMPLATE.md                 #   Template for reflective diary entries
│
├── 08-final-report/                # Assembled report
│   └── report.md                   #   Master document assembled from all sections → Pandoc → DOCX/PDF
│
├── 09-references/                  # Coursework specification
│   ├── coursework-brief.md         #   Full CW2 brief and requirements
│   └── marking-criteria.md         #   Detailed mark allocation breakdown
│
├── 10-appendices/                  # Supporting materials
│
├── dashboard/                      # Next.js 16 PM dashboard (deployed to GitHub Pages)
│   ├── app/                        #   App Router pages: overview, gantt, marks, milestones, team
│   ├── components/                 #   Gantt chart, mark charts, task distribution, sidebar
│   └── lib/data.ts                 #   Team members, Gantt tasks, milestones, mark allocations
│
├── .github/
│   ├── workflows/                  #   12 CI/CD workflows (see below)
│   ├── ISSUE_TEMPLATE/             #   7 issue templates: task, research, review, meeting, bug, status, config
│   ├── PULL_REQUEST_TEMPLATE.md    #   PR checklist enforcing code ownership and quality
│   ├── CODEOWNERS                  #   Auto-assigns reviewers by file path
│   └── labeler.yml                 #   Auto-labels PRs by changed directory
│
├── CLAUDE.md                       # AI assistant context for Claude Code
├── CONTRIBUTING.md                 # Git workflow, branching strategy, writing standards
├── .cspell.json                    # Spell-check dictionary (en-GB + project terms)
└── .markdownlint.json              # Markdown linting rules
```

---

## System Overview

The OpenAI Enterprise Billing system is classified as a **Business Information System (BIS)** that combines:

- **TPS layer** — records every API call as a usage transaction (model, tokens, cost, timestamp)
- **MIS layer** — aggregates data into dashboards, KPI cards, spend charts, and compliance reports

### Key Actors

| Actor | Type | Description |
|---|---|---|
| Administrator | Primary | Full access — manages departments, users, API keys, system settings |
| Department Manager | Primary | Manages department budget, projects, and usage within their scope |
| Finance Officer | Primary | Financial oversight — generates reports, approves budgets, exports data |
| Developer | Primary | Consumes API keys, views usage, manages project associations |
| Auditor | Primary | Read-only access to audit trails and compliance reports |
| System | Secondary | Automated — records usage, triggers alerts, computes energy metrics |

### Key Entities

`Department` · `UsageRecord` · `Model` · `ApiKey` · `Alert` · `Project` · `AuditEntry` · `AppSettings`

---

## Methodology

This project follows the **Unified Process** lifecycle:

| Phase | Weeks | Focus | Key Deliverables |
|---|---|---|---|
| **Inception** | 7–8 | Scope, vision, project planning | PM artefacts, narrative, business case, initial requirements |
| **Elaboration** | 9–11 | Analysis and design | UML models, UI designs, law and ethics, refined requirements |
| **Construction** | 12 | Report assembly | All chapters written, peer reviewed, formatted |
| **Transition** | 12 | Submission and presentation | Final report (24 April), group presentation |

### Milestones

| Milestone | Target | Gate Criteria |
|---|---|---|
| Inception Complete | End of Week 8 | All PM artefacts, narrative, and business case delivered |
| Use Case Diagrams Complete | Week 10 Day 2 | All 6 UCDs reviewed and finalised |
| All UML Models Complete | End of Week 11 | All diagrams, descriptors, and UI designs delivered |
| Elaboration Complete | End of Week 11 | UML + UI + law and ethics all complete |
| Report Draft Complete | Week 12 Day 4 | All chapters peer reviewed and formatted |
| Final Submission | 24 April 2026 | Report submitted on UniHUB, presentation delivered |

---

## Marking Criteria

| Component | Marks | Key Requirement |
|---|---|---|
| Case Study | 10 | Narrative, business case, requirements, data collection methods |
| Use Case Diagrams | 15 | 4–6 use case diagrams with actors, relationships, `<<include>>`/`<<extend>>` |
| Use Case Descriptors | 10 | 4–6 fully dressed descriptors (main, alternative, exception flows) |
| Class Diagram + ERD | 10 | Comprehensive class diagram and entity-relationship diagram |
| Activity Diagrams | 10 | 4–6 activity diagrams with swim lanes |
| Sequence Diagrams | 10 | 4–6 sequence diagrams + corresponding collaboration diagrams |
| Project Management | 20 | Activity list, WBS, Gantt chart, risk matrix, critical path |
| Law & Ethics | 10 | GDPR, information security, equality and accessibility |
| Presentation | 5 | Group presentation during Week 12 |
| **Total** | **100** | |

---

## CI/CD Workflows

All workflows run on GitHub Actions. Artefacts are downloadable from the **Actions** tab.

| Workflow | Trigger | What It Does |
|---|---|---|
| **Build Report** | Push to report/PM/case-study/UML paths | Compiles `report.md` → DOCX and PDF via Pandoc + LaTeX |
| **Render PlantUML** | Push changing `.md` files in `03-uml-models/` | Extracts PlantUML blocks, renders PNGs, commits to `10-appendices/diagrams/` |
| **Lint Markdown** | Push/PR with `.md` files | Runs markdownlint to enforce consistent formatting |
| **Spell Check** | Push/PR with `.md` files | Runs cspell with en-GB dictionary and project-specific terms |
| **Check Links** | Push with `.md` files + weekly schedule | Validates all URLs in Markdown files using lychee |
| **Word Count** | Push to `08-final-report/report.md` | Estimates word count and page count, posts to job summary |
| **Validate Structure** | Push/PR to `main` | Checks all required deliverable files exist in the repo |
| **Auto Label** | PR opened/updated | Labels PRs by changed directory (pm-artefact, uml-models, etc.) |
| **Stale** | Weekly (Monday) | Flags issues/PRs inactive for 7+ days; auto-closes after 3 more |
| **Contributor Activity** | Weekly (Friday) | Generates per-member commit/line stats for the past 7 days |
| **Deploy Dashboard** | Push to `dashboard/` | Builds and deploys the Next.js PM dashboard to GitHub Pages |
| **Release** | Tag push (`v*`) | Builds DOCX + PDF, creates a GitHub Release with download links |

---

## Quick Start

```bash
# 1. Clone
git clone https://github.com/NAME0x0/CST2310_OpenAI_Enterprise_Billing.git
cd CST2310_OpenAI_Enterprise_Billing

# 2. Review the coursework brief and marking criteria
#    09-references/coursework-brief.md
#    09-references/marking-criteria.md

# 3. Check your assigned tasks
#    01-project-management/activity-list.md
#    .github/CODEOWNERS

# 4. Read the contribution guide
#    CONTRIBUTING.md
```

### Building the Report Locally

```bash
cd 08-final-report
pandoc report.md -o report.docx --from=gfm --to=docx --toc --toc-depth=3 --number-sections
```

### Running the Dashboard Locally

```bash
cd dashboard
npm install
npm run dev          # http://localhost:3000
```

### Creating a Release

```bash
git tag v0.1-draft
git push origin v0.1-draft
# GitHub Actions builds DOCX + PDF and creates a release automatically
```

---

## Writing Standards

- **UK English** spelling throughout (colour, organisation, behaviour)
- **Harvard referencing** for all citations (Laudon and Laudon, 2020)
- **PlantUML** syntax for all UML diagrams (version-controlled, CI-rendered)
- **MoSCoW** prioritisation for functional requirements
- **Nielsen's 10 Usability Heuristics** for UI design evaluation
- Every diagram must have an accompanying written explanation

---

## Tools and Technologies

| Tool | Purpose |
|---|---|
| [Pandoc](https://pandoc.org/) | Markdown → DOCX/PDF report generation |
| [PlantUML](https://plantuml.com/) | UML diagram authoring in plain text |
| [Next.js 16](https://nextjs.org/) | Project management dashboard (GitHub Pages) |
| [GitHub Actions](https://github.com/features/actions) | CI/CD: linting, spell check, report builds, deployments |
| [cspell](https://cspell.org/) | Spell checking with en-GB dictionary |
| [markdownlint](https://github.com/DavidAnson/markdownlint) | Markdown formatting enforcement |
| [lychee](https://github.com/lycheeverse/lychee) | Broken link detection |

---

## Academic Integrity

This repository is submitted as part of CST2310 Group Coursework 2 at Middlesex University Dubai. All work is original unless explicitly referenced. The system described is a hypothetical case study for educational purposes.
