import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: wire to real signup flow
    console.log("signup", { email, company });
  };

  return (
    <section className="signup-page">
      <div className="signup-grid">
        {/* LEFT */}
        <div className="signup-left">
          <div className="signup-brand">
            <span className="brand-mark" aria-hidden />
            <span className="signup-brand-name">SymbolicEngine Console</span>
          </div>

          <h1 className="signup-title">
            Get started in minutes with
            <br />
            deterministic perception
          </h1>

          <p className="signup-sub">
            Create an account to access the SEN console, inspection tools, and audit-ready workflows.
          </p>

          <div className="signup-actions">
<NavLink to="/create-account" className="btn btn-primary">
  Create an account →
</NavLink>


            <NavLink to="/login" className="btn signup-btn-secondary">
              Sign in
            </NavLink>
          </div>

          {/* Minimal form (optional but practical) */}
          <form className="signup-form" onSubmit={onSubmit}>
            <label className="signup-label" htmlFor="signup-email">
              Business email
            </label>
            <input
              id="signup-email"
              className="signup-input"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@company.com"
              autoComplete="email"
              required
            />

            <label className="signup-label" htmlFor="signup-company">
              Company
            </label>
            <input
              id="signup-company"
              className="signup-input"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              placeholder="Company name"
              autoComplete="organization"
              required
            />
          </form>

          <div className="signup-foot">
            <span className="signup-status">
              <span className="signup-dot" aria-hidden />
              System operational
            </span>

            <div className="signup-links">
              <a className="signup-link" href="#" onClick={(e) => e.preventDefault()}>
                Terms of Service
              </a>
              <a className="signup-link" href="#" onClick={(e) => e.preventDefault()}>
                Privacy Policy
              </a>
              <a className="signup-link" href="#" onClick={(e) => e.preventDefault()}>
                Documentation
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <aside className="signup-right" aria-label="Console preview">
          <div className="signup-right-inner">
            {/* Option A: use an image (recommended) */}
            <img
              src="/src/home_image.png"
              alt=""
              className="signup-preview-image"
            />

            {/* If you prefer to keep it as a “mock UI” instead, tell me and I’ll swap it. */}
          </div>
        </aside>
      </div>
    </section>
  );
}
