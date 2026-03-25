# Contributing Guide

This document explains how team members should work with this repository.

## Prerequisites

- [Git](https://git-scm.com/) installed on your machine
- A GitHub account with access to this repository
- A text editor (VS Code recommended — free, has Markdown preview)
- [Pandoc](https://pandoc.org/) installed (for building the final report locally)

## Getting Started

```bash
# Clone the repository
git clone https://github.com/NAME0x0/CST2310_OpenAI_Enterprise_Billing.git
cd CST2310_OpenAI_Enterprise_Billing

# Verify you're on the main branch
git branch
```

## Daily Workflow

### Before you start working

```bash
git pull origin main
```

Always pull the latest changes before you start editing to avoid merge conflicts.

### Making changes

1. Only edit files you own (see the task allocation in the activity list)
2. If you need changes to someone else's file, open a GitHub Issue
3. Write in Markdown — see existing files for formatting examples

### Committing your work

```bash
git add <your-files>                   # Stage specific files
git commit -m "Add sequence diagram for API key rotation"
git push origin main
```

Write descriptive commit messages. Bad: `update`. Good: `Add activity diagram for budget overspend alert handling`.

### If you get a merge conflict

```bash
git pull origin main                   # This will show the conflict
# Open the conflicting file and resolve manually
# Look for <<<<<<< HEAD ... ======= ... >>>>>>> markers
git add <resolved-file>
git commit -m "Resolve merge conflict in class-diagram.md"
git push origin main
```

If unsure, ask in the group chat before resolving.

## Branching (Optional but Recommended)

For larger changes, use a branch:

```bash
git checkout -b your-name/section-name    # e.g. afsah/use-case-diagrams
# ... make your changes ...
git push -u origin your-name/section-name
# Then open a Pull Request on GitHub
```

## Issue Tracking

We use GitHub Issues to track all tasks from the activity list.

### Creating an Issue

1. Go to the **Issues** tab on GitHub
2. Click **New Issue**
3. Choose the appropriate template:
   - **Task** — a work package from the activity list
   - **Research** — an investigation task
   - **Review Request** — ask someone to review your section

### Labels

| Label | Meaning |
|---|---|
| `task` | A deliverable work package |
| `research` | Investigation / data gathering |
| `review` | Peer review needed |
| `uml` | UML diagram work |
| `case-study` | Case study analysis |
| `pm-artefact` | Project management document |
| `law-ethics` | Law and ethics section |
| `blocked` | Cannot proceed — needs help |
| `critical-path` | On the critical path — delays here delay the project |

### Milestones

Issues are grouped into milestones matching our UP phases:

| Milestone | Target Date |
|---|---|
| Inception (Weeks 7–8) | End of Week 8 |
| Elaboration (Weeks 9–11) | End of Week 11 |
| Construction & Transition (Week 12) | 24 April 2026 |

## Pull Requests

When you open a PR, the template will guide you through a checklist. Key rules:

- PRs that touch files you don't own will automatically request a review from the owner
- All UML diagrams must have accompanying written explanations
- Tables must render correctly in GitHub's Markdown preview
- Do not merge your own PR unless the change is trivial (typo fix, formatting)

## File Naming

- All working documents: Markdown (`.md`)
- Diagrams: export from diagrams.net or PlantUML as `.png` and source (`.puml` or `.drawio`)
- Screenshots: `.png` in `10-appendices/screenshots/`

## Building the Report

The final report is assembled in `08-final-report/report.md` and converted to DOCX:

```bash
cd 08-final-report
pandoc report.md -o report.docx --from=gfm --to=docx --toc --number-sections
```

GitHub Actions also builds this automatically on every push to `main` — download the artifact from the **Actions** tab.

## Releases

Tagged commits trigger automatic releases with DOCX and PDF downloads:

```bash
git tag v0.1-draft
git push origin v0.1-draft
```

Use semantic tags:

- `v0.1-draft` — first complete draft
- `v0.2-reviewed` — after peer review
- `v1.0-final` — submission version

## Writing Standards

- **UK English** spelling throughout (colour, organisation, behaviour)
- **Harvard referencing** for all citations
- Keep UML diagrams in PlantUML syntax for version control
- All diagrams need written explanations — never paste without context

## Questions?

Open a GitHub Issue or message the group chat.
