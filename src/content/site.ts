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

export const hero =
  "I keep the systems people can't afford to lose running.";

export const slis = [
  {
    id: "live-sports",
    component: "Live streaming at scale",
    sli: "20–30M concurrent viewers, multi-region across three continents",
  },
  {
    id: "regulated-bank",
    component: "Regulated banking core",
    sli: "99.99% availability through a fintech → regulated bank transition",
  },
  {
    id: "ai-platform",
    component: "Company-wide AI platform",
    sli: "AI gateway + MCP rollout: governed LLM access for every team",
  },
  {
    id: "from-scratch",
    component: "Platforms from scratch",
    sli: "Multi-account AWS, Terraform, microservices, CI/CD as the default path",
  },
];

export const cases = [
  {
    id: "live-sports",
    metric: "20–30M",
    metricLabel: "concurrent viewers at peak",
    title: "Live sports for 20–30M concurrent viewers",
    org: "NBCUniversal · Peacock",
    context:
      "Infrastructure for live sports events (NFL among them) on Peacock, with traffic peaks of 20 to 30 million concurrent viewers and deployments across Europe, Africa and the Americas.",
    built:
      "The multi-region architecture for content delivery, tuned for latency and replication between regions; the network and security layers that tie AWS and GCP together; and the Prometheus, Thanos, Loki and Grafana stack that product teams rely on during live events.",
    result:
      "Live events at that scale run on infrastructure built to absorb the peak, with the signals in place to see it happening.",
    stack: ["AWS", "GCP", "Multi-region", "Prometheus", "Thanos", "Loki", "Grafana"],
  },
  {
    id: "regulated-bank",
    metric: "99.99%",
    metricLabel: "banking-core availability",
    title: "A fintech becoming a regulated bank, at 99.99%",
    org: "Covalto",
    context:
      "DevOps lead while the company acquired Banco Finterra and turned from a fintech startup into a fully regulated national bank under the CNBV.",
    built:
      "The technical migration and integration during the acquisition; the architecture and documentation required by CNBV for banking security and data sovereignty; GitOps for every deployment; and custom health checkers in Go and Python watching the critical banking cores.",
    result: "The banking cores held 99.99% availability through the transition.",
    stack: ["GitOps", "Go", "Python", "CNBV compliance"],
  },
  {
    id: "from-scratch",
    metric: "0 → 1",
    metricLabel: "cloud platform, multi-account AWS",
    title: "A cloud platform from zero",
    org: "GoExpedi",
    context:
      "B2B e-commerce for enterprise clients, starting from basic Docker deployments.",
    built:
      "The whole cloud ecosystem from the ground up: a multi-account AWS strategy managed with Terraform, security for enterprise-level transactions, and the move from legacy monoliths to microservices with CI/CD as the default path to production.",
    result: "A platform the business could grow on, instead of a pile of hand-made servers.",
    stack: ["AWS", "Terraform", "Docker", "Microservices", "CI/CD"],
  },
  {
    id: "ai-platform",
    metric: "1 door",
    metricLabel: "LLM access for every team",
    title: "One AI gateway for every team",
    org: "Platform engineering",
    context:
      "Teams across a large engineering organization were adopting LLMs on their own: separate keys, no cost visibility, no limits.",
    built:
      "A company-wide AI gateway and Model Context Protocol (MCP) rollout: governed access to models, cost tracking and rate limits per team, and MCP servers so assistants could reach internal tools securely.",
    result: "Every team got LLM access through the same door, with a budget and a limit attached to it.",
    stack: ["Kubernetes", "Terraform", "Vault", "Grafana", "MCP"],
  },
];

export const experience = [
  { org: "NBCUniversal (Peacock)", role: "Senior Site Reliability Engineer", period: "2022 — present" },
  { org: "Covalto", role: "DevOps Lead", period: "2021 — 2022" },
  { org: "GoExpedi", role: "Senior DevOps Engineer", period: "2020 — 2021" },
  { org: "Rever", role: "DevOps Engineer", period: "2018 — 2020", note: "Data warehouse and lake from scratch, GDPR, team grew from 2 to 30+" },
];

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
  Languages: ["Go", "Python", "Bash", "TypeScript"],
};

export type Span = {
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
    org: "NBCUniversal · Peacock", role: "Senior Site Reliability Engineer", start: "2022-11", end: null, kind: "core",
    place: "New York (remote)", attrs: ["AWS", "GCP", "Prometheus", "Thanos", "Loki", "Grafana"],
    events: ["Live sports peaks of 20–30M concurrent users", "Multi-region across Europe, Africa and the Americas", "AWS ↔ GCP network and security layers", "Observability stack product teams rely on"],
  },
  {
    org: "Open source", role: "ark-cli · harness-creator · harness-daemon · harness-ui", start: "2025-10", end: null, kind: "oss",
    place: "github.com/andresgarcia29", attrs: ["Go", "TypeScript", "Shell", "Claude Code"],
    events: ["ark-cli: every EKS cluster into kubeconfig from one SSO login", "harness: agentic engineering with deterministic gates"],
  },
  {
    org: "Covalto", role: "DevOps Lead", start: "2021-11", end: "2022-11", kind: "core",
    place: "Mexico City (remote)", attrs: ["GitOps", "Go", "Python", "CNBV"],
    events: ["Banco Finterra acquisition: fintech → regulated bank", "CNBV security and data-sovereignty architecture", "99.99% availability on critical banking cores"],
  },
  {
    org: "GoExpedi", role: "Senior DevOps Engineer", start: "2020-08", end: "2021-11", kind: "core",
    place: "Houston, TX", attrs: ["AWS", "Terraform", "Docker", "CI/CD"],
    events: ["Cloud platform from scratch: multi-account AWS on Terraform", "Monoliths → microservices", "Security for enterprise B2B transactions"],
  },
  {
    org: "Rever", role: "DevOps Engineer", start: "2018-12", end: "2020-08", kind: "core",
    place: "San Francisco, CA", attrs: ["Data lake", "GDPR"],
    events: ["Data warehouse and data lake from scratch", "GDPR for international operations", "Engineering grew from 2 to 30+"],
  },
  { org: "Digitt", role: "Data Scientist", start: "2018-04", end: "2018-12", kind: "early", attrs: ["Python", "Spark", "TensorFlow", "AWS"] },
  { org: "Agave Lab", role: "Back-end Developer", start: "2018-01", end: "2018-05", kind: "early", attrs: ["Node.js", "Kubernetes", "gRPC", "PostgreSQL"] },
  { org: "Tecnológico de Monterrey", role: "Machine Learning Developer", start: "2017-10", end: "2018-03", kind: "early", attrs: ["Python", "NLP"] },
  { org: "Kukumi", role: "Full Stack Developer", start: "2017-05", end: "2017-12", kind: "early", attrs: ["Node.js", "Docker", "AWS"] },
  { org: "MAXCOOL", role: "Full Stack Developer", start: "2016-07", end: "2017-08", kind: "early", attrs: ["Python", "Django", "PostgreSQL"] },
];
