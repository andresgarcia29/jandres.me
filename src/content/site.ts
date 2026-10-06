export const person = {
  name: "Andrés García",
  role: "Senior SRE / Platform Engineer",
  location: "Guadalajara, MX (UTC-6)",
  experience: "9+ years",
  status: "Available — remote SRE / Platform roles",
  email: "jose.andres.gm29@gmail.com",
  github: "https://github.com/andresgarcia29",
  linkedin: "https://www.linkedin.com/in/andres-garcia-sre",
  cv: "/cv.pdf",
};

export const meta = {
  title: "Andrés García — Senior SRE / Platform Engineer",
  description:
    "Senior SRE / Platform Engineer with 9+ years. Live streaming for 20–30M concurrent viewers, a banking core at 99.99%, platforms built from scratch. Open to remote roles.",
};

export const projects = [
  {
    repo: "ark-cli",
    pitch:
      "One AWS SSO login → every EKS cluster across all your accounts and regions in your kubeconfig, in seconds. Scans in parallel, writes kubeconfig natively, retries AWS throttling with backoff.",
    install: "brew tap andresgarcia29/agm && brew install ark --cask",
    media: { src: "/ark-demo.gif", poster: "/ark-demo.png", alt: "ark k8s filtering clusters and switching context", width: 1100, height: 380 },
  },
  {
    repo: "harness-creator",
    pitch:
      "Claude Code plugin that turns a multi-repo workspace into an agentic engineering harness. Agents propose; deterministic gates verify.",
    install: "/plugin marketplace add andresgarcia29/harness-creator",
  },
  {
    repo: "harness-daemon",
    pitch:
      "Single Go binary that shows what your coding agents are doing, waiting on, deciding and spending, live, across machines over SSH.",
    install: "brew install andresgarcia29/agm/harness && harness init",
    media: { src: "/harness-terminals.png", alt: "Live agent terminals: one waiting on a decision with one-click answers, one fixing failing tests", width: 1440, height: 960 },
  },
  {
    repo: "harness-ui",
    pitch: "React dashboard for a fleet of coding agents: every session, gate and dollar at a glance.",
    media: { src: "/harness-ui.png", alt: "harness-ui overview with agents, tasks waiting on you and daily spend", width: 1440, height: 1090 },
  },
];

export const principles = [
  ["Boring on purpose.", "The 3 a.m. version of me has to understand it."],
  ["If a script can check it, a script checks it.", "People and models bring judgment, not diffs."],
  ["Observability before scale.", "You can't fix what you can't see while 25 million people are watching."],
  ["Everything in git.", "Infra, policy, runbooks and decisions. The audit trail is a feature."],
  ["Small blast radius.", "Canary first, roll back first, diagnose second."],
  ["Write it down.", "Documentation is the on-call engineer you don't have to page."],
];

export const stack = {
  Cloud: ["AWS", "GCP", "Multi-account landing zones", "IAM"],
  "Kubernetes & delivery": ["EKS / GKE", "ArgoCD", "Kargo", "Helm", "GitOps", "GitHub Actions", "GitLab CI"],
  "Infrastructure as code": ["Terraform", "OpenTofu", "Terragrunt", "Pulumi"],
  Observability: ["Prometheus", "Thanos", "Loki", "Grafana", "OpenTelemetry", "ELK"],
  "Security & compliance": ["HashiCorp Vault", "CNBV", "SOC 2", "GDPR"],
  Programming: ["Go", "Python", "Bash", "TypeScript"],
};

export const summary =
  "Site Reliability and Platform Engineer with 9+ years building and running infrastructure where downtime is very visible: live sports streaming with peaks of 20–30M concurrent users across three continents, a banking core kept at 99.99% through a fintech-to-regulated-bank transition, and cloud platforms built from scratch. Deep in AWS and GCP, Kubernetes, Terraform, GitOps and observability.";

export const highlights = [
  ["20–30M", "concurrent viewers at peak"],
  ["99.99%", "banking-core availability"],
  ["9+ yrs", "infrastructure & operations"],
];

export const languages = [["English", "Full professional"], ["Spanish", "Native"]];
export const education = [
  ["B.S. Computer Engineering", "Universidad de Guadalajara"],
  ["Research Assistant, ML & sentiment analysis", "Tecnológico de Monterrey / UC Berkeley"],
];

export type Span = {
  id: string;
  org: string;
  role: string;
  start: string;
  end: string | null;
  kind: "core" | "early" | "oss";
  place?: string;
  attrs?: string[];
  events?: string[];
};

export const trace: Span[] = [
  {
    id: "nbcuniversal", org: "NBCUniversal · Peacock", role: "Senior Site Reliability Engineer", start: "2022-11", end: null, kind: "core",
    place: "New York · remote", attrs: ["AWS", "GCP", "Multi-region", "Prometheus", "Thanos", "Loki", "Grafana"],
    events: [
      "Lead infrastructure for Peacock's live sports events (e.g. NFL), handling traffic peaks of 20–30M concurrent users.",
      "Design and run multi-region deployments across Europe, Africa and the Americas, optimizing latency and replication.",
      "Architected the network and security layers that integrate AWS and GCP for secure, high-speed data replication.",
      "Run the observability stack (Prometheus, Thanos, Loki, Grafana) that product teams rely on during live events.",
    ],
  },
  {
    id: "open-source", org: "Open source", role: "Author & maintainer", start: "2025-10", end: null, kind: "oss",
    place: "github.com/andresgarcia29", attrs: ["Go", "TypeScript", "Shell", "Claude Code", "MCP"],
    events: [
      "ark-cli: one AWS SSO login puts every EKS cluster across all accounts and regions into kubeconfig in seconds.",
      "harness-creator, harness-daemon and harness-ui: an agentic engineering harness where agents propose and deterministic gates verify, a Go daemon that observes coding agents live, and its dashboard.",
    ],
  },
  {
    id: "covalto", org: "Covalto", role: "DevOps Lead", start: "2021-11", end: "2022-11", kind: "core",
    place: "Mexico City · remote", attrs: ["GitOps", "Go", "Python", "CNBV"],
    events: [
      "Led the technical migration during the acquisition of Banco Finterra, taking a fintech to a fully regulated national bank.",
      "Designed the architecture and documentation to meet CNBV banking security and data sovereignty standards.",
      "Standardized deployments with GitOps and built health checkers in Go and Python, keeping critical banking cores at 99.99% availability.",
    ],
  },
  {
    id: "goexpedi", org: "GoExpedi", role: "Senior DevOps Engineer", start: "2020-08", end: "2021-11", kind: "core",
    place: "Houston, TX · remote", attrs: ["AWS", "Terraform", "Docker", "Microservices", "CI/CD"],
    events: [
      "Built the cloud platform from scratch: from basic Docker deployments to a multi-account AWS strategy managed with Terraform.",
      "Secured B2B e-commerce platforms for global enterprise clients.",
      "Broke legacy monoliths into microservices and established a high-performance CI/CD culture.",
    ],
  },
  {
    id: "rever", org: "Rever", role: "DevOps Engineer", start: "2018-12", end: "2020-08", kind: "core",
    place: "San Francisco, CA · remote", attrs: ["AWS", "Data lake", "GDPR"],
    events: [
      "Built the company's Data Warehouse and Data Lake from scratch, enabling real-time analytics.",
      "Implemented GDPR standards for data privacy and security.",
      "Helped scale engineering from 2 to 30+ engineers while keeping DevOps best practices.",
    ],
  },
  { id: "digitt", org: "Digitt", role: "Data Scientist", start: "2018-04", end: "2018-12", kind: "early", place: "Guadalajara", attrs: ["Python", "Spark", "TensorFlow", "AWS"] },
  { id: "agave", org: "Agave Lab", role: "Back-end Developer", start: "2018-01", end: "2018-05", kind: "early", place: "Guadalajara", attrs: ["Node.js", "Kubernetes", "gRPC", "PostgreSQL"] },
  { id: "itesm", org: "Tecnológico de Monterrey", role: "Machine Learning Developer", start: "2017-10", end: "2018-03", kind: "early", place: "Zapopan", attrs: ["Python", "NLP"] },
  { id: "kukumi", org: "Kukumi", role: "Full Stack Developer", start: "2017-05", end: "2017-12", kind: "early", place: "Guadalajara", attrs: ["Node.js", "Docker", "AWS"] },
  { id: "maxcool", org: "MAXCOOL", role: "Full Stack Developer", start: "2016-07", end: "2017-08", kind: "early", place: "Guadalajara", attrs: ["Python", "Django", "PostgreSQL"] },
];

export const selectedWork = [
  {
    title: "Company-wide AI gateway and MCP rollout",
    body: "Governed access to LLMs for every team: per-team cost tracking and rate limits behind one gateway, plus MCP servers so assistants reach internal tools securely.",
  },
];
