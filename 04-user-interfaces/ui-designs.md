# User Interface Designs

## OpenAI Enterprise Billing System — CST2310

Each UI design is evaluated against Nielsen's 10 Usability Heuristics (Nielsen, 1994).

---

## UI 1: Dashboard Overview

**Purpose:** Provide a real-time at-a-glance summary of enterprise AI spending, usage, and alerts.
**Target Actor:** Department Manager, Finance Officer, Administrator

### Layout Description

```mermaid
block-beta
    columns 5

    block:nav:1
        columns 1
        space
        n1["Dashboard"]
        n2["Usage"]
        n3["Models"]
        n4["Departments"]
        n5["Projects"]
        n6["API Keys"]
        n7["Alerts"]
        n8["Reports"]
        n9["Audit"]
        n10["Settings"]
    end

    block:content:4
        columns 4
        kpi1["Total Spend<br>$124,580 ↑4.2%"]
        kpi2["Active Depts<br>6"]
        kpi3["Total Tokens<br>2.8M"]
        kpi4["Active Alerts<br>3"]
        chart1["Spend Over Time<br>(Line Chart)"]:2
        chart2["Cost by Department<br>(Bar Chart)"]:2
        chart3["Usage by Model<br>(Donut Chart)"]:2
        chart4["Quota Utilisation<br>(Progress Bars)"]:2
        env1["Energy<br>142 kWh"]
        env2["CO₂<br>55 kg"]
        env3["PUE<br>1.10"]
        env4["Renewable<br>78%"]
    end

    style n1 fill:#3498db,color:#fff
    style kpi1 fill:#1a1a2e,color:#fff
    style kpi2 fill:#1a1a2e,color:#fff
    style kpi3 fill:#1a1a2e,color:#fff
    style kpi4 fill:#1a1a2e,color:#fff
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

```mermaid
block-beta
    columns 5

    block:header:5
        columns 5
        h1["DEPARTMENTS"]:4
        addBtn["+ New Dept"]
    end

    block:table:5
        columns 5
        thName["Name"] thBudget["Budget"] thSpent["Spent"] thUtil["Utilisation"] thAct["Action"]
        r1a["Engineering"] r1b["£50,000"] r1c["£42,000"] r1d["84%"] r1e["Edit"]
        r2a["Marketing"] r2b["£30,000"] r2c["£28,500"] r2d["95%"] r2e["Edit"]
        r3a["Research"] r3b["£25,000"] r3c["£12,000"] r3d["48%"] r3e["Edit"]
        r4a["Support"] r4b["£15,000"] r4c["£11,200"] r4d["75%"] r4e["Edit"]
        r5a["Legal"] r5b["£10,000"] r5c["£3,200"] r5d["32%"] r5e["Edit"]
        r6a["HR"] r6b["£8,000"] r6c["£4,100"] r6d["51%"] r6e["Edit"]
    end

    block:modal:5
        columns 3
        mh["Edit Budget — Marketing"]:3
        ml1["Current Budget: £30,000"] ml2["Current Spend: £28,500"] space
        ml3["New Budget: [£________]"]:2 space
        mw["Warning: Budget must be ≥ current spend (£28,500)"]:3
        space cancelBtn["Cancel"] saveBtn["Save Changes"]
    end

    style thName fill:#2c3e50,color:#fff
    style thBudget fill:#2c3e50,color:#fff
    style thSpent fill:#2c3e50,color:#fff
    style thUtil fill:#2c3e50,color:#fff
    style thAct fill:#2c3e50,color:#fff
    style r2d fill:#e74c3c,color:#fff
    style r1d fill:#e67e22,color:#fff
    style mw fill:#f39c12,color:#000
    style saveBtn fill:#2ecc71,color:#fff
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

```mermaid
block-beta
    columns 5

    block:header:5
        columns 5
        h1["API KEYS"]:4
        createBtn["+ Create Key"]
    end

    block:filters:5
        columns 4
        f1["All Types ▼"] f2["Active ▼"] f3["Department ▼"] f4["Search..."]
    end

    block:table:5
        columns 5
        thName["Name"] thKey["Key"] thDept["Dept"] thStatus["Status"] thAct["Actions"]
        r1a["prod-main"] r1b["sk-...a3f2"] r1c["Engineering"] r1d["Active"] r1e["Rotate Revoke"]
        r2a["staging"] r2b["sk-...b7c1"] r2c["Engineering"] r2d["Active"] r2e["Rotate Revoke"]
        r3a["analytics"] r3b["sk-...d4e8"] r3c["Research"] r3d["Active"] r3e["Rotate Revoke"]
        r4a["old-prod"] r4b["sk-...f1a9"] r4c["Engineering"] r4d["Revoked"] r4e["—"]
        r5a["test-key"] r5b["sk-...c2d3"] r5c["Support"] r5d["Expired"] r5e["—"]
    end

    block:detail:5
        columns 3
        dh["Key Details — prod-main"]:3
        d1["Created: 15 Jan 2026"] d2["Last Used: 2 hours ago"] d3["Key Age: 69 days"]
        d4["Permissions: chat, embeddings, fine-tuning"]:2 d5["Dept: Engineering"]
        dw["Rotation due in 21 days (90-day policy)"]:3
    end

    style thName fill:#2c3e50,color:#fff
    style thKey fill:#2c3e50,color:#fff
    style thDept fill:#2c3e50,color:#fff
    style thStatus fill:#2c3e50,color:#fff
    style thAct fill:#2c3e50,color:#fff
    style r1d fill:#2ecc71,color:#fff
    style r2d fill:#2ecc71,color:#fff
    style r3d fill:#2ecc71,color:#fff
    style r4d fill:#95a5a6,color:#fff
    style r5d fill:#95a5a6,color:#fff
    style dw fill:#f39c12,color:#000
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

```mermaid
block-beta
    columns 4

    block:header:4
        columns 4
        h1["ALERTS"]:3
        badge["3 unacknowledged"]
    end

    block:filters:4
        columns 4
        f1["All Types ▼"] f2["All Severity ▼"] f3["Unacknowledged ▼"] f4["Search..."]
    end

    block:critical:4
        columns 4
        c1["CRITICAL: Unusual API usage detected on key sk-...a3f2"]:3
        cBtn["Acknowledge"]
        c2["Security · Engineering · 2 hours ago"]:4
    end

    block:warning:4
        columns 4
        w1["WARNING: Marketing department at 95% budget utilisation"]:3
        wBtn["Acknowledge"]
        w2["Quota · Marketing · 5 hours ago"]:4
    end

    block:info:4
        columns 4
        i1["INFO: Monthly billing report ready for download"]:3
        iBtn["Acknowledge"]
        i2["Billing · System · 1 day ago"]:4
    end

    block:ack:4
        columns 4
        a1["ACKNOWLEDGED: Research department exceeded 80% threshold"]:4
        a2["Quota · Research · 3 days ago · Acknowledged by: Admin"]:4
    end

    style critical fill:#e74c3c,color:#fff,stroke:#c0392b
    style warning fill:#f39c12,color:#000,stroke:#e67e22
    style info fill:#3498db,color:#fff,stroke:#2980b9
    style ack fill:#95a5a6,color:#fff,stroke:#7f8c8d
    style badge fill:#e74c3c,color:#fff
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

```mermaid
block-beta
    columns 4

    block:header:4
        columns 1
        h1["REPORTS"]
    end

    block:filters:4
        columns 4
        f1["Period: 01/03/2026"] f2["to: 31/03/2026"] f3["Dept: All ▼"] f4["Generate Report"]
    end

    block:summary:4
        columns 3
        s1["Total Spend<br>£24,580"]
        s2["Total Tokens<br>1.2M"]
        s3["Records<br>847"]
    end

    block:charts:4
        columns 2
        ch1["Spend by Department<br>(Stacked Bar Chart)"]
        ch2["Spend by Model<br>(Donut Chart)"]
    end

    block:records:4
        columns 6
        rh1["Date"] rh2["Dept"] rh3["Model"] rh4["Tokens"] rh5["Cost"] rh6["Project"]
        rd1["25/03"] rd2["Engineering"] rd3["GPT-4o"] rd4["12,400"] rd5["£4.80"] rd6["Chatbot"]
        rd7["25/03"] rd8["Marketing"] rd9["GPT-4.5"] rd10["8,200"] rd11["£6.10"] rd12["Content"]
    end

    block:actions:4
        columns 4
        space:2
        exportBtn["Export CSV"]
        printBtn["Print"]
    end

    style s1 fill:#1a1a2e,color:#fff
    style s2 fill:#1a1a2e,color:#fff
    style s3 fill:#1a1a2e,color:#fff
    style rh1 fill:#2c3e50,color:#fff
    style rh2 fill:#2c3e50,color:#fff
    style rh3 fill:#2c3e50,color:#fff
    style rh4 fill:#2c3e50,color:#fff
    style rh5 fill:#2c3e50,color:#fff
    style rh6 fill:#2c3e50,color:#fff
    style f4 fill:#3498db,color:#fff
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

```mermaid
block-beta
    columns 4

    block:header:4
        columns 4
        h1["AUDIT TRAIL"]:3
        badge["12,847 entries"]
    end

    block:filters:4
        columns 4
        f1["All Categories ▼"] f2["Date Range"] f3["Actor"] f4["Search..."]
    end

    block:table:4
        columns 4
        thTime["Timestamp"] thAction["Action"] thActor["Actor"] thCat["Category"]
        r1a["25/03 14:22:01"] r1b["budget_updated"] r1c["admin"] r1d["billing"]
        r2a["25/03 14:18:45"] r2b["alert_ack"] r2c["mgr"] r2d["security"]
        r3a["25/03 14:15:30"] r3b["key_rotated"] r3c["admin"] r3d["security"]
        r4a["25/03 14:12:00"] r4b["settings_updated"] r4c["admin"] r4d["config"]
        r5a["25/03 14:05:22"] r5b["report_generated"] r5c["finance"] r5d["billing"]
    end

    block:detail:4
        columns 2
        dh["Entry Detail — budget_updated"]:2
        d1["Action: budget_updated"] d2["Actor: admin (admin@company.com)"]
        d3["Target: Department: Marketing"] d4["Timestamp: 25/03/2026 14:22:01 UTC"]
        d5["Details: Budget changed from £30,000 to £75,000"] d6["Category: billing"]
    end

    block:actions:4
        columns 4
        space:3
        exportBtn["Export Audit Report"]
    end

    style thTime fill:#2c3e50,color:#fff
    style thAction fill:#2c3e50,color:#fff
    style thActor fill:#2c3e50,color:#fff
    style thCat fill:#2c3e50,color:#fff
    style badge fill:#3498db,color:#fff
    style detail fill:#1a1a2e,color:#fff
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
