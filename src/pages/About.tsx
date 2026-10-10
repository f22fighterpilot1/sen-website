
import { NavLink } from "react-router-dom";

export default function About() {
  return (
    <section className="hiw">
      {/* BAND 1 — Deterministic Recognition */}
      <section className="hiw-section">
        <div className="container">
          <div className="hiw-grid">
            <div className="hiw-copy">
              <h1 className="hiw-title">
                Deterministic{" "}
                <span className="nowrap">symbol recognition</span>
              </h1>

              <p className="hiw-body">
                SymbolicEngine performs deterministic symbol recognition and
                verification. Given the same input and configuration, the
                system produces the same output—a fundamental advantage for
                reproducibility, verification, and auditability.
              </p>

              <ul className="tutorial-bullets check-bullets">
                <li>Deterministic recognition and scoring</li>
                <li>Repeatable results across environments</li>
                <li>Explicit, reviewable recognition outcomes</li>
                <li>Consistent behavior under the same configuration</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* BAND 2 — Under the Hood */}
      <section className="hiw-underhood-band">
        <div className="hiw-underhood-inner">
          <h2 className="hiw-title">Under the hood</h2>

          <p className="home2-p">
            SymbolicEngine processes visual information through structural
            normalization, symbol extraction, geometric fingerprinting, and
            deterministic comparison against explicit templates. The result
            is a structured recognition output designed to support
            reproducibility, verification, and review.
          </p>

          <div className="workflow-grid">
            <figure className="workflow-item">
              <img
                src="/media/images/eyeball.png"
                alt="Visual input"
                className="workflow-img"
              />
              <figcaption>1. Visual Input</figcaption>
            </figure>

            <figure className="workflow-item">
              <img
                src="/media/images/structural_normalization.png"
                alt="Structural normalization"
                className="workflow-img"
              />
              <figcaption>2. Symbol Extraction</figcaption>
            </figure>

            <figure className="workflow-item">
              <img
                src="/media/images/encoding.png"
                alt="Geometric fingerprinting"
                className="workflow-img"
              />
              <figcaption>3. Geometric Fingerprinting</figcaption>
            </figure>

            <figure className="workflow-item">
              <img
                src="/media/images/deterministic_comparison.png"
                alt="Deterministic template comparison"
                className="workflow-img"
              />
              <figcaption>
                4. Deterministic Template Comparison
              </figcaption>
            </figure>

            <figure className="workflow-item">
              <img
                src="/media/images/structural_validity_perfect.png"
                alt="Structural validity assessment"
                className="workflow-img"
              />
              <figcaption>5. Validity Assessment</figcaption>
            </figure>

            <figure className="workflow-item">
              <img
                src="/media/images/verified_symbol_output.png"
                alt="Verified symbol output"
                className="workflow-img"
              />
              <figcaption>6. Verified Output</figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* BAND 3 — Standardization */}
      <section className="hiw-section hiw-standardize-section">
        <div className="container">
          <div className="hiw-copy">
            <h2 className="hiw-title">
              Standardize recognition and verification
            </h2>

            <p className="home2-p">
              Recognition behavior is repeatable under the same input and
              configuration. Validate the behavior you intend to deploy,
              then evaluate changes before introducing them into production.
            </p>
          </div>
        </div>
      </section>

      {/* RECOGNITION AND VERIFICATION CHART */}
      <section className="hiw-chart-section">
        <div className="container">
          <img
            src="/media/images/bar3.png"
            alt="SymbolicEngine recognition and verification chart"
            className="hiw-chart-image"
          />
        </div>
      </section>

      {/* BAND 4 — Collaboration and Traceability */}
      <section className="hiw-section">
        <div className="container">
          <div className="hiw-copy">
            <h2 className="hiw-title">
              Collaborate with confidence
            </h2>

            <p className="home2-p">
              Keep recognition logic transparent, changes reviewable, and
              verification workflows traceable.
            </p>

            <ul className="tutorial-bullets check-bullets">
              <li>Templates and rules are explicit</li>
              <li>Teams can inspect what changed</li>
              <li>Changes can be reviewed, tested, and approved</li>
              <li>Recognition behavior can be traced to its configuration</li>
              <li>Changes can be evaluated before deployment</li>
            </ul>
          </div>
        </div>
      </section>

      {/* BAND 5 — Next Steps */}
      <section className="hiw-section is-flipped">
        <div className="container">
          <div className="hiw-grid">
            <div className="hiw-copy">
              <h2 className="hiw-title">Next steps</h2>

              <p className="home2-p">
                Explore how SymbolicEngine can fit into your existing
                workflows through API, SDK, or container-based integration.
                Work with our team to identify a suitable use case and
                evaluate the system against your requirements.
              </p>

              <div className="hiw-actions">
                <NavLink to="/support" className="btn btn-primary">
                  Request a Demo
                </NavLink>

                <NavLink to="/support" className="btn">
                  Contact Us for Pricing →
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
