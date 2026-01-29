import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function Footer() {
    const [email, setEmail] = useState("");
    const [optIn, setOptIn] = useState(true);

    const onSubscribe = (e: React.FormEvent) => {
        e.preventDefault();

        const cleanEmail = email.trim();
        if (!cleanEmail) return;

        const subject = "SymbolicEngine News Signup";
        const body = [
            `Please add this email to SymbolicEngine news/updates:`,
            ``,
            `Email: ${cleanEmail}`,
            `Opt-in: ${optIn ? "Yes" : "No"}`,
            ``,
            `Source: Website footer`,
        ].join("\n");

        const mailto = `mailto:contact@symbolicengine.ai?subject=${encodeURIComponent(
            subject
        )}&body=${encodeURIComponent(body)}`;

        window.location.href = mailto;
    };

    return (
        <footer className="footer">
            <div className="footer-inner">
                <span className="footer-left" aria-hidden />
                <span className="footer-center">
          <section className="section subscribe">
            <div className="container subscribe-inner">
              <div className="subscribe-form">
                <label htmlFor="footer-email" className="subscribe-label">
                  Sign up for SymbolicEngine News
                </label>

                <form className="email-box" onSubmit={onSubscribe}>
                  <input
                      id="footer-email"
                      type="email"
                      placeholder="Business Email Address"
                      aria-label="Email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                  />
                  <button className="btn btn-primary" type="submit">
                    Subscribe
                  </button>
                </form>

                <label className="subscribe-checkbox">
                  <input
                      type="checkbox"
                      checked={optIn}
                      onChange={(e) => setOptIn(e.target.checked)}
                  />
                  <span>
                    Send me news about SymbolicEngine products, releases, and events.
                  </span>
                </label>
              </div>

              <p className="subscribe-disclaimer">
                By submitting this form, you acknowledge and agree that SymbolicEngine will
                process your personal information in accordance with the{" "}
                  <NavLink to="/privacy" className="footer-link">
                  Privacy Policy
                </NavLink>
                .
              </p>
            </div>
          </section>

          <section className="footer-extra">
            <div className="container footer-extra-inner">
              <div className="footer-extra-left footer-legal-row">
                <span className="footer-copy">© 2026 SymbolicEngine</span>

                <NavLink to="/terms-of-service" className="footer-link">
                  Terms of Service
                </NavLink>

                <NavLink to="/privacy" className="footer-link">
                  Privacy Policy
                </NavLink>

                <NavLink to="/login" className="footer-link">
                  Licensing
                </NavLink>
              </div>

              <div className="footer-extra-right">
                <span className="footer-right">Deterministic Perception</span>
              </div>
            </div>
          </section>
        </span>
            </div>
        </footer>
    );
}