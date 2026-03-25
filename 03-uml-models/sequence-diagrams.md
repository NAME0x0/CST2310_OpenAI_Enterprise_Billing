# Sequence Diagrams

## OpenAI Enterprise Billing System — CST2310

---

## 1. API Call → Usage Recorded → Budget Checked

```plantuml
@startuml
actor Developer as DEV
participant "Client App" as APP
participant "OpenAI API" as OAPI
participant "Billing Service" as BS
participant "Usage Repository" as UR
participant "Department Service" as DS
participant "Alert Service" as AS
participant "Audit Service" as AUD

DEV -> APP : Trigger API request
APP -> OAPI : POST /v1/chat/completions\n(API key, model, messages)
activate OAPI
OAPI --> APP : 200 OK\n(response, usage: {input_tokens, output_tokens})
deactivate OAPI

APP -> BS : reportUsage(apiKey, model,\ninputTokens, outputTokens)
activate BS
BS -> BS : validateApiKey(apiKey)
BS -> BS : lookupModelPricing(model)
BS -> BS : calculateCost()
note right: cost = (input/1000 × rate_in)\n+ (output/1000 × rate_out)

BS -> UR : save(usageRecord)
activate UR
UR --> BS : recordId
deactivate UR

BS -> DS : addSpend(departmentId, cost)
activate DS
DS -> DS : updateBudgetUtilisation()
DS --> BS : utilisation: 87%
deactivate DS

alt utilisation >= threshold
  BS -> AS : checkThreshold(departmentId, utilisation)
  activate AS
  AS -> AS : createAlert(QUOTA, WARNING)
  AS --> BS : alertCreated
  deactivate AS
end

BS -> AUD : log("usage_recorded", details)
activate AUD
AUD --> BS : logged
deactivate AUD

BS --> APP : 200 OK (recorded)
deactivate BS
@enduml
```

**Description:** This sequence diagram traces the complete flow from a developer's API call through billing, cost calculation, department spend update, and conditional alert generation. The `alt` fragment models the conditional quota threshold check.

---

## 2. Finance Officer Generates Monthly Report

```plantuml
@startuml
actor "Finance Officer" as FO
participant "Reports UI" as UI
participant "Report Service" as RS
participant "Usage Repository" as UR
participant "Department Service" as DS
participant "Audit Repository" as AR
participant "Export Service" as ES
participant "Audit Service" as AUD

FO -> UI : Navigate to Reports
UI -> RS : getReportConfig()
RS --> UI : display filters\n(dateRange, departments, type)

FO -> UI : Select period, departments
FO -> UI : Click "Generate Report"
UI -> RS : generateReport(dateFrom, dateTo, deptFilter)
activate RS

RS -> UR : getUsageByPeriod(dateFrom, dateTo, deptFilter)
activate UR
UR --> RS : usageRecords[]
deactivate UR

RS -> DS : getDepartmentSummaries(deptFilter)
activate DS
DS --> RS : departmentData[]
deactivate DS

RS -> AR : getAuditEntries(dateFrom, dateTo)
activate AR
AR --> RS : auditEntries[]
deactivate AR

RS -> RS : aggregateSpendByDept()
RS -> RS : aggregateSpendByModel()
RS -> RS : calculateTokenVolumes()
RS -> RS : compileReport()

RS --> UI : reportData
deactivate RS

UI --> FO : Display report\n(tables, charts)

opt Export requested
  FO -> UI : Click "Export CSV"
  UI -> ES : exportAsCSV(reportData)
  activate ES
  ES --> UI : csvFile
  deactivate ES
  UI --> FO : Download CSV
end

UI -> AUD : log("report_generated",\n"Monthly report for [period]")
@enduml
```

**Description:** The Finance Officer generates a monthly report. The sequence shows data retrieval from multiple repositories, aggregation, and optional CSV export. The `opt` fragment represents the conditional export step.

---

## 3. Administrator Rotates Compromised API Key

```plantuml
@startuml
actor Administrator as ADM
participant "API Keys UI" as UI
participant "Key Service" as KS
participant "Key Repository" as KR
participant "Notification Service" as NS
participant "Audit Service" as AUD

ADM -> UI : Navigate to API Keys
UI -> KR : getActiveKeys()
KR --> UI : apiKeys[]
UI --> ADM : Display keys (masked)

ADM -> UI : Select compromised key
ADM -> UI : Click "Emergency Rotate"

UI -> KS : emergencyRotate(keyId)
activate KS

KS -> KR : getKey(keyId)
activate KR
KR --> KS : existingKey
deactivate KR

KS -> KR : revokeKey(keyId)
activate KR
KR --> KS : revoked
deactivate KR

KS -> KS : generateNewKey()
KS -> KS : copyPermissions(existingKey)

KS -> KR : saveKey(newKey)
activate KR
KR --> KS : saved
deactivate KR

KS -> AUD : log("key_rotated",\n"EMERGENCY: Key [old] revoked,\nreplaced by [new]",\ncategory: SECURITY)
activate AUD
AUD --> KS : logged
deactivate AUD

KS -> NS : notifyKeyRotation(developer, keyId)
activate NS
NS --> KS : sent
deactivate NS

KS --> UI : newKey (full value, one-time)
deactivate KS

UI --> ADM : Display new key\n"Copy this key now.\nIt will not be shown again."

ADM -> UI : Copy key
UI -> UI : Clear key from display
@enduml
```

**Description:** This diagram models emergency API key rotation. The key is revoked immediately, a new key is generated with the same permissions, and the developer is notified. The full key value is shown once.

---

## 4. System Detects Quota Threshold → Sends Alert → Manager Acknowledges

```plantuml
@startuml
participant "Billing Service" as BS
participant "Department Service" as DS
participant "Alert Service" as AS
participant "Alert Repository" as AR
participant "Notification Service" as NS
participant "Audit Service" as AUD
actor "Department Manager" as DM
participant "Alerts UI" as UI

BS -> DS : getUtilisation(departmentId)
activate DS
DS --> BS : utilisation: 92%
deactivate DS

BS -> AS : evaluateThreshold(departmentId, 92%)
activate AS

AS -> AS : determineServerity(92%)
note right: 80-89% = INFO\n90-99% = WARNING\n≥100% = CRITICAL

AS -> AR : createAlert(type: QUOTA,\nseverity: WARNING,\nmessage: "92% of budget used")
activate AR
AR --> AS : alertId
deactivate AR

AS -> NS : sendAlert(alertEmail, alert)
activate NS
NS --> AS : sent
deactivate NS

AS -> AS : startEscalationTimer(24h)
AS --> BS : alertCreated
deactivate AS

... 2 hours later ...

DM -> UI : Navigate to Alerts
UI -> AR : getUnacknowledgedAlerts(departmentId)
AR --> UI : alerts[]
UI --> DM : Display alerts\n(WARNING: 92% budget used)

DM -> UI : Click "Acknowledge"
UI -> AS : acknowledgeAlert(alertId, managerId)
activate AS
AS -> AR : updateAlert(alertId,\nacknowledged: true)
AR --> AS : updated
AS -> AS : cancelEscalationTimer()

AS -> AUD : log("alert_acknowledged",\nactor: manager,\ntarget: alertId)
activate AUD
AUD --> AS : logged
deactivate AUD

AS --> UI : acknowledged
deactivate AS
UI --> DM : "Alert acknowledged"
@enduml
```

**Description:** This diagram shows the complete alert lifecycle: the Billing Service detects a threshold breach, the Alert Service generates and sends the alert, and the Department Manager later acknowledges it. The escalation timer is cancelled upon acknowledgement.

---

## 5. Auditor Reviews Audit Trail

```plantuml
@startuml
actor Auditor as AUD_ACTOR
participant "Audit UI" as UI
participant "Audit Service" as AS
participant "Audit Repository" as AR
participant "Export Service" as ES
participant "Audit Service" as AUD_LOG

AUD_ACTOR -> UI : Navigate to Audit Trail
UI -> AR : getRecentEntries(limit: 100)
AR --> UI : auditEntries[]
UI --> AUD_ACTOR : Display audit log

AUD_ACTOR -> UI : Apply filters\n(category: SECURITY,\ndateRange: last 30 days)
UI -> AR : queryEntries(filters)
AR --> UI : filteredEntries[]
UI --> AUD_ACTOR : Display filtered results

AUD_ACTOR -> UI : Select entry for detail
UI -> AR : getEntryDetail(entryId)
AR --> UI : fullEntry
UI --> AUD_ACTOR : Display full details\n(action, actor, target,\ntimestamp, details)

loop Review each flagged entry
  AUD_ACTOR -> UI : Expand entry
  AUD_ACTOR -> AUD_ACTOR : Assess compliance
  AUD_ACTOR -> UI : Add audit note
end

AUD_ACTOR -> UI : Click "Export Audit Report"
UI -> ES : exportAuditReport(filters, notes)
activate ES
ES --> UI : reportFile
deactivate ES

UI -> AUD_LOG : log("audit_trail_reviewed",\nactor: auditor)
UI --> AUD_ACTOR : Download report
@enduml
```

**Description:** The Auditor reviews the audit trail by querying, filtering, and examining individual entries. A `loop` fragment models the iterative review of flagged entries. The reviewed data can be exported as an audit report.

---

## 6. Administrator Updates Department Budget

```plantuml
@startuml
actor Administrator as ADM
participant "Departments UI" as UI
participant "Department Service" as DS
participant "Department Repository" as DR
participant "Alert Service" as AS
participant "Audit Service" as AUD

ADM -> UI : Navigate to Departments
UI -> DR : getAllDepartments()
DR --> UI : departments[]
UI --> ADM : Display department list

ADM -> UI : Select department
UI -> DR : getDepartment(deptId)
DR --> UI : department\n(budget: £50,000, spent: £42,000)
UI --> ADM : Display department detail

ADM -> UI : Click "Edit Budget"
ADM -> UI : Enter new budget: £75,000
UI -> DS : updateBudget(deptId, 75000)
activate DS

DS -> DS : validate(newBudget >= 0)
DS -> DS : validate(newBudget >= currentSpent)

alt Validation passes
  DS -> DR : saveBudget(deptId, 75000)
  activate DR
  DR --> DS : saved
  deactivate DR

  DS -> DS : recalculateUtilisation()
  note right: 42000/75000 = 56%

  DS -> AS : evaluateThreshold(deptId, 56%)
  activate AS
  AS --> DS : no alert needed
  deactivate AS

  DS -> AUD : log("budget_updated",\n"£50,000 → £75,000",\ncategory: BILLING)
  activate AUD
  AUD --> DS : logged
  deactivate AUD

  DS --> UI : success
  UI --> ADM : "Budget updated to £75,000\nUtilisation: 56%"

else Validation fails
  DS --> UI : error("New budget cannot be\nless than current spend")
  UI --> ADM : Display validation error
end
deactivate DS
@enduml
```

**Description:** The Administrator updates a department's budget. The sequence includes validation (budget cannot be negative or below current spend), utilisation recalculation, threshold re-evaluation, and audit logging. The `alt` fragment handles validation success and failure.
