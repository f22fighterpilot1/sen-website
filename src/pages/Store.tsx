import { useMemo, useState } from "react";
import { NavLink } from "react-router-dom";

type Product = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  category: "Software" | "Services" | "Enterprise";
  priceLabel: string; // keep enterprise-style (e.g., "Contact", "$", etc.)
  bullets: string[];
  ctaLabel: string;
  ctaTo: string; // route or mailto
  badge?: string;
};

const PRODUCTS: Product[] = [
  {
    id: "sen-console",
    name: "SEN Console",
    tagline: "Inspection + determinism tooling",
    description:
      "A guided interface for running recognition, inspecting structural evidence, and exporting audit-ready traces.",
    category: "Software",
    priceLabel: "Contact",
    bullets: [
      "Evidence overlays (symmetry, holes, ratios)",
      "Replayable runs with immutable traces",
      "Exportable artifacts for audits",
    ],
    ctaLabel: "Request access →",
    ctaTo: "/support",
    badge: "Most popular",
  },
  {
    id: "template-library",
    name: "Template Library",
    tagline: "Versioned structural templates",
    description:
      "A curated library of deterministic templates with controlled updates and compatibility guarantees.",
    category: "Software",
    priceLabel: "Contact",
    bullets: [
      "Versioned releases + changelogs",
      "Compatibility notes and diff tooling",
      "Enterprise distribution options",
    ],
    ctaLabel: "Talk to sales →",
    ctaTo: "/support",
  },
  {
    id: "edge-runtime",
    name: "Edge Runtime",
    tagline: "Deterministic recognition on-device",
    description:
      "Deploy SEN workflows to edge and offline environments with stable outputs across hardware and time.",
    category: "Enterprise",
    priceLabel: "Contact",
    bullets: [
      "Offline / air-gapped deployment support",
      "Deterministic execution guarantees",
      "Operational hardening guidance",
    ],
    ctaLabel: "Request a demo →",
    ctaTo: "/how-it-works",
  },
  {
    id: "audit-pack",
    name: "Audit Pack",
    tagline: "Compliance artifacts and controls",
    description:
      "Documentation and operational controls designed for regulated environments that require traceability.",
    category: "Enterprise",
    priceLabel: "Contact",
    bullets: [
      "Traceability + evidence guidance",
      "Retention + logging best practices",
      "Reviewable system assumptions",
    ],
    ctaLabel: "Get details →",
    ctaTo: "/support",
  },
  {
    id: "integration",
    name: "Integration Services",
    tagline: "Implementation and pipeline wiring",
    description:
      "Hands-on engineering support to integrate SEN into your workflow, data paths, and verification regimes.",
    category: "Services",
    priceLabel: "Contact",
    bullets: [
      "Architecture + integration plan",
      "Deployment support",
      "Operational readiness review",
    ],
    ctaLabel: "Schedule a call →",
    ctaTo: "/support",
  },
  {
    id: "training",
    name: "Operator Training",
    tagline: "For teams running verified workflows",
    description:
      "Training for engineers and operators on deterministic perception workflows, evidence inspection, and governance.",
    category: "Services",
    priceLabel: "Contact",
    bullets: [
      "Workflow + verification training",
      "Template versioning discipline",
      "Audit-friendly operating patterns",
    ],
    ctaLabel: "Request training →",
    ctaTo: "/support",
  },
];

const CATEGORIES: Array<Product["category"] | "All"> = ["All", "Software", "Enterprise", "Services"];

export default function Store() {
  const [category, setCategory] = useState<(typeof CATEGORIES)[number]>("All");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return PRODUCTS.filter((p) => {
      const matchCategory = category === "All" ? true : p.category === category;
      const matchQuery =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.tagline.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q);
      return matchCategory && matchQuery;
    });
  }, [category, query]);

  return (
    <section className="store-page">
      <div className="container">
        <header className="store-header">
          <h1>Store</h1>
          <p className="store-sub">
            Enterprise-grade products and services for deterministic perception workflows.
          </p>

          <div className="store-controls">
            <div className="store-tabs" role="tablist" aria-label="Store categories">
              {CATEGORIES.map((c) => (
                <button
                  key={c}
                  type="button"
                  className={`store-tab ${category === c ? "active" : ""}`}
                  onClick={() => setCategory(c)}
                >
                  {c}
                </button>
              ))}
            </div>

            <div className="store-search">
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search products…"
                aria-label="Search products"
              />
            </div>
          </div>
        </header>

        <div className="store-grid" role="list">
          {filtered.map((p) => (
            <article key={p.id} className="store-card" role="listitem">
              <div className="store-card-top">
                <div>
                  <div className="store-kicker">{p.category}</div>
                  <h3 className="store-title">{p.name}</h3>
                  <div className="store-tagline">{p.tagline}</div>
                </div>
                <div className="store-price">
                  {p.badge && <span className="store-badge">{p.badge}</span>}
                  <span className="store-priceLabel">{p.priceLabel}</span>
                </div>
              </div>

              <p className="store-desc">{p.description}</p>

              <ul className="store-bullets">
                {p.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>

              <div className="store-actions">
                <NavLink className="btn btn-primary" to={p.ctaTo}>
                  {p.ctaLabel}
                </NavLink>
                <NavLink className="btn" to="/pricing">
                  See pricing →
                </NavLink>
              </div>
            </article>
          ))}
        </div>

        <div className="store-footer">
          <div className="store-foot-card">
            <h2 className="store-foot-title">Need procurement details?</h2>
            <p className="store-foot-sub">
              We support enterprise procurement workflows, security reviews, and deployment constraints
              (including offline and classified environments).
            </p>
            <NavLink to="/support" className="btn btn-primary">
              Contact support →
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
}
