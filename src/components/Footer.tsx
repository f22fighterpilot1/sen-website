import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function Footer() {
    const [email, setEmail] = useState("");
    const [optIn, setOptIn] = useState(true);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const onSubscribe = async (e: React.FormEvent) => {
        e.preventDefault();

        const cleanEmail = email.trim();

        if (!cleanEmail) return;

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail)) {
            setSubmitError("Please enter a valid email address.");
            return;
        }

        if (!optIn) {
            setSubmitError("Please confirm that you want to receive SymbolicEngine news.");
            return;
        }

        setIsSubmitting(true);
        setSubmitError("");
        setSubmitted(false);

        try {
            const response = await fetch("/api/subscribe", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: cleanEmail,
                    optIn,
                }),
            });

            const text = await response.text();

            let result: { error?: string; message?: string } = {};

            if (text) {
                try {
                    result = JSON.parse(text);
                } catch {
                    throw new Error(`Server error (${response.status}).`);
                }
            }

            if (!response.ok) {
                throw new Error(
                    result.error || "We couldn't submit your subscription request."
                );
            }

            setSubmitted(true);
            setEmail("");
        } catch (error) {
            console.error("Newsletter subscription failed:", error);

            setSubmitError(
                error instanceof Error
                    ? error.message
                    : "We couldn't submit your subscription request."
            );
        } finally {
            setIsSubmitting(false);
        }
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

                  <button
                      className="btn btn-primary"
                      type="submit"
                      disabled={isSubmitting}
                  >
                    {isSubmitting ? "Subscribing..." : "Subscribe"}
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

                  {submitError && (
                      <div className="support-error" role="alert">
                          {submitError}
                      </div>
                  )}

                  {submitted && (
                      <div className="subscribe-success" role="status">
                          Thanks. Your subscription request has been received.
                      </div>
                  )}
              </div>

              <p className="subscribe-disclaimer">
                By submitting this form, you acknowledge and agree that
                SymbolicEngine will process your personal information in
                accordance with the{" "}
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