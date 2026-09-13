import type { Certification, Honor } from "./types";

export const honors: Honor[] = [
  {
    title: "Gold Medalist",
    detail:
      "B.Tech Computer Science and Engineering, SRM University AP. CGPA 9.40. Rank 1 in the Big Data Analytics specialization.",
    year: 2025,
  },
  {
    title: "Amazon ML Summer School",
    detail:
      "Participant. Instructor-led sessions on machine learning, deep learning, generative AI and large language models.",
    year: 2024,
  },
  {
    title: "Founder's Scholarship",
    detail:
      "SRM Institute of Science and Technology. All India Rank 33 in SRMJEEE among more than 200,000 candidates.",
    year: 2021,
  },
];

export const certifications: Certification[] = [
  {
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    issued: "2024-08",
    verifyUrl:
      "https://cp.certmetrics.com/amazon/en/public/verify/credential/35915daf645c4d59ba17b16c365cfaf5",
  },
  {
    name: "PCAP, Certified Associate in Python Programming",
    issuer: "OpenEDG Python Institute",
    issued: "2023-07",
    verifyUrl: "https://verify.openedg.org/?id=8pCU.rLFC.JX4h",
  },
];
