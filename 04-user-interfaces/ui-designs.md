# User Interface Designs

## OpenAI Enterprise Billing System — CST2310

Each UI design is evaluated against Nielsen's 10 Usability Heuristics (Nielsen, 1994).

---

## UI 1: Dashboard Overview

**Purpose:** Provide a real-time at-a-glance summary of enterprise AI spending, usage, and alerts.
**Target Actor:** Department Manager, Finance Officer, Administrator

### Layout Description

```
┌─────────────────────────────────────────────────────────────────┐
│ [Sidebar]  │  DASHBOARD                          [Filters ▼]   │
│            │                                                     │
│ Dashboard  │  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌────────┐│
│ Usage      │  │Total Spend│ │ Active   │ │  Total   │ │ Active ││
│ Models     │  │ $124,580  │ │ Depts: 6 │ │ Tokens:  │ │Alerts:3││
│ Depts      │  │ ↑4.2%     │ │ Stable   │ │ 2.8M     │ │Review  ││
│ Projects   │  └──────────┘ └──────────┘ └──────────┘ └────────┘│
│ API Keys   │                                                     │
│ Alerts     │  ┌─────────────────────┐ ┌─────────────────────────┐│
│ Reports    │  │  Spend Over Time    │ │ Cost by Department      ││
│ Audit      │  │  [Line Chart]       │ │ [Horizontal Bar Chart]  ││
│ Settings   │  │                     │ │                         ││
│            │  └─────────────────────┘ └─────────────────────────┘│
│            │  ┌─────────────────────┐ ┌─────────────────────────┐│
│            │  │  Usage by Model     │ │ Quota Utilisation       ││
│            │  │  [Pie/Donut Chart]  │ │ [Progress Bars]         ││
│            │  └─────────────────────┘ └─────────────────────────┘│
│            │                                                     │
│            │  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌────────┐│
│            │  │Energy Use│ │CO2 Impact│ │PUE Ratio │ │Renewble││
│            │  │  142 kWh │ │  55 kg   │ │  1.10    │ │  78%   ││
│            │  └──────────┘ └──────────┘ └──────────┘ └────────┘│
└─────────────────────────────────────────────────────────────────┘
```

### Nielsen's Heuristics Evaluation

| # | Heuristic | Evaluation |
|---|---|---|
| H1 | Visibility of system status | KPI cards update in real time; trend arrows (↑/↓) indicate direction; "X records" badge shows data scope |
| H2 | Match between system and real world | Uses business terminology: "Spend", "Budget", "Tokens", currency symbols; familiar chart types |
| H3 | User control and freedom | Filters can be reset with a single "Reset" button; sidebar navigation allows quick escape to any page |
| H4 | Consistency and standards | All KPI cards follow the same layout (label, value, subtitle, trend); chart colour palette is consistent |
| H5 | Error prevention | Filter dropdowns prevent invalid selections; date picker prevents future dates |
| H6 | Recognition rather than recall | All current values are visible on the dashboard without needing to remember previous data |
| H7 | Flexibility and efficiency of use | Power users can use keyboard shortcuts; date range filter supports presets (Last 7 days, This month, Custom) |
| H8 | Aesthetic and minimalist design | Dark theme reduces visual noise; cards use whitespace; only essential metrics are shown |
| H9 | Help users recognise, diagnose, and recover from errors | If data fails to load, skeleton placeholders are shown with a "Retry" action |
| H10 | Help and documentation | Tooltip on each KPI explains the metric; "?" icon links to documentation |

---

## UI 2: Department Budget Management

**Purpose:** View and manage department budgets with visual spend indicators.
**Target Actor:** Administrator, Finance Officer

### Layout Description

```
┌─────────────────────────────────────────────────────────────────┐
│ DEPARTMENTS                                     [+ New Dept]    │
│                                                                  │
│ ┌────────────────────────────────────────────────────────────┐  │
│ │ Name          │ Budget    │ Spent     │ Utilisation │ Action│  │
│ │───────────────┼──────────┼──────────┼────────────┼───────│  │
│ │ Engineering   │ £50,000  │ £42,000  │ ████████░░ 84% │ Edit│  │
│ │ Marketing     │ £30,000  │ £28,500  │ █████████░ 95% │ Edit│  │
│ │ Research      │ £25,000  │ £12,000  │ █████░░░░░ 48% │ Edit│  │
│ │ Support       │ £15,000  │ £11,200  │ ███████░░░ 75% │ Edit│  │
│ │ Legal         │ £10,000  │ £3,200   │ ███░░░░░░░ 32% │ Edit│  │
│ │ HR            │ £8,000   │ £4,100   │ █████░░░░░ 51% │ Edit│  │
│ └────────────────────────────────────────────────────────────┘  │
│                                                                  │
│ ┌─── Edit Budget Modal ──────────────────────────────────────┐  │
│ │ Department: Marketing                                       │  │
│ │ Current Budget: £30,000    Current Spend: £28,500           │  │
│ │                                                             │  │
│ │ New Budget: [£___________]                                  │  │
│ │ ⚠ Budget must be ≥ current spend (£28,500)                 │  │
│ │                                                             │  │
│ │                              [Cancel]  [Save Changes]       │  │
│ └─────────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────┘
```

### Nielsen's Heuristics Evaluation

| # | Heuristic | Evaluation |
|---|---|---|
| H1 | Visibility of system status | Progress bars provide immediate visual feedback on budget utilisation; colour coding (green < 70%, amber 70–90%, red > 90%) |
| H2 | Match between system and real world | "Budget", "Spent", "Utilisation" are familiar financial terms; currency symbols match configured locale |
| H3 | User control and freedom | Modal has Cancel button; changes are not saved until explicitly confirmed |
| H4 | Consistency and standards | Table follows standard data grid patterns; Edit button is consistently positioned |
| H5 | Error prevention | Validation prevents setting budget below current spend; inline warning explains constraint |
| H6 | Recognition rather than recall | Current budget and spend are displayed in the modal alongside the input field |
| H7 | Flexibility and efficiency of use | Table columns are sortable; search bar filters departments by name |
| H8 | Aesthetic and minimalist design | Clean table layout; modal focuses on the single edit task without extraneous information |
| H9 | Help users recognise errors | Inline validation message "Budget must be ≥ current spend" appears immediately on invalid input |
| H10 | Help and documentation | Tooltip explains utilisation calculation: "(Spent ÷ Budget) × 100" |

---

## UI 3: API Key Management Console

**Purpose:** Full lifecycle management of API keys: create, view, rotate, revoke.
**Target Actor:** Administrator, Developer

### Layout Description

```
┌─────────────────────────────────────────────────────────────────┐
│ API KEYS                                        [+ Create Key]  │
│                                                                  │
│ [All ▼] [Active ▼] [Department ▼]                  [Search...]  │
│                                                                  │
│ ┌────────────────────────────────────────────────────────────┐  │
│ │ Name         │ Key          │ Dept      │ Status  │ Actions│  │
│ │──────────────┼─────────────┼──────────┼────────┼────────│  │
│ │ prod-main    │ sk-...a3f2  │ Engineer │ ● Active│ ⟳ ✕   │  │
│ │ staging      │ sk-...b7c1  │ Engineer │ ● Active│ ⟳ ✕   │  │
│ │ analytics    │ sk-...d4e8  │ Research │ ● Active│ ⟳ ✕   │  │
│ │ old-prod     │ sk-...f1a9  │ Engineer │ ○ Revoked│ —     │  │
│ │ test-key     │ sk-...c2d3  │ Support  │ ◌ Expired│ —     │  │
│ └────────────────────────────────────────────────────────────┘  │
│                                                                  │
│ Key Details (selected: prod-main)                                │
│ ┌────────────────────────────────────────────────────────────┐  │
│ │ Created: 15 Jan 2026   Last Used: 2 hours ago              │  │
│ │ Permissions: chat, embeddings, fine-tuning                  │  │
│ │ Department: Engineering   Key Age: 69 days                  │  │
│ │ ⚠ Key rotation due in 21 days (90-day policy)              │  │
│ └────────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────┘
```

### Nielsen's Heuristics Evaluation

| # | Heuristic | Evaluation |
|---|---|---|
| H1 | Visibility of system status | Status indicators (●/○/◌) with colour coding; key age and rotation due date visible |
| H2 | Match between system and real world | "Rotate" (⟳) and "Revoke" (✕) icons are universally understood; masked key format matches industry standard |
| H3 | User control and freedom | Confirmation dialog before rotation/revocation; undo not possible for security reasons (clearly stated) |
| H4 | Consistency and standards | Action icons are consistent across all rows; disabled for inactive keys |
| H5 | Error prevention | Rotate/revoke buttons are disabled for already-inactive keys; confirmation required for destructive actions |
| H6 | Recognition rather than recall | Key details panel shows all metadata without requiring navigation to a separate page |
| H7 | Flexibility and efficiency of use | Filters narrow the list; search finds keys by name; bulk operations for administrators |
| H8 | Aesthetic and minimalist design | Only essential columns shown; detail panel appears on selection; inactive keys are visually de-emphasised |
| H9 | Help users recognise errors | "Key rotation due in 21 days" warning provides proactive guidance before the key expires |
| H10 | Help and documentation | Tooltip on permission badges explains each permission scope |

---

## UI 4: Alert Centre

**Purpose:** View, filter, and acknowledge system alerts across all categories and severities.
**Target Actor:** Administrator, Department Manager

### Layout Description

```
┌─────────────────────────────────────────────────────────────────┐
│ ALERTS                                    3 unacknowledged       │
│                                                                  │
│ [All Types ▼] [All Severity ▼] [Unacknowledged ▼]   [Search]   │
│                                                                  │
│ ┌─ CRITICAL ─────────────────────────────────────────────────┐  │
│ │ ⚠ Unusual API usage detected on key sk-...a3f2            │  │
│ │   Security · Engineering · 2 hours ago        [Acknowledge]│  │
│ └────────────────────────────────────────────────────────────┘  │
│ ┌─ WARNING ──────────────────────────────────────────────────┐  │
│ │ △ Marketing department at 95% budget utilisation           │  │
│ │   Quota · Marketing · 5 hours ago             [Acknowledge]│  │
│ └────────────────────────────────────────────────────────────┘  │
│ ┌─ INFO ─────────────────────────────────────────────────────┐  │
│ │ ℹ Monthly billing report ready for download                │  │
│ │   Billing · System · 1 day ago                [Acknowledge]│  │
│ └────────────────────────────────────────────────────────────┘  │
│ ┌─ ACKNOWLEDGED ─────────────────────────────────────────────┐  │
│ │ ✓ Research department exceeded 80% threshold               │  │
│ │   Quota · Research · 3 days ago · Ack by: Admin            │  │
│ └────────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────┘
```

### Nielsen's Heuristics Evaluation

| # | Heuristic | Evaluation |
|---|---|---|
| H1 | Visibility of system status | Badge shows unacknowledged count; alerts sorted by severity (critical first); colour-coded borders |
| H2 | Match between system and real world | Severity icons (⚠/△/ℹ) follow common conventions; "Acknowledge" is clear action language |
| H3 | User control and freedom | Filters allow viewing only relevant alerts; acknowledged alerts remain visible but visually de-emphasised |
| H4 | Consistency and standards | Each alert card follows the same structure: icon, title, metadata, action button |
| H5 | Error prevention | Acknowledge action is a single click (low risk); accidental acknowledgement is acceptable (alert still visible) |
| H6 | Recognition rather than recall | Alert type, department, and time are visible without expanding; no need to remember context |
| H7 | Flexibility and efficiency of use | Keyboard shortcut (A) acknowledges selected alert; filters remember last selection |
| H8 | Aesthetic and minimalist design | Progressive disclosure — minimal info shown, expand for details; acknowledged alerts are greyed |
| H9 | Help users recognise errors | If an alert action fails, an inline retry message appears within the alert card |
| H10 | Help and documentation | "What does this mean?" link on each alert type opens contextual help |

---

## UI 5: Usage Analytics Report

**Purpose:** Generate and explore detailed usage analytics with exportable data.
**Target Actor:** Finance Officer, Department Manager

### Layout Description

```
┌─────────────────────────────────────────────────────────────────┐
│ REPORTS                                                          │
│                                                                  │
│ Period: [01/03/2026] to [31/03/2026]  Dept: [All ▼]            │
│ Model: [All ▼]                        [Generate Report]         │
│                                                                  │
│ ┌─ Summary ──────────────────────────────────────────────────┐  │
│ │ Total Spend: £24,580  │ Total Tokens: 1.2M  │ Records: 847│  │
│ └────────────────────────────────────────────────────────────┘  │
│                                                                  │
│ ┌─ Spend by Department ──────────────────────────────────────┐  │
│ │ [Horizontal stacked bar chart]                              │  │
│ └────────────────────────────────────────────────────────────┘  │
│                                                                  │
│ ┌─ Spend by Model ──────────────────────────────────────────┐  │
│ │ [Donut chart with legend]                                   │  │
│ └────────────────────────────────────────────────────────────┘  │
│                                                                  │
│ ┌─ Detailed Records ────────────────────────────────────────┐  │
│ │ Date  │ Dept  │ Model    │ Tokens  │ Cost    │ Project    │  │
│ │ ...   │ ...   │ ...      │ ...     │ ...     │ ...        │  │
│ └────────────────────────────────────────────────────────────┘  │
│                                                                  │
│                                           [Export CSV] [Print]   │
└─────────────────────────────────────────────────────────────────┘
```

### Nielsen's Heuristics Evaluation

| # | Heuristic | Evaluation |
|---|---|---|
| H1 | Visibility of system status | Summary bar shows key totals; loading spinner during report generation; "847 records" confirms scope |
| H2 | Match between system and real world | Date pickers use locale format; currency matches settings; "Export CSV" is standard business terminology |
| H3 | User control and freedom | Filters can be changed and report regenerated; "Reset" clears all filters |
| H4 | Consistency and standards | Chart style and colour palette match the dashboard; table follows same data grid pattern |
| H5 | Error prevention | Date picker prevents end date before start date; model/department dropdowns prevent invalid selections |
| H6 | Recognition rather than recall | Filter selections are visible at the top; summary bar provides context for the detailed data below |
| H7 | Flexibility and efficiency of use | Preset date ranges (This month, Last quarter); table columns are sortable; pagination for large datasets |
| H8 | Aesthetic and minimalist design | Summary → charts → detail table follows information hierarchy; progressive depth |
| H9 | Help users recognise errors | "No data found for selected period" message with suggestion to adjust filters |
| H10 | Help and documentation | Column headers have tooltips explaining the metric |

---

## UI 6: Audit Trail Viewer

**Purpose:** Search, filter, and examine audit log entries for compliance review.
**Target Actor:** Auditor, Administrator

### Layout Description

```
┌─────────────────────────────────────────────────────────────────┐
│ AUDIT TRAIL                                    12,847 entries    │
│                                                                  │
│ [All Categories ▼] [Date Range: ____] [Actor: ____] [Search..] │
│                                                                  │
│ ┌────────────────────────────────────────────────────────────┐  │
│ │ Timestamp        │ Action           │ Actor  │ Category    │  │
│ │──────────────────┼─────────────────┼───────┼────────────│  │
│ │ 25/03 14:22:01  │ budget_updated   │ admin  │ ● billing  │  │
│ │ 25/03 14:18:45  │ alert_ack        │ mgr    │ ● security │  │
│ │ 25/03 14:15:30  │ key_rotated      │ admin  │ ● security │  │
│ │ 25/03 14:12:00  │ settings_updated │ admin  │ ● config   │  │
│ │ 25/03 14:05:22  │ report_generated │ finance│ ● billing  │  │
│ └────────────────────────────────────────────────────────────┘  │
│                                                                  │
│ ┌─ Entry Detail (expanded) ──────────────────────────────────┐  │
│ │ Action: budget_updated                                      │  │
│ │ Actor: admin (admin@company.com)                            │  │
│ │ Target: Department: Marketing                               │  │
│ │ Timestamp: 25/03/2026 14:22:01 UTC                         │  │
│ │ Details: Budget changed from £30,000 to £75,000            │  │
│ │ Category: billing                                           │  │
│ └────────────────────────────────────────────────────────────┘  │
│                                                                  │
│                                    [Export Audit Report]         │
└─────────────────────────────────────────────────────────────────┘
```

### Nielsen's Heuristics Evaluation

| # | Heuristic | Evaluation |
|---|---|---|
| H1 | Visibility of system status | Entry count badge; category colour dots; timestamp in readable format |
| H2 | Match between system and real world | "Audit Trail" is standard compliance terminology; actions use clear verbs |
| H3 | User control and freedom | Filters are independently clearable; expanded detail collapses on click; back navigation preserved |
| H4 | Consistency and standards | Category colour coding is consistent across all pages; table follows same pattern |
| H5 | Error prevention | Audit entries are read-only — no accidental modification possible; export is the only write action |
| H6 | Recognition rather than recall | Category dots provide visual identification; entry detail shows all fields in plain language |
| H7 | Flexibility and efficiency of use | Free-text search across all fields; keyboard navigation (↑/↓ to select, Enter to expand) |
| H8 | Aesthetic and minimalist design | Summary table shows essential fields; detail panel appears only on selection |
| H9 | Help users recognise errors | If search returns no results, a message suggests broadening filters |
| H10 | Help and documentation | Category legend is accessible via the filter dropdown; action names link to glossary |

---

## Accessibility Considerations (All UIs)

- **Colour:** All colour-coded indicators have text labels or icon alternatives — never colour alone
- **Contrast:** WCAG 2.1 AA minimum contrast ratio (4.5:1 for normal text, 3:1 for large text) on dark theme
- **Keyboard:** All interactive elements are focusable and operable via keyboard
- **Screen readers:** ARIA labels on all interactive elements; live regions for real-time updates; semantic HTML
- **Motion:** Respects `prefers-reduced-motion` media query; animations can be disabled

---

## References

Nielsen, J. (1994) '10 Usability Heuristics for User Interface Design', *Nielsen Norman Group*. Available at: <https://www.nngroup.com/articles/ten-usability-heuristics/> (Accessed: March 2026).
