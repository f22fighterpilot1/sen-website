import { NavLink } from "react-router-dom";

export default function HowItWorks() {
  return (
    <section className="hiw">
      {/* PAGE HEADER */}
      <div className="container">
        <header className="hiw-head">
          <h1>What is SymbolicEngine?</h1>

          <p className="tutorial-ref">
            Reference this often?{" "}
            <NavLink to="/signup" className="tutorial-ref-link">
              Create an account
            </NavLink>{" "}
            to bookmark tutorials.
          </p>
        </header>
      </div>

      {/* BAND 1 — Video left, copy right */}
      <section className="hiw-section">
        <div className="container">
          <div className="hiw-grid">
            <div className="hiw-media">
              <video className="hiw-video" controls preload="metadata" playsInline>
                <source
                  src="/src/media/videos/Drew_Cyber_Careers.mp4"
                  type="video/mp4"
                />
              </video>
            </div>

            <div className="hiw-copy">
              <div className="hiw-kicker" aria-hidden="true" />
              <h2 className="hiw-title">Deterministic symbol recognition</h2>
              <p className="hiw-body">
                SymbolicEngine performs deterministic symbol recognition and verification.
                Given the same input, the output is identical.
              </p>

              <ul className="tutorial-bullets">
                <li>Deterministic recognition and scoring</li>
                <li>Repeatable results across environments</li>
                <li>Explicit confidence and abstention rules</li>
                <li>No model drift or hidden behavior</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* UNDER THE HOOD — FULL-BLEED, CENTERED (NOT IN CONTAINER, NOT ALTERNATING) */}
      <section className="hiw-underhood-band">
        <div className="hiw-underhood-inner">
          <div className="hiw-kicker" aria-hidden="true" />
          <h2 className="hiw-underhood-title">Under the Hood</h2>

          <p className="hiw-underhood-sub">
            SEN extracts structure, normalizes geometry, encodes invariants, and performs deterministic
            comparisons against explicit templates—producing a verifiable output with no probabilistic drift.
          </p>

          <div className="workflow-grid">
            <figure className="workflow-item">
              <img
                src="/src/media/images/eyeball.png"
                alt="Visual input"
                className="workflow-img"
              />
              <figcaption>1. Visual Input</figcaption>
            </figure>

            <figure className="workflow-item">
              <img
                src="/src/media/images/symbol_decomposition.png"
                alt="Symbol decomposition"
                className="workflow-img"
              />
              <figcaption>2. Symbol Decomposition</figcaption>
            </figure>

            <figure className="workflow-item">
              <img
                src="/src/media/images/structural_normalization.png"
                alt="Structural normalization"
                className="workflow-img"
              />
              <figcaption>3. Structural Normalization</figcaption>
            </figure>

            <figure className="workflow-item">
              <img
                src="/src/media/images/encoding.png"
                alt="Encoding"
                className="workflow-img"
              />
              <figcaption>4. Encoding</figcaption>
            </figure>

            <figure className="workflow-item">
              <img
                src="/src/media/images/deterministic_comparison.png"
                alt="Deterministic comparison"
                className="workflow-img"
              />
              <figcaption>5. Deterministic Comparison</figcaption>
            </figure>

            <figure className="workflow-item">
              <img
                src="/src/media/images/structural_validity_perfect.png"
                alt="Validity assessment"
                className="workflow-img"
              />
              <figcaption>6. Validity Assessment</figcaption>
            </figure>

            <figure className="workflow-item">
              <img
                src="/src/media/images/verified_symbol_output.png"
                alt="Verified output"
                className="workflow-img"
              />
              <figcaption>7. Verified Output</figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* BAND 3 — Image left, copy right */}
      <section className="hiw-section">
        <div className="container">
          <div className="hiw-grid">
            <div className="hiw-media">
              <img
                src="/src/media/images/verified_symbol_output.png"
                alt="Verified output example"
              />
            </div>

            <div className="hiw-copy">
              <div className="hiw-kicker" aria-hidden="true" />
              <h2 className="hiw-title">Standardize Recognition and Verification</h2>
              <p className="hiw-body">
                Recognition behaves the same everywhere. Local tests and production match.
                What you validate is what you deploy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BAND 4 — Copy left, image right */}
      <section className="hiw-section is-flipped">
        <div className="container">
          <div className="hiw-grid">
            <div className="hiw-media">
              <img
                src="/src/media/images/deterministic_comparison.png"
                alt="Deterministic comparison example"
              />
            </div>

            <div className="hiw-copy">
              <div className="hiw-kicker" aria-hidden="true" />
              <h2 className="hiw-title">Collaborate with Confidence</h2>
              <p className="hiw-body">
                Templates and rules are explicit. Changes can be reviewed and tested.
                No silent behavior changes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BAND 5 — Image left, copy right */}
      <section className="hiw-section">
        <div className="container">
          <div className="hiw-grid">
            <div className="hiw-media">
              <img src="/src/media/images/encoding.png" alt="Integration and encoding" />
            </div>

            <div className="hiw-copy">
              <div className="hiw-kicker" aria-hidden="true" />
              <h2 className="hiw-title">Quick Start</h2>
              <p className="hiw-body">
                Integrate via API, SDK, or container. Start recognizing symbols immediately.
                Enable verification as needed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BAND 6 — Copy left, minimal CTA */}
      <section className="hiw-section is-flipped">
        <div className="container">
          <div className="hiw-grid">
            <div className="hiw-media hiw-media--plain">
              <div className="card" style={{ padding: 18 }}>
                <div style={{ fontWeight: 750, marginBottom: 8 }}>Next steps</div>
                <p style={{ margin: 0, color: "var(--muted)", lineHeight: 1.65 }}>
                  You’re ready to integrate SymbolicEngine into recognition, verification, and trust-critical workflows.
                </p>
              </div>
            </div>

            <div className="hiw-copy">
              <div className="hiw-kicker" aria-hidden="true" />
              <h2 className="hiw-title">Next Steps</h2>
              <p className="hiw-body">
                Start with the demo, then move to a template-driven integration path based on your environment and
                compliance needs.
              </p>

              <div className="hiw-actions">
                <NavLink to="/demo" className="btn btn-primary">
                  Launch demo
                </NavLink>
                <NavLink to="/pricing" className="btn">
                  Pricing →
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
