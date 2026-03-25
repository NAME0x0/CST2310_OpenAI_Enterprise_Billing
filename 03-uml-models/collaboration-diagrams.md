# Collaboration Diagrams

## OpenAI Enterprise Billing System — CST2310

Collaboration diagrams (also called communication diagrams in UML 2.x) re-express the interactions from the sequence diagrams, emphasising the structural relationships between objects rather than temporal ordering. Messages are numbered to indicate sequence.

---

## 1. API Call → Usage Recorded → Budget Checked

```plantuml
@startuml
object "Developer" as DEV
object "Client App" as APP
object "OpenAI API" as OAPI
object "Billing Service" as BS
object "Usage Repository" as UR
object "Department Service" as DS
object "Alert Service" as AS
object "Audit Service" as AUD

DEV -- APP
APP -- OAPI
APP -- BS
BS -- UR
BS -- DS
BS -- AS
BS -- AUD

DEV : 1: triggerAPIRequest()
APP : 2: POST /v1/chat/completions()
OAPI : 3: return(response, usage)
APP : 4: reportUsage(key, model, tokens)
BS : 5: validateApiKey()
BS : 6: lookupModelPricing()
BS : 7: calculateCost()
UR : 8: save(usageRecord)
DS : 9: addSpend(deptId, cost)
DS : 10: updateBudgetUtilisation()
AS : 11: [utilisation >= threshold] checkThreshold()
AUD : 12: log("usage_recorded")
@enduml
```

**Description:** This collaboration diagram shows the structural relationships between the Developer, Client App, OpenAI API, and the billing system components. The numbered messages indicate the sequence of interactions. Message 11 is conditional (guard: utilisation >= threshold).

---

## 2. Monthly Report Generation

```plantuml
@startuml
object "Finance Officer" as FO
object "Reports UI" as UI
object "Report Service" as RS
object "Usage Repository" as UR
object "Department Service" as DS
object "Audit Repository" as AR
object "Export Service" as ES
object "Audit Service" as AUD

FO -- UI
UI -- RS
RS -- UR
RS -- DS
RS -- AR
UI -- ES
UI -- AUD

FO : 1: selectReportParameters()
UI : 2: generateReport(params)
RS : 3: getUsageByPeriod()
UR : 3.1: return usageRecords[]
RS : 4: getDepartmentSummaries()
DS : 4.1: return departmentData[]
RS : 5: getAuditEntries()
AR : 5.1: return auditEntries[]
RS : 6: aggregateData()
RS : 7: compileReport()
UI : 8: displayReport()
FO : 9: [export requested] clickExport()
ES : 10: exportAsCSV(reportData)
AUD : 11: log("report_generated")
@enduml
```

**Description:** The Report Service acts as a coordinator, querying three repositories (Usage, Department, Audit) to compile the report. Nested numbering (3.1, 4.1, 5.1) shows return messages. Message 9 is conditional.

---

## 3. Emergency API Key Rotation

```plantuml
@startuml
object "Administrator" as ADM
object "API Keys UI" as UI
object "Key Service" as KS
object "Key Repository" as KR
object "Notification Service" as NS
object "Audit Service" as AUD

ADM -- UI
UI -- KS
KS -- KR
KS -- NS
KS -- AUD

ADM : 1: selectCompromisedKey()
ADM : 2: clickEmergencyRotate()
UI : 3: emergencyRotate(keyId)
KS : 4: getKey(keyId)
KR : 4.1: return existingKey
KS : 5: revokeKey(keyId)
KR : 5.1: return revoked
KS : 6: generateNewKey()
KS : 7: copyPermissions(existingKey)
KS : 8: saveKey(newKey)
KR : 8.1: return saved
AUD : 9: log("key_rotated", SECURITY)
NS : 10: notifyDeveloper(keyId)
UI : 11: displayNewKey(oneTimeOnly)
@enduml
```

**Description:** The Key Service orchestrates the rotation, interacting with the Key Repository for persistence, the Audit Service for logging, and the Notification Service to inform the affected developer. The UI displays the new key exactly once.

---

## 4. Quota Alert Lifecycle

```plantuml
@startuml
object "Billing Service" as BS
object "Department Service" as DS
object "Alert Service" as AS
object "Alert Repository" as AR
object "Notification Service" as NS
object "Department Manager" as DM
object "Alerts UI" as UI
object "Audit Service" as AUD

BS -- DS
BS -- AS
AS -- AR
AS -- NS
DM -- UI
UI -- AS
AS -- AUD

BS : 1: getUtilisation(deptId)
DS : 1.1: return 92%
BS : 2: evaluateThreshold(deptId, 92%)
AS : 3: determineSeverity(92%)
AS : 4: createAlert(QUOTA, WARNING)
AR : 4.1: return alertId
NS : 5: sendNotification(email, alert)
AS : 6: startEscalationTimer(24h)
DM : 7: navigateToAlerts()
UI : 8: getUnacknowledgedAlerts()
AR : 8.1: return alerts[]
DM : 9: acknowledgeAlert(alertId)
UI : 10: acknowledgeAlert(alertId, mgr)
AR : 11: updateAlert(acknowledged=true)
AS : 12: cancelEscalationTimer()
AUD : 13: log("alert_acknowledged")
@enduml
```

**Description:** This diagram shows the complete alert lifecycle. The structural links reveal that the Alert Service is the central coordinator, connecting to the repository for persistence, the notification service for delivery, and the audit service for compliance.

---

## 5. Audit Trail Review

```plantuml
@startuml
object "Auditor" as AUD_ACTOR
object "Audit UI" as UI
object "Audit Service" as AS
object "Audit Repository" as AR
object "Export Service" as ES

AUD_ACTOR -- UI
UI -- AS
AS -- AR
UI -- ES

AUD_ACTOR : 1: navigateToAuditTrail()
UI : 2: getRecentEntries()
AR : 2.1: return entries[]
AUD_ACTOR : 3: applyFilters(category, dateRange)
UI : 4: queryEntries(filters)
AR : 4.1: return filteredEntries[]
AUD_ACTOR : 5: selectEntryForDetail()
UI : 6: getEntryDetail(entryId)
AR : 6.1: return fullEntry
AUD_ACTOR : 7: *[for each flagged entry] reviewEntry()
AUD_ACTOR : 8: clickExportReport()
ES : 9: exportAuditReport(filters)
AS : 10: log("audit_trail_reviewed")
@enduml
```

**Description:** The Auditor interacts with the system through the Audit UI, which delegates to the Audit Repository for data retrieval. Message 7 uses the iteration marker (*) to indicate repeated review of flagged entries.

---

## 6. Department Budget Update

```plantuml
@startuml
object "Administrator" as ADM
object "Departments UI" as UI
object "Department Service" as DS
object "Department Repository" as DR
object "Alert Service" as AS
object "Audit Service" as AUD

ADM -- UI
UI -- DS
DS -- DR
DS -- AS
DS -- AUD

ADM : 1: selectDepartment()
UI : 2: getDepartment(deptId)
DR : 2.1: return department
ADM : 3: enterNewBudget(£75,000)
UI : 4: updateBudget(deptId, 75000)
DS : 5: validate(budget >= 0)
DS : 6: validate(budget >= currentSpent)
DS : 7: saveBudget(deptId, 75000)
DR : 7.1: return saved
DS : 8: recalculateUtilisation()
AS : 9: evaluateThreshold(deptId, 56%)
AUD : 10: log("budget_updated", "£50K→£75K")
UI : 11: displayConfirmation()
@enduml
```

**Description:** The Department Service validates the budget change (messages 5–6) before persisting it. The Alert Service re-evaluates thresholds against the new budget, and the Audit Service records the change with previous and new values.

---

## Notes on Collaboration Diagrams

- **Numbering convention:** Flat numbering (1, 2, 3...) indicates sequential execution. Nested numbering (3.1) indicates a return message or sub-step
- **Guard conditions** are shown in square brackets: `[condition]`
- **Iteration** is marked with an asterisk: `*[for each item]`
- Each diagram corresponds directly to a sequence diagram above, showing the same interactions from a structural perspective
- Collaboration diagrams are particularly useful for understanding which objects communicate directly with each other, revealing the coupling structure of the system
