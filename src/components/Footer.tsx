export default function Footer() {
    return (
        <footer className="footer">
<div className="footer-inner">
  <span className="footer-left">© 2025 SymbolicEngine</span>

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
                process your personal information in accordance with the Privacy Policy.
                </p>
            </div>
            </section>
  </span>

  <span className="footer-right">
        Deterministic Perception
  </span>
</div>



        </footer>
    );
}
