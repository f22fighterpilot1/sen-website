import { NavLink } from "react-router-dom";

// src/pages/Pricing.jsx
export default function Pricing() {
  return (
    <main className="content">
      {/* HERO */}
      <section className="pricing-hero">
        <div className="pricing-hero-grid">
          <div>
            <h1>Pricing built for scale</h1>
            <p className="lead">
              Transparent plans and pricing provides complete access to SymbolicEngine, enabling you to build, verify, and deploy with certainty at any scale. Begin with a $500 credit, ready to use across the entire platform.
            </p>
          <div className="hero-actions">
            <NavLink to="/signup" className="btn btn-primary">
              Sign up
            </NavLink>
          </div>
          </div>
          {/* Decorative background panel */}
          <div className="pricing-visual card" />
        </div>
      </section>

      {/* PLANS */}
      <section className="section">
          <div className="cards pricing-cards">
            <div className="card pricing-card">
              <h3>Pay-as-You-Go (PAYG)</h3>
              <p>
                On-demand, usage-based billing with no long-term commitment and a
                $500 credit to get you started.
              </p>
              <a href="#" className="pricing-link">
                Sign up →
              </a>
            </div>

            <div className="card pricing-card">
              <h3>Flex</h3>
              <p>
                Single and multi-year plans available with preferred pricing for
                maximum ROI.
              </p>
              <NavLink to="/store" className="pricing-link">
              Contact sales →
              </NavLink>
            </div>

            <div className="card pricing-card">
              <h3>Enterprise Self-Managed</h3>
              <p>
                Fully customizable plans designed for maximum control and
                compliance.
              </p>
              <a href="#" className="pricing-link">
                Contact sales →
              </a>
            </div>
          </div>
      </section>

<section className="section">
  <h2>Features</h2>

  {/* Category tabs (static for now) */}
  <div className="feature-tabs">
    <button className="feature-tab active">Visibility & optimization</button>
    <button className="feature-tab">Policy & security</button>
    <button className="feature-tab">Governance, risk & compliance</button>
    <button className="feature-tab">Integrations & API</button>
    <button className="feature-tab">Reliability & scale</button>
    <button className="feature-tab">Practitioner workflow</button>
  </div>

  {/* Features table */}
  <div className="features-table card">
    <div className="features-header">
      <div></div>
      <div>Essentials</div>
      <div>Standard</div>
      <div>Premium</div>
      <div>Enterprise</div>
    </div>

    {[
      ["Workspace management", true, true, true, true],
      ["Workspace explorer", true, true, true, false],
      ["Audit logging", false, true, true, true],
      ["Drift detection", false, true, true, true],
      ["Continuous validation", false, true, true, true],
      ["Ephemeral workspaces", false, true, true, true],
      ["Runtime metrics (Prometheus)", false, false, false, true],
    ].map(([label, e, s, p, ent]) => (
      <div className="features-row" key={String(label)}>
        <div className="feature-name">{label}</div>
        {[e, s, p, ent].map((enabled, i) => (
          <div key={i} className="feature-cell">
            {enabled ? <span className="check">✓</span> : <span className="cross">×</span>}
          </div>
        ))}
      </div>
    ))}
  </div>
</section>

<section className="section faq">
    <h2>FAQs</h2>

    {/* Tabs */}
    <div className="faq-tabs">
      <button className="faq-tab">Product</button>
      <button className="faq-tab active">Billing & support</button>
    </div>

    <div className="faq-list">
      <details className="faq-item">
        <summary>
          What payment options do you accept?
          <span className="chevron" />
        </summary>
        <p>
          We accept major credit cards and invoiced billing for qualifying
          organizations. Enterprise customers may arrange custom billing terms.
        </p>
      </details>

      <details className="faq-item">
        <summary>
          I have billing questions, where should I direct these?
          <span className="chevron" />
        </summary>
        <p>
          Billing inquiries can be submitted through support or directed to your
          account representative.
        </p>
      </details>

      <details className="faq-item">
        <summary>
          Do you offer a Service Level Agreement (SLA)?
          <span className="chevron" />
        </summary>
        <p>
          Yes. SLAs are available for Standard, Premium, and Enterprise plans.
        </p>
      </details>

      <details className="faq-item">
        <summary>
          How is monthly usage calculated for pay-as-you-go?
          <span className="chevron" />
        </summary>
        <p>
          Usage is calculated based on active workspaces, execution volume, and
          enabled services during the billing period.
        </p>
      </details>

      <details className="faq-item">
        <summary>
          What’s the difference between PAYG, Flex, and Enterprise?
          <span className="chevron" />
        </summary>
        <p>
          PAYG is usage-based with no commitment, Flex offers discounted
          committed pricing, and Enterprise provides full customization and
          control.
        </p>
      </details>
    </div>
</section>

    </main>
  );
}
