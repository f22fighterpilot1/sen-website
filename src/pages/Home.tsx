import { NavLink } from "react-router-dom";
import WideSlideshow from "../components/WideSlideshow";

const LOGOS = ["Acme", "Waypoint", "SeatGeek", "Lufthansa", "Indeed", "GSK", "Databricks"];

export default function Home() {
  return (
    <section className="home2">

      {/* HERO */}
<div className="home2-hero">
  <div className="home2-hero-bleed" aria-hidden="true">
    <video
      className="home2-hero-video"
      autoPlay
      loop
      muted
      playsInline
      preload="auto"
    >
      <source src="/src/media/videos/space_shuttle_trim.mp4" type="video/mp4" />
    </video>
    <div className="home2-hero-overlay" />
  </div>
  
        <div className="home2-hero-grid">
          <div>
            <h1>
            The world’s first<br />
            fully deterministic<br />
            AI Infrastructure
            </h1>

            {/*<p className="home2-sub">
              SymbolicEngine (SEN) is a geometry-aware perceptual system that recognizes symbols by structure, topology, and invariants — not probabilities.
            </p>*/}
            
            <div className="home2-cta">
            <p className="home2-sub">
              SymbolicEngine (SEN) is a geometry-aware perceptual system that recognizes symbols by structure, topology, and invariants — not probabilities.
              < br/> < br/>
              <NavLink to="/demo" className="btn btn-primary">
                Launch demo
              </NavLink>
              <NavLink to="/how-it-works" className="btn">
                How it works →
              </NavLink>
            </p>
            </div>
          </div>

          {/* <aside className="home2-visual card" aria-label="Product preview">
            <div className="home2-visual-inner">
                <img
                src="/src/media/images/verified_symbol_output_transp.png"
                alt=""
                className="home2-visual-image"
                />
            </div>
          </aside> */}
        </div>
        {/* LOGOS 
        <div className="home2-logo-row" aria-label="Trusted by">
          <div className="home2-logo-label">TRUSTED BY TEAMS BUILDING RELIABLE SYSTEMS</div>
          <div className="home2-logos">
            {LOGOS.map((l) => (
              <span key={l} className="home2-logo">
                {l}
              </span>
            ))}
          </div>
        </div>*/}
      </div>

      {/* SECTION 2 */}
      <div className="home2-section">
                    <p className="home2-p">
                <br />
                <br />
                 CHANGE THIS LAYOUT <br />
                • Perceptual AI Infrastructure <br />
                • Deterministic;Traceable decisions<br />
                • Geometry-first;Holes, symmetry, ratios<br />
                • Built to scale;Perceptual layer for AI <br />
                • Explainable
            </p>
        <div className="home2-section-grid">
          <div>
            <h2 className="home2-h2">
              Why Sen
            </h2>
            <p className="home2-p">
              SEN is built to behave like a perceptual system: structural, stable, inspectable, and fast. It’s not “AI that guesses” — it’s AI that understands shape.
            </p>
          </div>

          <div className="home2-mini-cards">
            <div className="home2-mini card">
              <div className="home2-mini-ico">☁</div>
              <div className="home2-mini-k">Deterministic</div>
              <div className="home2-mini-v">Every output has a concrete reason. Debuggable, auditable, controllable.</div>
            </div>
            
            <div className="home2-mini card">
              <div className="home2-mini-ico">☁</div>
              <div className="home2-mini-k">Deterministic</div>
              <div className="home2-mini-v">Traceable decisions.</div>
            </div>

            <div className="home2-mini card">
              <div className="home2-mini-ico">🔒</div>
              <div className="home2-mini-k">Robust to Noise</div>
              <div className="home2-mini-v">Structure survives blur, compression, and style variance better than raw pixels.</div>
            </div>

            <div className="home2-mini card">
              <div className="home2-mini-ico">🧩</div>
              <div className="home2-mini-k">Composable</div>
              <div className="home2-mini-v">Designed to plug into larger systems as a perception layer or validation engine.</div>
            </div>

            <div className="home2-mini card">
              <div className="home2-mini-ico">⚙</div>
              <div className="home2-mini-k">Geometry First</div>
              <div className="home2-mini-v">Holes, symmetry, ratios.</div>
            </div>

            <div className="home2-mini card">
              <div className="home2-mini-ico">⚙</div>
              <div className="home2-mini-k">Built to Scale</div>
              <div className="home2-mini-v">Perceptual Layer for AI.</div>
            </div>
        </div>
            <p className="home2-p">
              Next: Live demo with inspection tools + overlays.
            </p>
        </div>
      <WideSlideshow />
      </div>
      {/* SECTION 3 */}
      <div className="home2-section">
        <div className="home2-section-grid">
          <div>
            <h2 className="home2-h2">
              Recognition Pipeline
            </h2>
                             CHANGE THIS LAYOUT <br />

            <p className="home2-p">
              A readable, inspectable path from pixels → meaning.
            </p>
          </div>

          <div className="home2-mini-cards">
            <div className="home2-mini card">
              <div className="home2-mini-ico">☁</div>
              <div className="home2-mini-k">Splotches</div>
              <div className="home2-mini-v">Segment pixels into contrast-consistent regions.</div>
            </div>

            <div className="home2-mini card">
              <div className="home2-mini-ico">🔒</div>
              <div className="home2-mini-k">Fingerprint</div>
              <div className="home2-mini-v">Compute geometric + topological invariants.</div>
            </div>

            <div className="home2-mini card">
              <div className="home2-mini-ico">🧩</div>
              <div className="home2-mini-k">Match</div>
              <div className="home2-mini-v">Deterministically score against template library.</div>
            </div>

            <div className="home2-mini card">
              <div className="home2-mini-ico">⚙</div>
              <div className="home2-mini-k">Explain</div>
              <div className="home2-mini-v">Show why a result was chosen — no magic.</div>
            </div>
          </div>
            <p className="home2-p">
              Next: Live demo with inspection tools + overlays.
            </p>
        </div>
      </div>

      {/* SECTION 4 */}
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

      {/* SECTION 5 */}
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

            <div className="home2-mini-cards">
            <div className="home2-mini card">
                <div className="home2-mini-ico" aria-hidden="true">🔍</div>
                <div className="home2-mini-k">Validation overlays</div>
                <div className="home2-mini-v">
                Visualize structural evidence (symmetry, holes, ratios) behind every match.
                </div>
            </div>

            <div className="home2-mini card">
                <div className="home2-mini-ico" aria-hidden="true">🗂</div>
                <div className="home2-mini-k">Template library</div>
                <div className="home2-mini-v">
                Version templates like code and roll changes safely across environments.
                </div>
            </div>

            <div className="home2-mini card">
                <div className="home2-mini-ico" aria-hidden="true">📐</div>
                <div className="home2-mini-k">Deterministic scoring</div>
                <div className="home2-mini-v">
                Eliminate probabilistic drift and keep results stable under noise and style shifts.
                </div>
            </div>
            </div>

        </div>
      </div>
    </section>
  );
}
