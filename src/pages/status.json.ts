import type { APIRoute } from "astro";
import { person } from "../content/site";
import gh from "../data/github.json";

export const GET: APIRoute = () =>
  Response.json({
    status: "operational",
    engineer: person.name,
    role: person.role,
    available: true,
    looking_for: ["Site Reliability Engineer", "Platform Engineer", "DevOps Engineer"],
    remote: true,
    timezone: "UTC-6",
    contributions_last_year: gh.total,
    data_as_of: gh.generatedAt,
    built_at: import.meta.env.PUBLIC_BUILT_AT ?? new Date().toISOString(),
    contact: person.email,
  });
