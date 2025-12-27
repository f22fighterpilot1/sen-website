import { NavLink } from "react-router-dom";

export default function CreateAccount() {
  return (
    <section className="ca-page">
      <div className="ca-card">
        <div className="ca-logo" aria-hidden>
          <span className="ca-mark" />
        </div>

        <h1 className="ca-title">Create SymbolicEngine Account</h1>
        <p className="ca-sub">Enter your email to continue.</p>

        <form className="ca-form">
          <label className="ca-label" htmlFor="ca-email">
            Email
          </label>
          <input id="ca-email" type="email" className="ca-input" required />

          <p className="ca-legal">
            By continuing, you agree to our{" "}
            <a href="#" onClick={(e) => e.preventDefault()}>Terms of Service</a>{" "}
            and{" "}
            <a href="#" onClick={(e) => e.preventDefault()}>Privacy Policy</a>.
          </p>

          <button type="submit" className="btn btn-primary ca-submit">
            Continue →
          </button>
        </form>

        <div className="ca-divider">
          <span>OR</span>
        </div>

        <button className="ca-oauth" type="button">
          <span className="ca-oauth-icon" aria-hidden>🐙</span>
          Continue with GitHub
        </button>

        <div className="ca-footer">
          Already have an account? <NavLink to="/login">Sign in →</NavLink>
        </div>
      </div>
    </section>
  );
}
