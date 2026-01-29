import { NavLink, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  return (
      <section className="page auth-page">
        <header className="auth-header">
          <h1>Customer portal</h1>
          <p className="auth-sub">
            Access is provisioned for enterprise and pilot customers.
          </p>
        </header>

        <div className="auth-shell">
          <div className="auth-card card">
            <div className="auth-form">
              <button
                  className="btn btn-primary auth-submit"
                  type="button"
                  onClick={() =>
                      navigate("/support", { state: { intent: "portal_access" } })
                  }
              >
                Request access
              </button>

              <p className="auth-foot">
                Prefer email? <strong>contact@symbolicengine.ai</strong>
              </p>

              <p className="auth-foot">
                Looking for a demo?{" "}
                <NavLink to="/support" className="auth-link">
                  Request a demo
                </NavLink>
                .
              </p>
            </div>
          </div>

          <aside className="auth-side">
            <div className="auth-side-card card">
              <div className="auth-side-k">Deterministic by design</div>
              <p className="auth-side-v">
                Same input → same output. Stable across deployments, audits, and time.
              </p>

              <div className="auth-side-k">Audit-ready</div>
              <p className="auth-side-v">
                Traceable decisions, replayable results, and explainable structure.
              </p>

              <div className="auth-side-k">Enterprise posture</div>
              <p className="auth-side-v">
                Built for controlled environments and compliance-driven workflows.
              </p>
            </div>
          </aside>
        </div>
      </section>
  );
}