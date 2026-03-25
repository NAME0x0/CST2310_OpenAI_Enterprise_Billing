# Activity Diagrams

## OpenAI Enterprise Billing System — CST2310

---

## 1. API Usage Recording and Billing Process

```plantuml
@startuml
|Developer|
start
:Make API call to OpenAI;

|OpenAI API|
:Process request;
:Return response with token metadata;

|Billing System|
:Receive usage event;
:Validate API key;

if (Key valid?) then (yes)
  :Look up department and project;
  :Retrieve model pricing;
  :Calculate cost;
  :Create UsageRecord;
  :Update department spend;

  if (Project specified?) then (yes)
    :Update project spend;
  else (no)
    :Attribute to general spend;
  endif

  :Check quota threshold;

  if (Threshold breached?) then (yes)
    :Generate quota alert;
    :Send notification;
  else (no)
  endif

  :Record audit entry;
else (no)
  :Log security alert;
  :Record as unassigned usage;
endif

stop
@enduml
```

**Description:** This activity diagram traces the end-to-end flow from a developer making an API call through to the billing system recording the usage, calculating costs, updating department and project spend, and checking quota thresholds. The swim lanes separate responsibilities across the Developer, OpenAI API, and the Billing System.

---

## 2. API Key Rotation Workflow

```plantuml
@startuml
|Administrator|
start
:Navigate to API Keys page;
:Select key to rotate;
:Choose rotation type;

if (Emergency rotation?) then (yes)
  |System|
  :Immediately revoke old key;
  :Generate new key with same permissions;
  :Record security audit entry;
else (no)
  |System|
  :Display confirmation dialog;
  |Administrator|
  if (Confirm?) then (yes)
    |System|
    :Generate new key;
    :Copy permissions from old key;
    :Revoke old key;
    :Record audit entry;
  else (no)
    stop
  endif
endif

|System|
:Display new key (one-time);
:Send notification to developer;
:Update key registry;

|Administrator|
:Copy new key;
:Distribute to development team;

stop
@enduml
```

**Description:** This diagram shows the API key rotation workflow with a decision point for emergency vs. standard rotation. Emergency rotations bypass the confirmation step. Both paths converge at key generation and notification.

---

## 3. Budget Overspend Alert Handling

```plantuml
@startuml
|System|
start
:Process new usage record;
:Calculate department utilisation;

if (Utilisation ≥ threshold?) then (yes)
  :Determine alert severity;

  if (Utilisation ≥ 100%) then (critical)
    :Create CRITICAL alert;
  elseif (Utilisation ≥ 90%) then (warning)
    :Create WARNING alert;
  else (info)
    :Create INFO alert;
  endif

  :Send email notification;
  :Update dashboard alert count;
  :Start escalation timer (24h);

  |Department Manager|
  :Receive alert notification;
  :Review alert details;
  :Investigate usage patterns;

  if (Action required?) then (yes)
    :Request budget increase;
    fork
      :Acknowledge alert;
    fork again
      |Finance Officer|
      :Review budget request;
      if (Approve?) then (yes)
        :Update department budget;
        :Record audit entry;
      else (no)
        :Reject with reason;
      endif
    end fork
  else (no)
    :Acknowledge alert;
  endif

else (no)
  :No action required;
endif

stop
@enduml
```

**Description:** This diagram models the complete alert handling flow from detection through resolution. The System determines severity based on utilisation percentage. The Department Manager investigates and may acknowledge the alert or request a budget increase, which the Finance Officer must approve.

---

## 4. Monthly Compliance Audit Process

```plantuml
@startuml
|Finance Officer|
start
:Navigate to Reports page;
:Select report period (month);
:Select departments (all or specific);
:Click Generate Report;

|System|
:Query usage records for period;
:Aggregate spend by department;
:Aggregate spend by model;
:Calculate token volumes;
:Retrieve audit trail for period;
:Compile report data;
:Generate report view;

|Finance Officer|
:Review report summary;
:Check for anomalies;

if (Anomalies found?) then (yes)
  :Flag anomalies for investigation;
  :Add notes to report;
endif

:Export report as CSV;

|System|
:Generate CSV file;
:Record audit entry (report generated);

|Auditor|
:Receive compliance report;
:Review audit trail entries;
:Verify access controls;
:Cross-reference with financial records;

if (Compliant?) then (yes)
  :Sign off audit;
else (no)
  :Raise compliance issue;
  :Notify administrator;
endif

stop
@enduml
```

**Description:** This diagram shows the monthly audit process spanning Finance Officer, System, and Auditor. The Finance Officer generates the report, reviews for anomalies, and exports it. The Auditor then conducts a compliance review against the audit trail.

---

## 5. Department Onboarding Process

```plantuml
@startuml
|Administrator|
start
:Receive new department request;
:Navigate to Departments page;
:Enter department details;
note right: name, headcount, cost centre
:Set initial budget;

|System|
:Create department record;
:Generate department ID;
:Record audit entry;

|Administrator|
:Create user accounts for department;
:Assign Department Manager role;
:Assign Developer roles;

|System|
:Send welcome emails;
:Set up quota threshold (default);

|Department Manager|
:Log in for first time;
:Review department settings;
:Create initial project;

|Administrator|
:Create initial API key(s);

|System|
:Display key (one-time);
:Record key creation audit entry;

|Department Manager|
:Distribute API key to developers;
:Begin using OpenAI services;

stop
@enduml
```

**Description:** This diagram models the onboarding of a new department, from initial request through department creation, user account setup, project creation, and API key provisioning.

---

## 6. Anomaly Detection and Response

```plantuml
@startuml
|System|
start
:Analyse usage patterns (hourly);
:Calculate baseline metrics;
:Compare current usage to baseline;

if (Anomaly detected?) then (yes)
  :Classify anomaly type;

  if (Security anomaly?) then (yes)
    :Create CRITICAL security alert;
    :Flag suspected API key;

    |Administrator|
    :Receive urgent notification;
    :Review flagged key usage;

    if (Key compromised?) then (yes)
      :Emergency rotate key;
      :Investigate breach;
      :Document incident;
    else (no)
      :Mark as false positive;
      :Acknowledge alert;
    endif

  else (usage anomaly)
    |System|
    :Create WARNING anomaly alert;

    |Department Manager|
    :Receive notification;
    :Review usage spike;

    if (Legitimate usage?) then (yes)
      :Acknowledge alert;
      :Update baseline;
    else (no)
      :Investigate cause;
      :Take corrective action;
      :Acknowledge alert;
    endif
  endif

else (no)
  :Update baseline metrics;
endif

|System|
:Record all actions in audit trail;

stop
@enduml
```

**Description:** This diagram shows the automated anomaly detection process, distinguishing between security anomalies (potential key compromise, handled by Administrator) and usage anomalies (unexpected spending patterns, handled by Department Manager). Both paths include investigation, response, and audit trail recording.
