import { NavLink } from "react-router-dom";
import WideSlideshow from "../components/WideSlideshow";
import shuttleVideo from "../../public/media/videos/space_shuttle_trim.mp4";

// const LOGOS = ["Acme", "Waypoint", "SeatGeek", "Lufthansa", "Indeed", "GSK", "Databricks"];

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
                        <source src={shuttleVideo} type="video/mp4" />
                    </video>
                    <div className="home2-hero-overlay" />
                </div>

                <div className="home2-hero-grid">
                    <div>
                        <h1>
                            The world’s first
                            <br />
                            deterministic AI
                            <br />
                            for precise vision.
                        </h1>

                        <div className="home2-cta">
                            <p className="home2-sub">
                                SymbolicEngine's (SEN) groundbreaking deterministic visual evidence uses geometry instead of machine learning, allowing it to show exactly why it made each decision.
                                <br /> <br />
                                <NavLink to="/support" className="btn btn-primary">
                                    Request demo
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
                <div className="home2-section-grid">
                    <div>
                        <h2 className="home2-h2">Why SEN</h2>
                        <p className="home2-p">
                            Normal AI systems give you extracted text. SEN's unparalleled visual awareness stands out for its ability to shows its work. Deterministic by design: same input, same output, driven by measurable geometry, with traceable decisions, drop-in integration, and predictable scale.
                        </p>
                    </div>
                    <div className="home2-mini-cards">
                        <div className="home2-mini card">
                            <div className="home2-mini-ico">🎯</div>
                            <div className="home2-mini-k">Deterministic</div>
                            <div className="home2-mini-v">
                                Same input → same output. Repeatable across environments and time.
                            </div>
                        </div>

                        <div className="home2-mini card">
                            <div className="home2-mini-ico">🧾</div>
                            <div className="home2-mini-k">Auditable</div>
                            <div className="home2-mini-v">
                                Traceable decisions with explicit confidence and abstention.
                            </div>
                        </div>
                        <div className="home2-mini card">
                            <div className="home2-mini-ico">🧩</div>
                            <div className="home2-mini-k">Integration-Ready</div>
                            <div className="home2-mini-v">
                                Deployable across applications, workflows, and validation pipelines.
                            </div>
                        </div>

                        <div className="home2-mini card">
                            <div className="home2-mini-ico">📐</div>
                            <div className="home2-mini-k">Geometry First</div>
                            <div className="home2-mini-v">
                                Holes, symmetry, ratios, and topology become measurable, explainable evidence.
                            </div>
                        </div>

                        <div className="home2-mini card">
                            <div className="home2-mini-ico">⚙️</div>
                            <div className="home2-mini-k">Built to Scale</div>
                            <div className="home2-mini-v">
                                Production-oriented performance and predictable behavior at volume.
                            </div>
                        </div>
                    </div>
                </div>

                <WideSlideshow />
            </div>

            {/* SECTION 3 */}
            <div className="home2-section home2-pipeline-section">
                <div className="home2-section-grid">
                    <div>
                        <h2 className="home2-h2">Recognition pipeline</h2>
                        <p className="home2-p">SEN's fully conscious decision layer processes images while providing teams extensive and precise evidence for the most critical projects.</p>
                    </div>
                </div>
            </div>
            {/* SECTION 4 */}
            <div className="home2-section">
                <div className="home2-section-grid">
                    <div className="home2-mini-cards">
                        <div className="home2-mini card">
                            <div className="home2-mini-ico">📦</div>
                            <div className="home2-mini-k">Multiple Integration Paths</div>
                            <div className="home2-mini-v">
                                Deploy as a managed API, cloud SDK,
                                <br />
                                container, or embedded SDK.
                            </div>
                        </div>

                        <div className="home2-mini card">
                            <div className="home2-mini-ico">🔒</div>
                            <div className="home2-mini-k">Trust & Security</div>
                            <div className="home2-mini-v">Verified decisions for high-stakes workflows.</div>
                        </div>
                        <div className="home2-mini card">
                            <div className="home2-mini-ico">⚖️</div>
                            <div className="home2-mini-k">Governed</div>
                            <div className="home2-mini-v">Clear what is stable. Escalate what is risky.</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* SECTION 5 */}
            <div className="home2-section">
                <div className="home2-section-grid">
                    <div>
                        <h2 className="home2-h2">
                            Use SEN's deterministic workflow to cut risk and move faster
                        </h2>
                        <p className="home2-p">
                            Replace AI that guesses with AI you can debug: inspect matches, compare
                            invariants, and prove why a decision was made.
                        </p>
                    </div>

                    <div className="home2-mini-cards">
                        <div className="home2-mini card">
                            <div className="home2-mini-ico" aria-hidden="true">
                                🔍
                            </div>
                            <div className="home2-mini-k">Validation overlays</div>
                            <div className="home2-mini-v">
                                Visualize structural evidence (symmetry, contours, ratios) behind every match.
                            </div>
                        </div>

                        <div className="home2-mini card">
                            <div className="home2-mini-ico" aria-hidden="true">
                                🗂
                            </div>
                            <div className="home2-mini-k">Template library</div>
                            <div className="home2-mini-v">
                                Version SEN's templates like code and roll changes safely across environments.
                            </div>
                        </div>

                        <div className="home2-mini card">
                            <div className="home2-mini-ico" aria-hidden="true">
                                📐
                            </div>
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