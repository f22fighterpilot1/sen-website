// src/pages/ForgotPassword.tsx
import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: hook to real password reset flow
    console.log("forgot-password", { email });
  };

  return (
    <section className="fp-page">
      <div className="fp-card">
        <div className="fp-logo" aria-hidden="true">
          {/* Simple mark. Swap with your real logo SVG if you want */}
          <span className="fp-mark">⟡</span>
        </div>

        <h1 className="fp-title">Forgot Password?</h1>
        <p className="fp-sub">
          Enter your email address to receive password
          <br />
          reset instructions
        </p>

        <form className="fp-form" onSubmit={onSubmit}>
          <label className="fp-label" htmlFor="fp-email">
            Email address<span className="fp-req">*</span>
          </label>

          <input
            id="fp-email"
            type="email"
            className="fp-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder=""
            required
            autoComplete="email"
          />

          <button type="submit" className="fp-primary">
            Continue
          </button>
        </form>

        <div className="fp-back">
          <NavLink to="/login" className="fp-back-link">
            Back to sign in
          </NavLink>
        </div>
      </div>
    </section>
  );
}
