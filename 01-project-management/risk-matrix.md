# Risk Matrix

## OpenAI Enterprise Billing System — CST2310

**Version:** 1.0
**Date:** [Week 7 Date]
**Last Updated:** [Date]

---

## Risk Assessment Matrix

| Risk ID | Risk Description | Likelihood | Impact | Risk Level | Mitigation Strategy | Contingency Plan | Owner |
|---|---|---|---|---|---|---|---|
| R1 | A team member fails to complete allocated UML diagrams on time | Medium | High | **High** | Weekly task review at formal meetings; early escalation; workload redistribution if needed | Remaining members split the incomplete diagrams; prioritise sequence and activity diagrams (higher marks) | Afsah |
| R2 | Inconsistency between UML diagram types (e.g., class diagram does not match sequence diagram entities) | High | High | **High** | Cross-reference all diagrams during elaboration; peer review each diagram against the class diagram before finalising | Conduct a full consistency audit in Week 11; update all diagrams in a single pass | Syed |
| R3 | Scope creep — attempting to model the entire OpenAI platform rather than the billing subsystem | Medium | Medium | **Medium** | Define system boundary clearly in the case study narrative; all use cases must trace back to functional requirements | Revisit scope with tutor; trim use cases to the 4–6 required; remove peripheral actors | Afsah |
| R4 | UML tool or PlantUML rendering issues prevent diagram completion | Low | Medium | **Low** | Use PlantUML in Markdown for version control; test rendering early in Week 9; maintain fallback diagrams.net files | Switch to diagrams.net or Lucidchart for affected diagrams; export as PNG for report | Jake |
| R5 | Group scheduling conflicts reduce meeting attendance | High | Low | **Medium** | Agree all meeting times in Week 7; use shared calendar; virtual meetings as backup | Record decisions asynchronously via GitHub Issues; absent members provide written updates before meeting | All |
| R6 | Insufficient depth in use case descriptors (marking criterion: 10 marks) | Medium | High | **High** | Follow the fully dressed format from lecture slides; include main success scenario, alternatives, exceptions, and business rules for each UC | Have tutor review one descriptor in Week 9 for feedback; revise remaining descriptors based on feedback | Syed |
| R7 | GDPR/law section is too generic and not specific to the billing system | Medium | Medium | **Medium** | Map each GDPR principle to specific system data flows (e.g., usage records containing user IDs, API key metadata); cite specific UK GDPR articles | Review the sample report's law section for depth expectations; add concrete examples from the case study | Syed |
| R8 | Nielsen's Heuristics evaluation is superficial (affects UI design marks) | Medium | Medium | **Medium** | Evaluate each of the 10 heuristics individually per UI design with specific examples; reference Nielsen (1994) | Reduce to 4 UIs but increase heuristic analysis depth per UI | Afsah |
| R9 | Report exceeds recommended page count or is poorly formatted | Medium | Medium | **Medium** | Track page count from Week 11; use pandoc for consistent formatting; appendices for supplementary material | Move detailed UML source code to appendices; keep only rendered diagrams and explanations in main body | Afsah |
| R10 | Collaboration diagrams omitted or confused with sequence diagrams | Medium | High | **High** | Ensure team understands the distinction: collaboration diagrams show structural relationships with numbered messages, not lifeline-based temporal ordering | Create collaboration diagrams directly from sequence diagrams by re-expressing the same interactions in object-link notation | Eeshita |

---

## Risk Level Definitions

| Risk Level | Definition | Response |
|---|---|---|
| **High** | Likely to occur and/or would significantly affect marks or delivery | Active mitigation required; monitor weekly; escalate to tutor if unresolved |
| **Medium** | Possible occurrence with moderate impact on quality or schedule | Mitigation plan in place; review at each meeting |
| **Low** | Unlikely or minor impact | Accept risk; no active mitigation needed |

---

## Likelihood × Impact Matrix

|  | **Low Impact** | **Medium Impact** | **High Impact** |
|---|---|---|---|
| **High Likelihood** | Medium | **Medium** | **High** |
| **Medium Likelihood** | Low | **Medium** | **High** |
| **Low Likelihood** | Low | **Low** | Medium |

---

## Risk Review Schedule

| Week | Review Focus |
|---|---|
| Week 7 | Initial risk identification and assessment (this document) |
| Week 8 | Review PM artefact completion; check for R3 (scope creep) |
| Week 9 | Review UML tool readiness (R4); check requirements completeness |
| Week 10 | Review diagram consistency (R2); check use case descriptor depth (R6) |
| Week 11 | Review all UML completeness (R10); check law & ethics specificity (R7) |
| Week 12 | Review report formatting (R9); final consistency audit (R2) |

---

## Notes

- This risk matrix should be reviewed and updated at each formal weekly meeting
- New risks should be added as they are identified
- Closed risks should be marked as resolved with the date and resolution
- Include this risk matrix in the PM chapter of the final report with a brief narrative explaining how risks were managed throughout the project
