export interface TeamMember {
  name: string
  handle: string
  role: string
  files: string[]
  color: string
}

export interface GanttTask {
  id: string
  name: string
  owner: string
  startWeek: number
  startDay: number
  endWeek: number
  endDay: number
  category: string
  isMilestone?: boolean
}

export interface MarkEntry {
  component: string
  marks: number
  maxMarks: number
}

export interface Milestone {
  name: string
  week: number
  day: number
  status: "pending" | "in-progress" | "complete"
}

export const teamMembers: TeamMember[] = [
  {
    name: "Afsah",
    handle: "@NAME0x0",
    role: "Project Manager / Report Lead",
    files: ["01-project-management/", "08-final-report/", "02-case-study/narrative.md", "04-user-interfaces/"],
    color: "oklch(0.55 0.2 250)",
  },
  {
    name: "Jake",
    handle: "@JakeSajith",
    role: "Use Cases & Security Lead",
    files: ["03-uml-models/use-case-diagrams.md", "02-case-study/functional-requirements.md", "05-law-ethics/security-analysis.md"],
    color: "oklch(0.6 0.18 165)",
  },
  {
    name: "Eeshitha",
    handle: "@Eeshitha-afk",
    role: "Activity & Sequence Diagrams Lead",
    files: ["03-uml-models/activity-diagrams.md", "03-uml-models/sequence-diagrams.md", "05-law-ethics/equality-analysis.md", "02-case-study/non-functional-requirements.md"],
    color: "oklch(0.55 0.2 300)",
  },
  {
    name: "Syed",
    handle: "@Syed-Nihaal",
    role: "Class Diagram & GDPR Lead",
    files: ["03-uml-models/class-diagram.md", "03-uml-models/collaboration-diagrams.md", "05-law-ethics/gdpr-analysis.md", "02-case-study/business-case.md"],
    color: "oklch(0.62 0.18 55)",
  },
]

export const ganttTasks: GanttTask[] = [
  // ── Week 7 — Project Management & Case Study Start ────────────
  { id: "1.1.1", name: "Activity List", owner: "Afsah", startWeek: 7, startDay: 1, endWeek: 7, endDay: 2, category: "Project Management" },
  { id: "1.1.2", name: "Work Breakdown Structure", owner: "Syed", startWeek: 7, startDay: 2, endWeek: 7, endDay: 3, category: "Project Management" },
  { id: "1.1.3", name: "Gantt Chart", owner: "Afsah", startWeek: 7, startDay: 3, endWeek: 8, endDay: 1, category: "Project Management" },
  { id: "1.1.4", name: "Risk Matrix", owner: "Jake", startWeek: 7, startDay: 3, endWeek: 8, endDay: 2, category: "Project Management" },
  { id: "1.2.1", name: "Case Study Narrative", owner: "Afsah", startWeek: 7, startDay: 1, endWeek: 8, endDay: 2, category: "Case Study" },
  { id: "1.2.5", name: "System Actors Definition", owner: "Jake", startWeek: 7, startDay: 3, endWeek: 7, endDay: 4, category: "Case Study" },

  // ── Week 8 — PM Finish & Case Study Cont'd ───────────────────
  { id: "1.1.5", name: "Critical Path Analysis", owner: "Afsah", startWeek: 8, startDay: 1, endWeek: 8, endDay: 2, category: "Project Management" },
  { id: "1.2.2", name: "Business Case", owner: "Syed", startWeek: 8, startDay: 1, endWeek: 8, endDay: 4, category: "Case Study" },
  { id: "1.2.3", name: "Functional Requirements", owner: "Jake", startWeek: 8, startDay: 3, endWeek: 9, endDay: 3, category: "Case Study" },
  { id: "1.2.4", name: "Non-Functional Requirements", owner: "Eeshitha", startWeek: 9, startDay: 1, endWeek: 9, endDay: 3, category: "Case Study" },
  { id: "1.2.6", name: "Data Collection Methods", owner: "Syed", startWeek: 9, startDay: 2, endWeek: 9, endDay: 4, category: "Case Study" },
  { id: "M1", name: "Inception Complete", owner: "All", startWeek: 8, startDay: 5, endWeek: 8, endDay: 5, category: "Project Management", isMilestone: true },

  // ── Weeks 9–10 — Use Case Diagrams ────────────────────────────
  { id: "1.3.1a", name: "UCD: Billing & API Key", owner: "Jake", startWeek: 9, startDay: 3, endWeek: 9, endDay: 5, category: "UML: Use Cases" },
  { id: "1.3.1b", name: "UCD: Alert & Reporting", owner: "Eeshitha", startWeek: 9, startDay: 4, endWeek: 10, endDay: 1, category: "UML: Use Cases" },
  { id: "1.3.1c", name: "UCD: Department Management", owner: "Syed", startWeek: 9, startDay: 5, endWeek: 10, endDay: 2, category: "UML: Use Cases" },
  { id: "1.3.1d", name: "UCD: System Administration", owner: "Afsah", startWeek: 10, startDay: 1, endWeek: 10, endDay: 2, category: "UML: Use Cases" },
  { id: "M2", name: "Use Case Diagrams Complete", owner: "All", startWeek: 10, startDay: 2, endWeek: 10, endDay: 2, category: "UML: Use Cases", isMilestone: true },

  // ── Week 10 — Use Case Descriptors ────────────────────────────
  { id: "1.3.2a", name: "UC Desc: Record Usage & Budget", owner: "Syed", startWeek: 10, startDay: 1, endWeek: 10, endDay: 3, category: "UML: Use Cases" },
  { id: "1.3.2b", name: "UC Desc: Rotate API Key", owner: "Jake", startWeek: 10, startDay: 2, endWeek: 10, endDay: 3, category: "UML: Use Cases" },
  { id: "1.3.2c", name: "UC Desc: Quota & Security Alert", owner: "Eeshitha", startWeek: 10, startDay: 2, endWeek: 10, endDay: 5, category: "UML: Use Cases" },
  { id: "1.3.2d", name: "UC Desc: Compliance Report", owner: "Afsah", startWeek: 10, startDay: 3, endWeek: 10, endDay: 4, category: "UML: Use Cases" },

  // ── Week 10 — Class Diagram & ERD ─────────────────────────────
  { id: "1.3.3", name: "Class Diagram", owner: "Syed", startWeek: 10, startDay: 2, endWeek: 10, endDay: 5, category: "UML: Structure" },
  { id: "1.3.4", name: "Entity-Relationship Diagram", owner: "Syed", startWeek: 10, startDay: 4, endWeek: 11, endDay: 1, category: "UML: Structure" },

  // ── Weeks 10–11 — Activity Diagrams ───────────────────────────
  { id: "1.3.5a", name: "AD: Billing & API Key Rotation", owner: "Jake", startWeek: 10, startDay: 4, endWeek: 11, endDay: 1, category: "UML: Behaviour" },
  { id: "1.3.5b", name: "AD: Budget Alert & Anomaly", owner: "Eeshitha", startWeek: 10, startDay: 5, endWeek: 11, endDay: 3, category: "UML: Behaviour" },
  { id: "1.3.5c", name: "AD: Monthly Compliance Audit", owner: "Afsah", startWeek: 11, startDay: 1, endWeek: 11, endDay: 2, category: "UML: Behaviour" },
  { id: "1.3.5d", name: "AD: Department Onboarding", owner: "Syed", startWeek: 11, startDay: 1, endWeek: 11, endDay: 2, category: "UML: Behaviour" },

  // ── Week 11 — Sequence Diagrams ───────────────────────────────
  { id: "1.3.6a", name: "SD: API Call, Report & Quota", owner: "Eeshitha", startWeek: 11, startDay: 1, endWeek: 11, endDay: 4, category: "UML: Behaviour" },
  { id: "1.3.6b", name: "SD: Compromised Key Rotation", owner: "Jake", startWeek: 11, startDay: 2, endWeek: 11, endDay: 3, category: "UML: Behaviour" },
  { id: "1.3.6c", name: "SD: Audit Trail Review", owner: "Afsah", startWeek: 11, startDay: 3, endWeek: 11, endDay: 4, category: "UML: Behaviour" },
  { id: "1.3.6d", name: "SD: Department Budget Update", owner: "Syed", startWeek: 11, startDay: 3, endWeek: 11, endDay: 4, category: "UML: Behaviour" },

  // ── Week 11 — Collaboration Diagrams ──────────────────────────
  { id: "1.3.7", name: "Collaboration Diagrams (6)", owner: "Syed", startWeek: 11, startDay: 3, endWeek: 11, endDay: 5, category: "UML: Behaviour" },
  { id: "M3", name: "All UML Models Complete", owner: "All", startWeek: 11, startDay: 5, endWeek: 11, endDay: 5, category: "UML: Behaviour", isMilestone: true },

  // ── Weeks 10–11 — User Interface Design ───────────────────────
  { id: "1.4.1", name: "UI: Dashboard Overview", owner: "Afsah", startWeek: 10, startDay: 3, endWeek: 10, endDay: 4, category: "UI Design" },
  { id: "1.4.2", name: "UI: Department Budget", owner: "Syed", startWeek: 10, startDay: 4, endWeek: 10, endDay: 5, category: "UI Design" },
  { id: "1.4.3", name: "UI: API Key Console", owner: "Jake", startWeek: 10, startDay: 5, endWeek: 11, endDay: 1, category: "UI Design" },
  { id: "1.4.4", name: "UI: Alert Centre", owner: "Eeshitha", startWeek: 11, startDay: 1, endWeek: 11, endDay: 2, category: "UI Design" },
  { id: "1.4.5", name: "UI: Usage Analytics Report", owner: "Afsah", startWeek: 11, startDay: 2, endWeek: 11, endDay: 3, category: "UI Design" },
  { id: "1.4.6", name: "UI: Audit Trail Viewer", owner: "Afsah", startWeek: 11, startDay: 3, endWeek: 11, endDay: 4, category: "UI Design" },
  { id: "1.4.7", name: "Nielsen's Heuristics Evaluation", owner: "Afsah", startWeek: 11, startDay: 4, endWeek: 11, endDay: 5, category: "UI Design" },

  // ── Weeks 10–11 — Law & Ethics ────────────────────────────────
  { id: "1.5.1", name: "GDPR Compliance Analysis", owner: "Syed", startWeek: 10, startDay: 3, endWeek: 11, endDay: 1, category: "Law & Ethics" },
  { id: "1.5.2", name: "Information Security Analysis", owner: "Jake", startWeek: 10, startDay: 4, endWeek: 11, endDay: 2, category: "Law & Ethics" },
  { id: "1.5.3", name: "Equality & Accessibility Analysis", owner: "Eeshitha", startWeek: 11, startDay: 1, endWeek: 11, endDay: 3, category: "Law & Ethics" },
  { id: "M4", name: "Elaboration Complete", owner: "All", startWeek: 11, startDay: 5, endWeek: 11, endDay: 5, category: "Law & Ethics", isMilestone: true },

  // ── Week 12 — Report Production ───────────────────────────────
  { id: "1.6.1", name: "Write: Introduction", owner: "Afsah", startWeek: 12, startDay: 1, endWeek: 12, endDay: 1, category: "Report" },
  { id: "1.6.2", name: "Write: PM Chapter", owner: "Afsah", startWeek: 12, startDay: 1, endWeek: 12, endDay: 2, category: "Report" },
  { id: "1.6.3", name: "Write: Case Study Chapter", owner: "Syed", startWeek: 12, startDay: 1, endWeek: 12, endDay: 2, category: "Report" },
  { id: "1.6.4", name: "Write: UML Models Chapter", owner: "Jake", startWeek: 12, startDay: 1, endWeek: 12, endDay: 2, category: "Report" },
  { id: "1.6.5", name: "Write: UI Design Chapter", owner: "Afsah", startWeek: 12, startDay: 2, endWeek: 12, endDay: 2, category: "Report" },
  { id: "1.6.6", name: "Write: Law & Ethics Chapter", owner: "Syed", startWeek: 12, startDay: 2, endWeek: 12, endDay: 3, category: "Report" },
  { id: "1.6.7", name: "Write: Conclusions", owner: "Afsah", startWeek: 12, startDay: 3, endWeek: 12, endDay: 3, category: "Report" },
  { id: "1.6.8", name: "Peer Review of All Sections", owner: "All", startWeek: 12, startDay: 3, endWeek: 12, endDay: 3, category: "Report" },
  { id: "1.6.9", name: "Formatting, TOC & Proofreading", owner: "Afsah", startWeek: 12, startDay: 3, endWeek: 12, endDay: 4, category: "Report" },
  { id: "M5", name: "Report Draft Complete", owner: "All", startWeek: 12, startDay: 4, endWeek: 12, endDay: 4, category: "Report", isMilestone: true },

  // ── Week 12 — Presentation ────────────────────────────────────
  { id: "1.7.1", name: "Design Slides & Allocate Sections", owner: "All", startWeek: 12, startDay: 3, endWeek: 12, endDay: 3, category: "Presentation" },
  { id: "1.7.2", name: "Prepare Visual Aids", owner: "All", startWeek: 12, startDay: 3, endWeek: 12, endDay: 4, category: "Presentation" },
  { id: "1.7.3", name: "Rehearsal (Timed)", owner: "All", startWeek: 12, startDay: 5, endWeek: 12, endDay: 5, category: "Presentation" },
  { id: "M6", name: "Final Submission & Presentation", owner: "All", startWeek: 12, startDay: 5, endWeek: 12, endDay: 5, category: "Presentation", isMilestone: true },
]

export const markData: MarkEntry[] = [
  { component: "Case Study", marks: 0, maxMarks: 10 },
  { component: "Use Case Diagrams", marks: 0, maxMarks: 15 },
  { component: "Use Case Descriptors", marks: 0, maxMarks: 10 },
  { component: "Class Diagram", marks: 0, maxMarks: 10 },
  { component: "Activity Diagrams", marks: 0, maxMarks: 10 },
  { component: "Sequence Diagrams", marks: 0, maxMarks: 10 },
  { component: "Project Management", marks: 0, maxMarks: 20 },
  { component: "Law & Ethics", marks: 0, maxMarks: 10 },
  { component: "Presentation", marks: 0, maxMarks: 5 },
]

export const milestones: Milestone[] = [
  { name: "Inception Complete", week: 8, day: 5, status: "pending" },
  { name: "Use Case Diagrams Complete", week: 10, day: 2, status: "pending" },
  { name: "All UML Models Complete", week: 11, day: 5, status: "pending" },
  { name: "Elaboration Complete", week: 11, day: 5, status: "pending" },
  { name: "Report Draft Complete", week: 12, day: 4, status: "pending" },
  { name: "Final Submission (24 April 2026)", week: 12, day: 5, status: "pending" },
]

export const TOTAL_MARKS = 100
export const WEEKS = [7, 8, 9, 10, 11, 12] as const
export const DAYS_PER_WEEK = 5
export const TOTAL_DAYS = WEEKS.length * DAYS_PER_WEEK

export function getOwnerColor(owner: string): string {
  const member = teamMembers.find((m) => m.name === owner)
  if (member) return member.color
  return "oklch(0.58 0.16 15)"
}

export function getDayOffset(week: number, day: number): number {
  return (week - 7) * DAYS_PER_WEEK + (day - 1)
}

export function getTaskWidth(task: GanttTask): number {
  const start = getDayOffset(task.startWeek, task.startDay)
  const end = getDayOffset(task.endWeek, task.endDay)
  return end - start + 1
}
