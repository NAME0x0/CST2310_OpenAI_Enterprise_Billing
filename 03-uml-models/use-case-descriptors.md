# Use Case Descriptors

## OpenAI Enterprise Billing System — CST2310

---

## UC-01: Record API Usage

| Field | Detail |
|---|---|
| **Use Case ID** | UC-01 |
| **Use Case Name** | Record API Usage |
| **Brief Description** | The system automatically records an API usage event when a developer's application makes an API call, capturing model, tokens, cost, and metadata |
| **Primary Actor** | System (automated) |
| **Secondary Actors** | Developer (indirect — initiates the API call externally) |
| **Preconditions** | 1. The API key used is valid and active 2. The API key is associated with a department 3. The model catalogue contains the model used |
| **Postconditions (Success)** | 1. A usage record is persisted with all fields populated 2. The department's cumulative spend is updated 3. The project's spend is updated (if project is specified) 4. Budget utilisation is recalculated |
| **Postconditions (Failure)** | 1. No usage record is created 2. An error is logged in the audit trail 3. Department spend remains unchanged |

### Main Success Scenario

1. The developer's application sends an API request to OpenAI using a registered API key
2. OpenAI processes the request and returns a response with token usage metadata
3. The billing system receives the usage event (via webhook or polling)
4. The system validates the API key against the key registry
5. The system identifies the associated department and project
6. The system looks up the model in the catalogue to retrieve pricing (cost per 1K input, cost per 1K output)
7. The system calculates the cost: `(inputTokens / 1000 × costPer1kInput) + (outputTokens / 1000 × costPer1kOutput)`
8. The system creates a UsageRecord with: id, departmentId, model, tokens, cost, date, project, user
9. The system updates the department's cumulative spend (`spent += cost`)
10. The system updates the project's cumulative spend (if applicable)
11. The system checks if the department's spend has crossed a configured quota threshold
12. If a threshold is crossed, the system triggers UC-04 (Configure Quota Alert → Generate Alert)

### Alternative Flows

**A1: Unknown API Key (step 4)**
4a. The API key is not found in the registry
4b. The system logs a security alert (unrecognised key usage attempt)
4c. The usage record is created with departmentId = "unassigned"
4d. An audit entry is recorded with category "security"

**A2: Deprecated Model (step 6)**
6a. The model status is "deprecated" in the catalogue
6b. The system records the usage normally but flags the record with a deprecation warning
6c. An info-level alert is generated recommending migration to an active model

**A3: No Project Specified (step 10)**
10a. The API call does not include a project identifier
10b. The usage record is created with project = null
10c. The cost is attributed to the department's general spend

### Exception Flows

**E1: Usage Event Processing Failure**
- The system fails to process the usage event (e.g., database unavailable)
- The event is placed in a dead-letter queue for retry
- An audit entry is recorded with category "billing" and details of the failure
- The system retries processing up to 3 times with exponential backoff

### Business Rules

- BR-01: All costs must be calculated using the pricing in effect at the time of the API call
- BR-02: Usage records are immutable once created — they cannot be modified or deleted
- BR-03: Budget threshold alerts are evaluated after every usage record is processed

---

## UC-02: Manage Department Budget

| Field | Detail |
|---|---|
| **Use Case ID** | UC-02 |
| **Use Case Name** | Manage Department Budget |
| **Brief Description** | An administrator or finance officer creates or modifies a department's budget allocation, which controls quota alert thresholds |
| **Primary Actor** | Administrator |
| **Secondary Actors** | Finance Officer (approves changes), Department Manager (requests changes) |
| **Preconditions** | 1. The user is authenticated with Administrator or Finance Officer role 2. The department exists in the system |
| **Postconditions (Success)** | 1. The department's budget is updated 2. Quota thresholds are recalculated against the new budget 3. An audit entry records the change |
| **Postconditions (Failure)** | 1. The budget remains unchanged 2. The user is informed of the validation error |

### Main Success Scenario

1. The administrator navigates to the Departments page
2. The system displays all departments with current budget, spend, and utilisation percentage
3. The administrator selects a department to modify
4. The system displays the department detail view with edit capability
5. The administrator enters the new budget amount
6. The system validates: new budget ≥ 0 and is a valid currency amount
7. The system validates: new budget ≥ current spend (cannot set budget below already-spent amount)
8. The system updates the department's budget
9. The system recalculates utilisation percentage: `(spent / newBudget) × 100`
10. If the new utilisation exceeds a configured threshold, the system generates a quota alert
11. The system records an audit entry: action = "budget_updated", actor = administrator, target = department, details = "Budget changed from £X to £Y"
12. The system displays a confirmation message

### Alternative Flows

**A1: Department Manager Requests Budget Increase (step 1)**
1a. The Department Manager navigates to their department view
1b. The Manager clicks "Request Budget Increase"
1c. The Manager enters the requested amount and justification
1d. The system creates a pending budget request
1e. The Finance Officer receives a notification
1f. The Finance Officer reviews and approves or rejects the request
1g. If approved, the flow continues from step 8

**A2: Budget Reduction Below Threshold (step 10)**
10a. The new budget causes utilisation to exceed 100%
10b. The system generates a critical-level budget alert
10c. The system flags the department as "over budget" on the dashboard

### Exception Flows

**E1: Concurrent Modification**
- Another user modifies the same department's budget simultaneously
- The system detects the conflict via optimistic locking (version mismatch)
- The user is asked to refresh and retry

### Business Rules

- BR-04: Budget changes must be recorded with the previous and new values in the audit trail
- BR-05: Only users with Administrator or Finance Officer role can modify budgets
- BR-06: Budget amounts are stored in the system's configured currency

---

## UC-03: Rotate API Key

| Field | Detail |
|---|---|
| **Use Case ID** | UC-03 |
| **Use Case Name** | Rotate API Key |
| **Brief Description** | An administrator rotates an API key by atomically revoking the current key and generating a replacement with identical permissions |
| **Primary Actor** | Administrator |
| **Secondary Actors** | System (generates new key, records audit), Developer (notified of rotation) |
| **Preconditions** | 1. The API key exists and has status "active" 2. The user has Administrator role |
| **Postconditions (Success)** | 1. The old key status is set to "revoked" 2. A new key is generated with the same name, department, and permissions 3. The new key is displayed once in full (then masked) 4. An audit entry records the rotation 5. The developer is notified |
| **Postconditions (Failure)** | 1. The old key remains active 2. No new key is generated 3. The user is informed of the error |

### Main Success Scenario

1. The administrator navigates to the API Keys page
2. The system displays all API keys with masked values, status, department, and last-used timestamp
3. The administrator selects a key and clicks "Rotate"
4. The system displays a confirmation dialog: "Rotating this key will immediately revoke the current key. Applications using this key will need to be updated. Continue?"
5. The administrator confirms the rotation
6. The system generates a new API key with a unique identifier
7. The system copies the permissions from the old key to the new key
8. The system sets the old key's status to "revoked" and the new key's status to "active"
9. The system sets the new key's createdAt to the current timestamp
10. The system displays the new key in full (one-time display)
11. The system records an audit entry: action = "key_rotated", details = "Key [old-id] revoked, replaced by [new-id]"
12. The system sends a notification to the developer associated with the old key

### Alternative Flows

**A1: Emergency Rotation (compromised key)**
3a. The administrator selects "Emergency Rotate" (bypasses confirmation)
3b. The system immediately revokes the old key (step 8 first)
3c. The system generates the new key
3d. A security-level audit entry is recorded

**A2: Key Already Revoked (step 3)**
3a. The selected key's status is "revoked" or "expired"
3b. The system disables the Rotate button
3c. The system displays: "This key is already inactive and cannot be rotated"

### Exception Flows

**E1: Key Generation Failure**
- The system fails to generate a new key (e.g., cryptographic service unavailable)
- The old key is NOT revoked (atomic operation fails entirely)
- An error audit entry is recorded
- The administrator is informed to retry

### Business Rules

- BR-07: Key rotation must be atomic — either both revocation and creation succeed, or neither does
- BR-08: API keys must be rotated within 90 days of creation (IT security policy)
- BR-09: The full key value is displayed only once at creation/rotation time

---

## UC-04: Configure Quota Alert

| Field | Detail |
|---|---|
| **Use Case ID** | UC-04 |
| **Use Case Name** | Configure Quota Alert |
| **Brief Description** | An administrator or department manager configures the percentage threshold at which the system triggers a budget alert |
| **Primary Actor** | Administrator |
| **Secondary Actors** | Department Manager (for their own department), System (evaluates thresholds) |
| **Preconditions** | 1. The user is authenticated 2. The department exists with a budget > 0 |
| **Postconditions (Success)** | 1. The quota threshold is saved 2. The system immediately evaluates current spend against the new threshold 3. An audit entry records the configuration change |
| **Postconditions (Failure)** | 1. The threshold remains unchanged 2. The user is informed of the validation error |

### Main Success Scenario

1. The administrator navigates to Settings or Department detail page
2. The system displays the current quota threshold (default: 80%)
3. The administrator enters a new threshold percentage (e.g., 75%)
4. The system validates: threshold is between 1 and 100
5. The system saves the threshold
6. The system evaluates all departments against the new threshold
7. For any department where `(spent / budget) × 100 ≥ threshold`, the system generates a quota alert
8. The system records an audit entry: action = "quota_threshold_updated", details = "Changed from 80% to 75%"
9. The system displays a confirmation message

### Alternative Flows

**A1: Department-Specific Override**
2a. The Department Manager navigates to their department settings
2b. The Manager sets a department-specific threshold that overrides the global default
2c. The system records the override in the department record

**A2: Alert Already Exists**
7a. A quota alert already exists for a department at the previous threshold
7b. The system does not create a duplicate alert
7c. If the new threshold is higher than current utilisation, the existing alert is resolved

### Exception Flows

**E1: Invalid Threshold**
4a. The user enters a value outside 1–100 or a non-numeric value
4b. The system displays an inline validation error
4c. The threshold is not saved

### Business Rules

- BR-10: The global default threshold applies to all departments unless overridden
- BR-11: Threshold alerts are re-evaluated whenever a new usage record is processed or the threshold changes
- BR-12: Only one active quota alert per department at a time

---

## UC-05: Generate Compliance Report

| Field | Detail |
|---|---|
| **Use Case ID** | UC-05 |
| **Use Case Name** | Generate Compliance Report |
| **Brief Description** | A finance officer or auditor generates a compliance report covering usage, billing, and audit trail data for a specified period |
| **Primary Actor** | Finance Officer |
| **Secondary Actors** | Auditor (also triggers this UC), System (compiles data) |
| **Preconditions** | 1. The user has Finance Officer or Auditor role 2. Usage and audit data exists for the requested period |
| **Postconditions (Success)** | 1. A formatted report is generated and displayed 2. The report can be exported as CSV 3. An audit entry records the report generation |
| **Postconditions (Failure)** | 1. No report is generated 2. The user is informed of the error (e.g., no data for period) |

### Main Success Scenario

1. The finance officer navigates to the Reports page
2. The system displays report configuration options: date range, department filter, report type (monthly/quarterly/custom)
3. The finance officer selects a date range and department (or "All")
4. The finance officer clicks "Generate Report"
5. The system queries usage records for the specified period and filters
6. The system aggregates: total spend, spend by department, spend by model, token volumes, alert counts
7. The system retrieves audit trail entries for the period
8. The system compiles the data into a structured report view
9. The system displays the report with summary tables and trend charts
10. The finance officer optionally clicks "Export CSV"
11. The system generates a CSV file containing the raw data
12. An audit entry is recorded: action = "report_generated", details = "Compliance report for [date range]"

### Alternative Flows

**A1: No Data for Period**
6a. The query returns zero usage records
6b. The system displays: "No usage data found for the selected period"
6c. The report is generated with zero values and a note

**A2: Auditor Requests Report**
1a. The auditor navigates to the Audit page
1b. The auditor requests a compliance report from the audit trail view
1c. The report includes enhanced audit detail (all categories, all actors)

### Exception Flows

**E1: Export Timeout**
11a. The CSV export exceeds 30 seconds (large dataset)
11b. The system queues the export as a background task
11c. The user is notified when the export is ready for download

### Business Rules

- BR-13: Reports must include all data for the requested period without sampling or truncation
- BR-14: Report generation must itself be recorded in the audit trail
- BR-15: Financial figures in reports use the system's configured currency

---

## UC-06: Acknowledge Security Alert

| Field | Detail |
|---|---|
| **Use Case ID** | UC-06 |
| **Use Case Name** | Acknowledge Security Alert |
| **Brief Description** | An administrator or department manager reviews and acknowledges a security alert, recording the response in the audit trail |
| **Primary Actor** | Administrator |
| **Secondary Actors** | Department Manager (for their department's alerts), System (records acknowledgement) |
| **Preconditions** | 1. A security alert exists with acknowledged = false 2. The user has appropriate role |
| **Postconditions (Success)** | 1. The alert's acknowledged flag is set to true 2. An audit entry records who acknowledged the alert and when 3. The active alert count on the dashboard decreases |
| **Postconditions (Failure)** | 1. The alert remains unacknowledged 2. The escalation timer continues |

### Main Success Scenario

1. The administrator navigates to the Alerts page
2. The system displays unacknowledged alerts, sorted by severity (critical first)
3. The administrator selects a security alert
4. The system displays the alert detail: type, severity, title, message, timestamp, affected department
5. The administrator reviews the alert details
6. The administrator clicks "Acknowledge"
7. The system sets acknowledged = true on the alert
8. The system records an audit entry: action = "alert_acknowledged", actor = administrator, target = alert-id, category = "security"
9. The system updates the dashboard's active alert count
10. The system displays a confirmation message

### Alternative Flows

**A1: Alert Requires Immediate Action (step 5)**
5a. The alert indicates a compromised API key
5b. The administrator clicks "Acknowledge & Rotate Key"
5c. The system acknowledges the alert AND initiates UC-03 (Rotate API Key) for the affected key
5d. Both actions are recorded in the audit trail

**A2: Department Manager Acknowledges (step 1)**
1a. The Department Manager views alerts filtered to their department
1b. The Manager can only acknowledge alerts with severity "info" or "warning"
1c. Critical alerts require Administrator acknowledgement

### Exception Flows

**E1: Alert Already Acknowledged**
6a. Another user acknowledged the alert concurrently
6b. The system detects the conflict
6c. The system displays: "This alert was already acknowledged by [actor] at [timestamp]"

### Business Rules

- BR-16: Critical security alerts must be acknowledged within 24 hours or they are escalated to the system administrator's email
- BR-17: Acknowledgement does not delete the alert — it remains in the system for audit purposes
- BR-18: Only the assigned department's manager or an administrator can acknowledge department-specific alerts
