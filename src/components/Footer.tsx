import { NavLink } from "react-router-dom";
export default function Footer() {
    return (
        <footer className="footer">
        <div className="footer-inner">
        <span className="footer-left" aria-hidden />
        <span className="footer-center">
            <section className="section subscribe">
            <div className="container subscribe-inner">
                <div className="subscribe-form">
                <label htmlFor="email" className="subscribe-label">
                    Sign up for SymbolicEngine News
                </label>

                <div className="email-box">
                    <input
                    id="email"
                    type="email"
                    placeholder="Business Email Address"
                    aria-label="Email address"
                    />
                    <button className="btn btn-primary">Subscribe</button>
                </div>

                <label className="subscribe-checkbox">
                    <input type="checkbox" />
                    <span>
                    Send me news about SymbolicEngine products, releases, and events.
                    </span>
                </label>
                </div>
                <p className="subscribe-disclaimer">
                By submitting this form, you acknowledge and agree that SymbolicEngine will
                process your personal information in accordance with the <NavLink to="/privacy" className="footer-link">
  Privacy Policy
</NavLink>
.
                </p>
            </div>
            </section>
            <section className="footer-extra">
            <div className="container footer-extra-inner">
                <div className="footer-extra-left">
                {/* LEFT COLUMN CONTENT */}
                <span className="footer-left">© 2025 SymbolicEngine</span>
                {/*<strong>Resources</strong>
                <ul>
                    <li><a href="/how-it-works">How it works</a></li>
                    <li><a href="/industries">Industries</a></li>
                    <li><a href="/pricing">Pricing</a></li>
                </ul>*/}

                </div>
                <div className="footer-extra-right">
                {/* RIGHT COLUMN CONTENT */}
                
                <span className="footer-right">Deterministic Perception</span>
                {/*<strong>Company</strong>
                <ul>
                    <li><a href="/support">Support</a></li>
                    <li><a href="/login">Log in</a></li>
                    <li><a href="/createaccount">Create account</a></li>
                </ul> */}
                </div>
            </div>
            </section>
        </span>
        </div>
        </footer>
    );
}
