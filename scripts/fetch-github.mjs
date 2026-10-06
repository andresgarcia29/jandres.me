// Writes src/data/github.json. On any failure it keeps the committed snapshot and exits 0,
// so a GitHub outage never breaks a deploy. GH_TOKEN needs the classic `read:user` scope:
// fine-grained tokens don't expose private contribution counts.
import { writeFileSync } from "node:fs";

const LOGIN = "andresgarcia29";
const REPOS = ["ark-cli", "harness-creator", "harness-daemon", "harness-ui"];
const OUT = new URL("../src/data/github.json", import.meta.url);

const repoFields = `name description stargazerCount primaryLanguage { name }
  releases(first: 1, orderBy: { field: CREATED_AT, direction: DESC }) { totalCount nodes { tagName publishedAt url } }
  defaultBranchRef { target { ... on Commit { abbreviatedOid committedDate url history { totalCount } } } }`;

const query = `query($login: String!) { user(login: $login) {
  contributionsCollection { contributionCalendar { totalContributions
    weeks { contributionDays { date contributionCount contributionLevel } } } }
  ${REPOS.map((r, i) => `r${i}: repository(name: "${r}") { ${repoFields} }`).join("\n")}
} }`;

const LEVELS = { NONE: 0, FIRST_QUARTILE: 1, SECOND_QUARTILE: 2, THIRD_QUARTILE: 3, FOURTH_QUARTILE: 4 };

async function main() {
  const token = process.env.GH_TOKEN;
  if (!token) return console.warn("fetch-github: GH_TOKEN not set, keeping snapshot");

  const res = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: { Authorization: `bearer ${token}`, "Content-Type": "application/json", "User-Agent": "jandres.me" },
    body: JSON.stringify({ query, variables: { login: LOGIN } }),
  });
  const body = await res.json().catch(() => ({}));
  if (!res.ok || body.errors || !body.data?.user) {
    return console.warn("fetch-github: API error, keeping snapshot", res.status, JSON.stringify(body.errors ?? body).slice(0, 300));
  }

  const user = body.data.user;
  const cal = user.contributionsCollection.contributionCalendar;
  const repos = REPOS.map((_, i) => {
    const r = user[`r${i}`];
    const commit = r.defaultBranchRef?.target;
    const release = r.releases.nodes[0];
    return {
      name: r.name,
      description: r.description,
      language: r.primaryLanguage?.name ?? null,
      stars: r.stargazerCount,
      releases: r.releases.totalCount,
      commits: commit?.history.totalCount ?? 0,
      tag: release?.tagName ?? null,
      tagDate: release?.publishedAt ?? null,
      tagUrl: release?.url ?? null,
      sha: commit?.abbreviatedOid ?? null,
      shaDate: commit?.committedDate ?? null,
      shaUrl: commit?.url ?? null,
    };
  });

  const data = {
    generatedAt: new Date().toISOString(),
    total: cal.totalContributions,
    weeks: cal.weeks.map((w) => w.contributionDays.map((d) => ({ d: d.date, c: d.contributionCount, l: LEVELS[d.contributionLevel] ?? 0 }))),
    repos,
  };
  writeFileSync(OUT, JSON.stringify(data, null, 1) + "\n");
  console.log(`fetch-github: ${data.total} contributions, ${repos.length} repos`);
}

main().catch((e) => console.warn("fetch-github: failed, keeping snapshot", e.message));
