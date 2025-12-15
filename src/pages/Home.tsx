import { NavLink } from "react-router-dom";

const PIPELINE = [
    {
        n: "1",
        title: "Splotches",
        desc: "Segment pixels into contrast-consistent regions.",
    },
    {
        n: "2",
        title: "Fingerprint",
        desc: "Compute geometric + topological invariants.",
    },
    {
        n: "3",
        title: "Match",
        desc: "Deterministically score against template library.",
    },
    {
        n: "4",
        title: "Explain",
        desc: "Show why a result was chosen — no magic.",
    },
];

export default function Home() {
    return (
        <section className="hero">
            <div className="hero-grid">
                {/* LEFT COLUMN */}
                <div>
                    <div className="pill">
                        <span className="dot" aria-hidden="true" />
                        Perceptual AI Infrastructure • Deterministic • Explainable
                    </div>

                    <h1>Perceptual AI, Done Deterministically.</h1>

                    <p className="lead">
                        SymbolicEngine (SEN) is a geometry-aware perceptual system that recognizes symbols by
                        structure, topology, and invariants — not probabilities.
                    </p>

                    <div className="hero-actions">
                        <NavLink to="/demo" className="btn btn-primary">
                            Explore the Demo
                        </NavLink>
                        <NavLink to="/how-it-works" className="btn btn-ghost">
                            How it works
                        </NavLink>
                    </div>

                    <div className="hero-metrics">
                        <div className="metric">
                            <div className="metric-k">Deterministic</div>
                            <div className="metric-v">Traceable decisions</div>
                        </div>
                        <div className="metric">
                            <div className="metric-k">Geometry-first</div>
                            <div className="metric-v">Holes, symmetry, ratios</div>
                        </div>
                        <div className="metric">
                            <div className="metric-k">Built to scale</div>
                            <div className="metric-v">Perceptual layer for AI</div>
                        </div>
                    </div>
                </div>

                {/* RIGHT COLUMN */}
                <aside className="hero-panel card" aria-label="Recognition Pipeline">
                    <div className="panel-head">
                        <div className="panel-title">Recognition Pipeline</div>
                        <div className="panel-sub">A readable, inspectable path from pixels → meaning</div>
                    </div>

                    <div className="pipeline">
                        {PIPELINE.map((s) => (
                            <div key={s.n} className="pipe-step">
                                <div className="pipe-badge" aria-hidden="true">
                                    {s.n}
                                </div>
                                <div>
                                    <div className="pipe-title">{s.title}</div>
                                    <p className="pipe-desc">{s.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="panel-foot">
                        <span className="hint">Next: Live demo with inspection tools + overlays.</span>
                    </div>
                </aside>
            </div>

            {/* WHY SEN SECTION */}
            <div className="section">
                <h2>Why SEN</h2>
                <p className="muted">
                    SEN is built to behave like a perceptual system: structural, stable, inspectable, and
                    fast. It’s not “AI that guesses” — it’s AI that understands shape.
                </p>

                <div className="cards">
                    <div className="card card-pad">
                        <h3>Deterministic</h3>
                        <p>Every output has a concrete reason. Debuggable, auditable, controllable.</p>
                    </div>

                    <div className="card card-pad">
                        <h3>Robust to Noise</h3>
                        <p>
                            Structure survives blur, compression, and style variance better than raw pixels.
                        </p>
                    </div>

                    <div className="card card-pad">
                        <h3>Composable</h3>
                        <p>
                            Designed to plug into larger systems as a perception layer or validation engine.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
