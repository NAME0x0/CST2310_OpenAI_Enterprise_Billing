# Use Case Diagrams

## OpenAI Enterprise Billing System — CST2310

---

## 1. Billing and Usage Management

This use case diagram covers the core billing and usage tracking functionality of the system.

```plantuml
@startuml
left to right direction
skinparam packageStyle rectangle

actor "Department Manager" as DM
actor "Finance Officer" as FO
actor "System" as SYS

rectangle "Billing & Usage Management" {
  usecase "View Dashboard" as UC1
  usecase "View Usage Records" as UC2
  usecase "Filter Usage by Department" as UC3
  usecase "Filter Usage by Model" as UC4
  usecase "Filter Usage by Date Range" as UC5
  usecase "View Department Spend" as UC6
  usecase "Compare Department Costs" as UC7
  usecase "Record API Usage" as UC8
  usecase "Calculate Cost" as UC9
  usecase "Update Budget Utilisation" as UC10
}

DM --> UC1
DM --> UC2
DM --> UC6
FO --> UC1
FO --> UC2
FO --> UC7
SYS --> UC8
SYS --> UC9
SYS --> UC10

UC2 ..> UC3 : <<extend>>
UC2 ..> UC4 : <<extend>>
UC2 ..> UC5 : <<extend>>
UC8 ..> UC9 : <<include>>
UC9 ..> UC10 : <<include>>
@enduml
```

**Description:** The Department Manager and Finance Officer access the dashboard to monitor spend and usage. The System actor automatically records API usage events, calculates costs using the model pricing catalogue, and updates budget utilisation. Filtering capabilities extend the usage viewing use case.

---

## 2. API Key Lifecycle Management

This diagram covers the complete lifecycle of API keys from creation through revocation.

```plantuml
@startuml
left to right direction
skinparam packageStyle rectangle

actor "Administrator" as ADM
actor "Developer" as DEV
actor "System" as SYS

rectangle "API Key Lifecycle Management" {
  usecase "Create API Key" as UC1
  usecase "Assign Permissions" as UC2
  usecase "View API Keys" as UC3
  usecase "Rotate API Key" as UC4
  usecase "Revoke API Key" as UC5
  usecase "Track Key Usage" as UC6
  usecase "Generate Masked Display" as UC7
  usecase "Record Audit Entry" as UC8
  usecase "Check Key Expiry" as UC9
  usecase "Send Rotation Reminder" as UC10
}

ADM --> UC1
ADM --> UC4
ADM --> UC5
DEV --> UC1
DEV --> UC3
SYS --> UC6
SYS --> UC9

UC1 ..> UC2 : <<include>>
UC1 ..> UC8 : <<include>>
UC3 ..> UC7 : <<include>>
UC4 ..> UC5 : <<include>>
UC4 ..> UC1 : <<include>>
UC4 ..> UC8 : <<include>>
UC5 ..> UC8 : <<include>>
UC9 ..> UC10 : <<extend>>
@enduml
```

**Description:** Administrators and Developers can create API keys (which includes assigning permissions). Administrators can rotate keys (which atomically revokes the old key and creates a new one) and revoke compromised keys. All key lifecycle events are recorded in the audit trail. The System monitors key expiry and sends rotation reminders.

---

## 3. Alert and Notification System

This diagram covers the alert lifecycle from configuration through acknowledgement.

```plantuml
@startuml
left to right direction
skinparam packageStyle rectangle

actor "Administrator" as ADM
actor "Department Manager" as DM
actor "System" as SYS

rectangle "Alert & Notification System" {
  usecase "Configure Quota Threshold" as UC1
  usecase "Set Alert Email" as UC2
  usecase "Detect Quota Breach" as UC3
  usecase "Detect Usage Anomaly" as UC4
  usecase "Detect Security Event" as UC5
  usecase "Generate Alert" as UC6
  usecase "Send Notification" as UC7
  usecase "View Alerts" as UC8
  usecase "Filter Alerts" as UC9
  usecase "Acknowledge Alert" as UC10
  usecase "Escalate Unacknowledged Alert" as UC11
}

ADM --> UC1
ADM --> UC2
ADM --> UC10
DM --> UC8
DM --> UC10
SYS --> UC3
SYS --> UC4
SYS --> UC5
SYS --> UC11

UC3 ..> UC6 : <<include>>
UC4 ..> UC6 : <<include>>
UC5 ..> UC6 : <<include>>
UC6 ..> UC7 : <<include>>
UC8 ..> UC9 : <<extend>>
UC10 ..> UC6 : <<include>>
UC11 ..> UC7 : <<extend>>
@enduml
```

**Description:** The System automatically detects quota breaches, usage anomalies, and security events, generating alerts with appropriate severity levels. Administrators configure thresholds and notification preferences. Department Managers and Administrators can view, filter, and acknowledge alerts. Unacknowledged critical alerts are escalated.

---

## 4. Reporting and Audit Compliance

This diagram covers report generation and audit trail management.

```plantuml
@startuml
left to right direction
skinparam packageStyle rectangle

actor "Finance Officer" as FO
actor "Auditor" as AUD
actor "Administrator" as ADM
actor "System" as SYS

rectangle "Reporting & Audit Compliance" {
  usecase "Generate Monthly Report" as UC1
  usecase "Generate Ad-Hoc Report" as UC2
  usecase "Export Data as CSV" as UC3
  usecase "View Audit Trail" as UC4
  usecase "Filter Audit Entries" as UC5
  usecase "Search Audit by Actor" as UC6
  usecase "Record Audit Entry" as UC7
  usecase "Generate Compliance Report" as UC8
  usecase "View Energy Metrics" as UC9
  usecase "Calculate Sustainability KPIs" as UC10
}

FO --> UC1
FO --> UC2
FO --> UC3
AUD --> UC4
AUD --> UC8
ADM --> UC9
SYS --> UC7
SYS --> UC10

UC1 ..> UC3 : <<extend>>
UC2 ..> UC3 : <<extend>>
UC4 ..> UC5 : <<extend>>
UC4 ..> UC6 : <<extend>>
UC8 ..> UC4 : <<include>>
UC9 ..> UC10 : <<include>>
@enduml
```

**Description:** Finance Officers generate monthly and ad-hoc reports with optional CSV export. Auditors review the audit trail using filters and search, and can generate compliance reports that include audit trail data. The System records all audit entries and computes sustainability KPIs.

---

## 5. Department and Project Management

This diagram covers organisational structure and budget management.

```plantuml
@startuml
left to right direction
skinparam packageStyle rectangle

actor "Administrator" as ADM
actor "Department Manager" as DM
actor "Finance Officer" as FO

rectangle "Department & Project Management" {
  usecase "Create Department" as UC1
  usecase "Set Department Budget" as UC2
  usecase "Assign Cost Centre" as UC3
  usecase "View Department Details" as UC4
  usecase "Create Project" as UC5
  usecase "Set Project Budget" as UC6
  usecase "Update Project Status" as UC7
  usecase "View Project Spend" as UC8
  usecase "Request Budget Increase" as UC9
  usecase "Approve Budget Change" as UC10
}

ADM --> UC1
ADM --> UC2
ADM --> UC3
DM --> UC4
DM --> UC5
DM --> UC7
DM --> UC9
FO --> UC10
FO --> UC4

UC1 ..> UC2 : <<include>>
UC1 ..> UC3 : <<include>>
UC5 ..> UC6 : <<include>>
UC7 ..> UC8 : <<include>>
@enduml
```

**Description:** Administrators create departments with budgets and cost centre assignments. Department Managers create projects within their department, manage project status, and request budget increases. Finance Officers approve budget changes and review department details.

---

## 6. System Administration and Settings

This diagram covers system-wide configuration and administration.

```plantuml
@startuml
left to right direction
skinparam packageStyle rectangle

actor "Administrator" as ADM
actor "System" as SYS

rectangle "System Administration & Settings" {
  usecase "Configure Quota Threshold Default" as UC1
  usecase "Set Alert Email Recipients" as UC2
  usecase "Change Display Currency" as UC3
  usecase "Manage User Roles" as UC4
  usecase "View System Health" as UC5
  usecase "Configure Energy Factors" as UC6
  usecase "Manage Model Catalogue" as UC7
  usecase "Add New Model" as UC8
  usecase "Deprecate Model" as UC9
  usecase "Restrict Model Access" as UC10
}

ADM --> UC1
ADM --> UC2
ADM --> UC3
ADM --> UC4
ADM --> UC5
ADM --> UC6
ADM --> UC7
SYS --> UC5

UC7 ..> UC8 : <<extend>>
UC7 ..> UC9 : <<extend>>
UC7 ..> UC10 : <<extend>>
@enduml
```

**Description:** The Administrator has exclusive access to system configuration, including quota thresholds, email notifications, display currency, user role management, energy calculation factors, and the AI model catalogue. Model management extends to adding, deprecating, and restricting model access.
