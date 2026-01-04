import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // TODO: wire to real auth
    // For now, you can log or show a toast
    console.log("login", { email, password });
  };

  return (
    <section className="page auth-page">
      <header className="auth-header">
        <h1>Log in</h1>
        <p className="auth-sub">
          Access the SEN console and deterministic inspection tools.
        </p>
      </header>

      <div className="auth-shell">
        <div className="auth-card card">
          <form className="auth-form" onSubmit={onSubmit}>
            <label className="auth-label" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              className="auth-input"
              type="email"
              autoComplete="email"
              inputMode="email"
              placeholder="name@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <label className="auth-label" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              className="auth-input"
              type="password"
              autoComplete="current-password"
              placeholder="••••••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <div className="auth-row">
              <label className="auth-check">
                <input type="checkbox" />
                <span>Remember me</span>
              </label>

              <NavLink to="/forgot-password" className="auth-link">
                Forgot password?
              </NavLink>
            </div>

            <button className="btn btn-primary auth-submit" type="submit">
              Log in
            </button>

            <p className="auth-foot">
              Don’t have access?{" "}
              <NavLink to="/create-account" className="auth-link">
                Request an account
              </NavLink>
              .
            </p>
          </form>
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
