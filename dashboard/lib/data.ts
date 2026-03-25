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
    files: ["01-project-management/", "08-final-report/", "GDPR analysis", "Narrative"],
    color: "oklch(0.55 0.2 250)",
  },
  {
    name: "Jake",
    handle: "@JakeSajith",
    role: "UML Lead — Use Cases & UI",
    files: ["03-uml-models/use-case-*.md", "04-user-interfaces/", "Functional Reqs"],
    color: "oklch(0.6 0.18 165)",
  },
  {
    name: "Eeshitha",
    handle: "@Eeshitha-afk",
    role: "UML Lead — Activity & Sequence",
    files: ["03-uml-models/activity-diagrams.md", "03-uml-models/sequence-diagrams.md", "Equality analysis"],
    color: "oklch(0.55 0.2 300)",
  },
  {
    name: "Syed",
    handle: "@Syed-Nihaal",
    role: "UML Lead — Class Diagram & ERD",
    files: ["03-uml-models/class-diagram.md", "03-uml-models/collaboration-diagrams.md", "Security analysis"],
    color: "oklch(0.62 0.18 55)",
  },
]

export const ganttTasks: GanttTask[] = [
  // Week 7 — Inception Phase Meeting 1
  { id: "A1", name: "Identify requirements", owner: "All", startWeek: 7, startDay: 1, endWeek: 7, endDay: 2, category: "Inception" },
  { id: "A2", name: "Establish vision & scope", owner: "Afsah", startWeek: 7, startDay: 1, endWeek: 7, endDay: 3, category: "Inception" },
  { id: "A3", name: "Business case statement", owner: "Eeshitha", startWeek: 7, startDay: 2, endWeek: 7, endDay: 4, category: "Inception" },
  { id: "A4", name: "Preliminary schedules", owner: "Syed", startWeek: 7, startDay: 3, endWeek: 7, endDay: 5, category: "Inception" },
  { id: "M1", name: "Inception Meeting 1", owner: "All", startWeek: 7, startDay: 5, endWeek: 7, endDay: 5, category: "Inception", isMilestone: true },

  // Week 8 — Inception Phase Meeting 2
  { id: "A5.1", name: "Activity List", owner: "Syed", startWeek: 8, startDay: 1, endWeek: 8, endDay: 2, category: "Project Management" },
  { id: "A5.2", name: "Work Breakdown Structure", owner: "Syed", startWeek: 8, startDay: 2, endWeek: 8, endDay: 3, category: "Project Management" },
  { id: "A5.3", name: "Gantt Chart", owner: "Afsah", startWeek: 8, startDay: 2, endWeek: 8, endDay: 4, category: "Project Management" },
  { id: "A5.4", name: "Risk Matrix", owner: "Jake", startWeek: 8, startDay: 3, endWeek: 8, endDay: 5, category: "Project Management" },
  { id: "A5.5", name: "Critical Path Analysis", owner: "Afsah", startWeek: 8, startDay: 4, endWeek: 8, endDay: 5, category: "Project Management" },
  { id: "A6", name: "Case Study Narrative", owner: "Afsah", startWeek: 8, startDay: 1, endWeek: 8, endDay: 3, category: "Case Study" },
  { id: "A7", name: "Functional Requirements", owner: "Jake", startWeek: 8, startDay: 2, endWeek: 8, endDay: 4, category: "Case Study" },
  { id: "A8", name: "Non-Functional Requirements", owner: "Jake", startWeek: 8, startDay: 3, endWeek: 8, endDay: 5, category: "Case Study" },
  { id: "A9", name: "Data Collection Methods", owner: "Syed", startWeek: 8, startDay: 3, endWeek: 8, endDay: 5, category: "Case Study" },
  { id: "M2", name: "Inception Meeting 2", owner: "All", startWeek: 8, startDay: 5, endWeek: 8, endDay: 5, category: "Project Management", isMilestone: true },

  // Weeks 9-10 — Elaboration Phase Meeting 3
  { id: "A10.1", name: "Use Case Diagrams (6)", owner: "Jake", startWeek: 9, startDay: 1, endWeek: 9, endDay: 4, category: "UML: Use Cases" },
  { id: "A10.2", name: "Use Case Descriptors (6)", owner: "Afsah", startWeek: 9, startDay: 2, endWeek: 9, endDay: 5, category: "UML: Use Cases" },
  { id: "A10.3", name: "Class Diagram", owner: "Syed", startWeek: 9, startDay: 1, endWeek: 9, endDay: 3, category: "UML: Structure" },
  { id: "A10.4", name: "Entity-Relationship Diagram", owner: "Syed", startWeek: 9, startDay: 3, endWeek: 9, endDay: 5, category: "UML: Structure" },
  { id: "A10.5", name: "Activity Diagrams (6)", owner: "Eeshitha", startWeek: 9, startDay: 1, endWeek: 10, endDay: 2, category: "UML: Behaviour" },
  { id: "A10.6", name: "Sequence Diagrams (6)", owner: "Eeshitha", startWeek: 10, startDay: 1, endWeek: 10, endDay: 4, category: "UML: Behaviour" },
  { id: "A10.7", name: "Collaboration Diagrams (6)", owner: "Syed", startWeek: 10, startDay: 2, endWeek: 10, endDay: 5, category: "UML: Behaviour" },
  { id: "A10.8", name: "User Interface Designs (6)", owner: "Jake", startWeek: 10, startDay: 1, endWeek: 10, endDay: 4, category: "UML: UI" },
  { id: "M3", name: "Draft Diagrams Review", owner: "All", startWeek: 10, startDay: 5, endWeek: 10, endDay: 5, category: "UML: UI", isMilestone: true },

  // Week 11 — Elaboration Phase Meeting 4
  { id: "A11.1", name: "GDPR Analysis", owner: "Afsah", startWeek: 11, startDay: 1, endWeek: 11, endDay: 2, category: "Law & Ethics" },
  { id: "A11.2", name: "Security Measures", owner: "Syed", startWeek: 11, startDay: 1, endWeek: 11, endDay: 2, category: "Law & Ethics" },
  { id: "A11.3", name: "Equality Analysis", owner: "Eeshitha", startWeek: 11, startDay: 1, endWeek: 11, endDay: 2, category: "Law & Ethics" },
  { id: "A12", name: "Refine all diagrams", owner: "All", startWeek: 11, startDay: 2, endWeek: 11, endDay: 4, category: "Refinement" },
  { id: "A13.1", name: "Write Report Draft", owner: "Afsah", startWeek: 11, startDay: 3, endWeek: 11, endDay: 5, category: "Report" },
  { id: "M4", name: "Elaboration Meeting 4", owner: "All", startWeek: 11, startDay: 5, endWeek: 11, endDay: 5, category: "Report", isMilestone: true },

  // Week 12 — Submission
  { id: "A13.2", name: "Compile Final Report", owner: "Afsah", startWeek: 12, startDay: 1, endWeek: 12, endDay: 2, category: "Report" },
  { id: "A13.3", name: "Peer Review", owner: "All", startWeek: 12, startDay: 2, endWeek: 12, endDay: 3, category: "Report" },
  { id: "A13.4", name: "Formatting & Proofreading", owner: "Afsah", startWeek: 12, startDay: 3, endWeek: 12, endDay: 4, category: "Report" },
  { id: "A14.1", name: "Design Slides", owner: "All", startWeek: 12, startDay: 2, endWeek: 12, endDay: 3, category: "Presentation" },
  { id: "A14.2", name: "Rehearsal", owner: "All", startWeek: 12, startDay: 4, endWeek: 12, endDay: 4, category: "Presentation" },
  { id: "A14.3", name: "Self/Peer Assessment", owner: "All", startWeek: 12, startDay: 4, endWeek: 12, endDay: 5, category: "Presentation" },
  { id: "M5", name: "Final Submission", owner: "All", startWeek: 12, startDay: 5, endWeek: 12, endDay: 5, category: "Presentation", isMilestone: true },
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
  { name: "Inception Meeting 1 — Requirements & Vision", week: 7, day: 5, status: "pending" },
  { name: "Inception Meeting 2 — PM Artefacts & Schedule", week: 8, day: 5, status: "pending" },
  { name: "Draft Diagrams Reviewed by Tutor", week: 10, day: 5, status: "pending" },
  { name: "Elaboration Meeting 4 — Refinement", week: 11, day: 5, status: "pending" },
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
