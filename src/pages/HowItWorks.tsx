import { NavLink } from "react-router-dom";

export default function HowItWorks() {
  return (
      <section className="hiw">
        {/* PAGE HEADER */}
        <div className="container">
          <header className="hiw-head">
            <h1>What is SymbolicEngine?</h1>
          </header>
        </div>

        {/* BAND 1 — Image left, copy right */}
        <section className="hiw-section">
          <div className="container">
            <div className="hiw-grid">
              <div className="hiw-media">
                <video
                    className="hiw-video"
                    controls
                    playsInline
                    autoPlay
                    preload="metadata"
                >
                  <source src="/media/videos/sen-final-demo.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>

              <div className="hiw-copy">
                <h2 className="hiw-title">
                  Deterministic <span className="nowrap">symbol recognition</span>
                </h2>
                <p className="hiw-body">
                  SymbolicEngine performs deterministic symbol recognition and verification.
                  Given the same input, the output is identical - an enormous advantage.
                </p>
                <ul className="tutorial-bullets check-bullets">
                  <li>Deterministic recognition and scoring</li>
                  <li>Repeatable results across environments</li>
                  <li>Explicit confidence</li>
                  <li>No model drift or hidden behavior</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* UNDER THE HOOD — FULL-BLEED, CENTERED */}
        <section className="hiw-underhood-band">
          <div className="hiw-underhood-inner">
            <h2 className="hiw-title">Under the hood</h2>

            <p className="home2-p">
              A huge advancement in computer vision, SEN extracts structure, normalizes geometry, encodes invariants, and performs precise
              comparisons against explicit templates. This produces a verifiable output with no probabilistic drift.
            </p>

            <div className="workflow-grid">
              <figure className="workflow-item">
                <img src="/media/images/eyeball.png" alt="Visual input" className="workflow-img" />
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
                <img src="/media/images/encoding.png" alt="Encoding" className="workflow-img" />
                <figcaption>3. Geometric Fingerprinting</figcaption>
              </figure>

              <figure className="workflow-item">
                <img
                    src="/media/images/deterministic_comparison.png"
                    alt="Deterministic comparison"
                    className="workflow-img"
                />
                <figcaption>4. Deterministic Template Comparison</figcaption>
              </figure>

              <figure className="workflow-item">
                <img
                    src="/media/images/structural_validity_perfect.png"
                    alt="Validity assessment"
                    className="workflow-img"
                />
                <figcaption>5. Validity Assessment</figcaption>
              </figure>

              <figure className="workflow-item">
                <img
                    src="/media/images/verified_symbol_output.png"
                    alt="Verified output"
                    className="workflow-img"
                />
                <figcaption>6. Verified Output</figcaption>
              </figure>
            </div>
          </div>
        </section>

        {/* BAND 3 — TEXT ONLY */}
        <section className="hiw-section hiw-standardize-section">
          <div className="container">
            <div className="hiw-copy">
              <h2 className="hiw-title">Standardize recognition and verification</h2>
              <p className="home2-p">
                Recognition behaves the same everywhere.
                What you validate is what you deploy.
              </p>
            </div>
          </div>
        </section>
        {/* BAR CHART */}
        <section className="hiw-chart-section">
          <div className="container">
            <img
                src="/media/images/bar3.png"
                alt="SEN recognition and verification chart"
                className="hiw-chart-image"
            />
          </div>
        </section>
        {/* BAND 4 — TEXT ONLY */}
        <section className="hiw-section">
          <div className="container">
            <div className="hiw-copy">
              <h2 className="hiw-title">Collaborate with confidence</h2>
              <p className="home2-p">
                <ul className="tutorial-bullets check-bullets">
                  <li>Templates and rules are explicit</li>
                  <li>Teams can see exactly what changed</li>
                  <li>Every change can be reviewed, tested, and approved</li>
                  <li>Recognition behavior stays traceable</li>
                  <li>No silent behavior changes</li>
                </ul>
              </p>
            </div>
          </div>
        </section>

        {/* BAND 6 — Copy left, minimal CTA */}
        <section className="hiw-section is-flipped">
          <div className="container">
            <div className="hiw-grid">
              <div className="hiw-copy">
                <h2 className="hiw-title">Next steps</h2>
                <p className="home2-p">
                  Seamlessly integrate via API, SDK, or container. Start recognizing symbols immediately.
                </p>

                <div className="hiw-actions">
                  <NavLink to="/support" className="btn btn-primary">
                    Request Demo
                  </NavLink>
                  <NavLink to="/support" className="btn">
                    Contact Us For Pricing →
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
  );
}