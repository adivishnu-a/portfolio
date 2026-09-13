import type { Education, Role } from "./types";

export const roles: Role[] = [
  {
    role: "Software Development Engineer (SDE-1)",
    org: "Darwinbox",
    orgUrl: "https://darwinbox.com",
    team: "Core Engineering",
    location: "Hyderabad, India",
    start: "2025-07",
    end: "2026-08",
    bullets: [
      "Drove the multi-phase migration of the audit trail system to a dedicated microservice across 65+ entity models over three releases, with no disruption to production audit coverage.",
      "Refactored the location provisioning pipeline from a scheduled CRON job to real-time, event-driven creation, removing a bottleneck that implementation teams hit on every rollout.",
      "Contributed to the design and delivery of Effective Date History, enabling point-in-time snapshots of employee data.",
      "Designed and delivered an automated Template Permission Role system for tenant-level HR access control across organisational hierarchies.",
      "Diagnosed and resolved defects across the bulk data import modules for employee and organisational record ingestion.",
      "Implemented Multi-Language Framework support to close gaps in i18n coverage for multilingual enterprise deployments.",
    ],
  },
  {
    role: "Product Development Intern",
    org: "Darwinbox",
    orgUrl: "https://darwinbox.com",
    team: "Core Engineering",
    location: "Hyderabad, India",
    start: "2025-01",
    end: "2025-06",
    bullets: [
      "Built a simulation framework in Next.js for custom automation workflows, so teams could preview workflow behaviour against production-equivalent configuration before going live.",
    ],
  },
  {
    role: "Associate",
    org: "McCarthy Lab, Next Tech Lab",
    orgUrl: "https://www.nexttechlabap.in/",
    location: "SRM University AP",
    start: "2023-02",
    end: "2024-03",
    bullets: [
      "Research and development on machine learning applications and web technologies.",
    ],
  },
];

export const education: Education[] = [
  {
    degree:
      "B.Tech, Computer Science and Engineering (Big Data Analytics specialization)",
    school: "SRM University AP",
    location: "Amaravati, India",
    start: "2021",
    end: "2025",
    details: ["Gold Medalist", "CGPA 9.40 of 10", "Rank 1 in specialization"],
  },
];
