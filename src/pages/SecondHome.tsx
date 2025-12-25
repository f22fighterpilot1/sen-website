import { NavLink } from "react-router-dom";

const LOGOS = ["Acme", "Waypoint", "SeatGeek", "Lufthansa", "Indeed", "GSK", "Databricks"];

export default function SecondHome() {
  return (
    <section className="home2">
      {/* HERO */}
      <div className="home2-hero">
        <div className="home2-hero-grid">
          <div>
                   <h1>
                    The world’s first<br />
                    fully deterministic<br />
                    AI Infrastructure
                    </h1>


            <p className="home2-sub">
              Use SymbolicEngine (SEN) to recognize symbols by structure and invariants—so outputs are repeatable,
              inspectable, and audit-ready.
            </p>

            <div className="home2-cta">
              <NavLink to="/demo" className="btn btn-primary">
                Launch demo
              </NavLink>
              <NavLink to="/how-it-works" className="btn">
                Request a demo →
              </NavLink>
            </div>
          </div>

          <aside className="home2-visual card" aria-label="Product preview">
            <div className="home2-visual-inner">
              {/* Replace with an <img> when you have one */}
              <div className="home2-visual-chip">SEN Console</div>
              <div className="home2-visual-panel" />
              <div className="home2-visual-panel small" />
              <div className="home2-visual-panel tiny" />
            </div>
          </aside>
        </div>

        {/* LOGOS */}
        <div className="home2-logo-row" aria-label="Trusted by">
          <div className="home2-logo-label">TRUSTED BY TEAMS BUILDING RELIABLE SYSTEMS</div>
          <div className="home2-logos">
            {LOGOS.map((l) => (
              <span key={l} className="home2-logo">
                {l}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* SECTION 2 */}
      <div className="home2-section">
        <div className="home2-section-grid">
          <div>
            <h2 className="home2-h2">
              Infrastructure as code for deterministic perception
            </h2>
            <p className="home2-p">
              Define what SEN should recognize using structural templates—then validate visual inputs consistently across
              devices, environments, and render styles.
            </p>
          </div>

          <div className="home2-mini-cards">
            <div className="home2-mini card">
              <div className="home2-mini-ico">☁</div>
              <div className="home2-mini-k">Edge + Cloud</div>
              <div className="home2-mini-v">Run deterministic recognition anywhere.</div>
            </div>

            <div className="home2-mini card">
              <div className="home2-mini-ico">🔒</div>
              <div className="home2-mini-k">Audit & Compliance</div>
              <div className="home2-mini-v">Traceable outputs for regulated workflows.</div>
            </div>

            <div className="home2-mini card">
              <div className="home2-mini-ico">🧩</div>
              <div className="home2-mini-k">Composable</div>
              <div className="home2-mini-v">Drop-in perception layer for your stack.</div>
            </div>

            <div className="home2-mini card">
              <div className="home2-mini-ico">⚙</div>
              <div className="home2-mini-k">Deterministic</div>
              <div className="home2-mini-v">Same input → same output. Always.</div>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 3 */}
      <div className="home2-section">
        <div className="home2-section-grid">
          <div>
            <h2 className="home2-h2">
              Use one deterministic workflow to cut risk and move faster
            </h2>
            <p className="home2-p">
              Replace “AI that guesses” with a system you can debug: inspect matches, compare invariants, and prove why a
              decision was made.
            </p>
          </div>

          <div className="home2-workflow">
            <div className="home2-work card">
              <div className="home2-work-head">
                <div className="home2-work-title">Validation overlays</div>
                <span className="home2-badge">Inspection</span>
              </div>
              <p className="home2-work-body">
                Visualize structural evidence (symmetry, holes, ratios) behind every match.
              </p>
            </div>

            <div className="home2-work card">
              <div className="home2-work-head">
                <div className="home2-work-title">Template library</div>
                <span className="home2-badge">Control</span>
              </div>
              <p className="home2-work-body">
                Version templates like code and roll changes safely across environments.
              </p>
            </div>

            <div className="home2-work card">
              <div className="home2-work-head">
                <div className="home2-work-title">Deterministic scoring</div>
                <span className="home2-badge">Reliability</span>
              </div>
              <p className="home2-work-body">
                Eliminate probabilistic drift and keep results stable under noise and style shifts.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
