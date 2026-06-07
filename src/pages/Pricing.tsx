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
                Choose the integration path that fits your environment: direct API access,
                a lightweight SDK, self-hosted Docker deployment, or a fully embedded SDK
                for maximum control.
              </p>

              <div className="hero-actions">
                <NavLink to="/support" className="btn btn-primary">
                  Contact Us For Pricing
                </NavLink>
              </div>
            </div>
          </div>
        </section>

        {/* PLANS */}
        <section className="section">
          <div className="cards pricing-cards">
            <div className="card pricing-card">
              <h3>API Access</h3>
              <p>
                Direct access to SEN recognition and verification endpoints for teams that
                want a clean integration path without managing infrastructure.
              </p>
              <NavLink to="/pricing/api-access" className="pricing-link">
                Find out about API Access pricing →
              </NavLink>
            </div>

            <div className="card pricing-card">
              <h3>Lightweight SDK</h3>
              <p>
                A slim SDK for application-level integration with SEN APIs. Ideal for teams
                that want faster implementation while keeping recognition services centralized.
              </p>
              <NavLink to="/pricing/lightweight-sdk" className="pricing-link">
                See about the Lightweight SDK pricing →
              </NavLink>
            </div>

            <div className="card pricing-card">
              <h3>Container Deployment</h3>
              <p>
                Run SEN in your own environment with a containerized deployment. Ideal for on-prem,
                private networks, controlled infrastructure, and standardized enterprise rollouts.
              </p>
              <NavLink to="/pricing/container-deployment" className="pricing-link">
                Find out about Container Deployment pricing →
              </NavLink>
            </div>

            <div className="card pricing-card">
              <h3>Embedded SDK</h3>
              <p>
                Embed SEN directly into your application stack for maximum control, performance,
                and offline operation in on-prem, air-gapped, or deeply integrated environments.
              </p>
              <NavLink to="/pricing/embedded-sdk" className="pricing-link">
                Learn about Embedded SDK pricing →
              </NavLink>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section faq">
          <h2>FAQs</h2>

          <div className="faq-list">
            <details className="faq-item">
              <summary>
                What’s the difference between API Access and the Lightweight SDK?
                <span className="chevron" />
              </summary>
              <p>
                API Access lets your team call SEN endpoints directly. The Lightweight SDK wraps
                those integrations with client-side helpers, making implementation faster while
                still relying on SEN services for recognition and verification.
              </p>
            </details>

            <details className="faq-item">
              <summary>
                When should I use Container Deployment?
                <span className="chevron" />
              </summary>
              <p>
                Use Docker Deployment when you want SEN running in your own environment as a
                controlled service. It is ideal for private networks, enterprise infrastructure,
                and teams that need tighter deployment control.
              </p>
            </details>

            <details className="faq-item">
              <summary>
                When should I use the Embedded SDK?
                <span className="chevron" />
              </summary>
              <p>
                Use the Embedded SDK when you need the deepest integration, maximum performance,
                offline operation, or direct control inside your own application stack.
              </p>
            </details>

            <details className="faq-item">
              <summary>
                Do you support on-prem or air-gapped environments?
                <span className="chevron" />
              </summary>
              <p>
                Yes. On-prem and air-gapped deployments are supported through Docker Deployment
                and Embedded SDK options, with enterprise delivery and update workflows as needed.
              </p>
            </details>

            <details className="faq-item">
              <summary>
                How do updates work for Docker and SDK deployments?
                <span className="chevron" />
              </summary>
              <p>
                Updates are delivered as versioned releases. Because SEN uses explicit templates
                and rules, changes can be reviewed and regression-tested before rollout. You
                control when upgrades are applied.
              </p>
            </details>

            <details className="faq-item">
              <summary>
                Do you offer SLAs and enterprise support?
                <span className="chevron" />
              </summary>
              <p>
                Yes. SLAs, onboarding support, and priority integration guidance are available
                for enterprise customers across API, SDK, Docker, and embedded deployments.
              </p>
            </details>

            <details className="faq-item">
              <summary>
                What payment options do you accept?
                <span className="chevron" />
              </summary>
              <p>
                Enterprise customers can use invoiced billing and custom payment terms for
                qualifying organizations.
              </p>
            </details>
          </div>
        </section>
      </main>
  );
}