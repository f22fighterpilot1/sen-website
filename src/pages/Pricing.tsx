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
                Choose the deployment model that fits your environment: Cloud APIs (PAYG),
                Edge SDK (API-integrated), Docker Image (self-hosted), or the Full Library SDK
                (maximum performance and control). Start instantly with a $500 credit on PAYG.
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
              <h3>Pay-as-You-Go (Cloud APIs)</h3>
              <p>
                On-demand, usage-based billing with no long-term commitment.
                Includes a $500 credit to get you started. APIs only.
              </p>
              <NavLink to="/signup" className="pricing-link">
                Sign up →
              </NavLink>
            </div>

            <div className="card pricing-card">
              <h3>Edge SDK (API-Integrated)</h3>
              <p>
                Lightweight SDK designed to interface with SEN Cloud APIs for fast integration
                in edge and client environments. Does not include the full recognition library.
              </p>
              <NavLink to="/support" className="pricing-link">
                Contact sales →
              </NavLink>
            </div>

            <div className="card pricing-card">
              <h3>Docker Image (Self-Hosted)</h3>
              <p>
                Run SEN in your environment with a containerized deployment.
                Ideal for private networks, controlled infra, and standardized rollouts.
              </p>
              <NavLink to="/support" className="pricing-link">
                Contact sales →
              </NavLink>
            </div>

            <div className="card pricing-card">
              <h3>Full Library SDK</h3>
              <p>
                The complete SEN library for maximum control, performance, and offline operation.
                Designed for on-prem, air-gapped, and deeply integrated deployments.
              </p>
              <NavLink to="/support" className="pricing-link">
                Contact sales →
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
                What’s the difference between the Edge SDK and the Full Library SDK?
                <span className="chevron" />
              </summary>
              <p>
                The Edge SDK is a lightweight integration layer that interfaces with SEN Cloud APIs.
                The Full Library SDK includes the full recognition library for maximum performance,
                control, and offline operation in your environment.
              </p>
            </details>

            <details className="faq-item">
              <summary>
                Are the Cloud APIs available only via PAYG?
                <span className="chevron" />
              </summary>
              <p>
                Yes — the hosted Cloud APIs are offered under Pay-as-You-Go billing. For customers who
                want to run SEN in their own environment, use the Docker Image or Full Library SDK.
              </p>
            </details>

            <details className="faq-item">
              <summary>
                When should I use the Docker Image vs the Full Library SDK?
                <span className="chevron" />
              </summary>
              <p>
                Use the Docker Image when you want a self-hosted deployment that’s easy to operate as a service.
                Use the Full Library SDK when you need the deepest integration, maximum performance, or fully
                offline operation inside your own application stack.
              </p>
            </details>

            <details className="faq-item">
              <summary>
                Do you support on-prem or air-gapped environments?
                <span className="chevron" />
              </summary>
              <p>
                Yes. Self-hosted deployments are supported via Docker Image and Full Library SDK options.
                Air-gapped deployments are typically handled through enterprise delivery and update workflows.
              </p>
            </details>

            <details className="faq-item">
              <summary>
                How do updates work for Docker and SDK deployments?
                <span className="chevron" />
              </summary>
              <p>
                Updates are delivered as versioned releases. Because SEN uses explicit templates and rules,
                changes can be reviewed and regression-tested before rollout. You control when upgrades are applied.
              </p>
            </details>

            <details className="faq-item">
              <summary>
                Do you offer SLAs and enterprise support?
                <span className="chevron" />
              </summary>
              <p>
                Yes. SLAs and priority support are available for enterprise customers, including self-hosted
                deployments. We also offer onboarding support and integration guidance as needed.
              </p>
            </details>

            <details className="faq-item">
              <summary>
                What payment options do you accept?
                <span className="chevron" />
              </summary>
              <p>
                We accept major credit cards for PAYG. Enterprise customers can use invoiced billing and
                custom payment terms for qualifying organizations.
              </p>
            </details>
          </div>
        </section>
      </main>
  );
}