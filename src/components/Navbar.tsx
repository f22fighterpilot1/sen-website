import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

const links = [
  { to: "/how-it-works", label: "How it works" },
  { to: "/industries", label: "Industries" },
  { to: "/pricing", label: "Pricing" },
  { to: "/support", label: "Support" },
];


export default function Navbar() {
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);
  const toggle = () => setOpen((v) => !v);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="nav">
      <div className="container nav-inner">
        {/* LEFT: logo + tabs */}
        <div className="nav-left">
          <NavLink to="/" className="brand" onClick={close}>
            <span className="brand-mark" aria-hidden />
            <span>SymbolicEngine</span>
          </NavLink>

          {/* Desktop navigation */}
          <nav className="nav-links desktop" aria-label="Primary navigation">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                className="nav-link"
                onClick={close}
              >
                {l.label}
              </NavLink>
            ))}
          </nav>
        </div>

        {/* RIGHT: CTA (desktop only) */}
<div className="nav-right desktop nav-cta">
<NavLink to="/login" className="nav-link nav-login">
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
  >
    <path
      fill="currentColor"
      d="M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5Zm0 2c-4.42 0-8 2.24-8 5v1h16v-1c0-2.76-3.58-5-8-5Z"
    />
  </svg>
  <span>Log in</span>
</NavLink>


  <NavLink to="/demo" className="btn btn-primary">
    Launch Demo
  </NavLink>
</div>


        {/* Mobile hamburger button (mobile only) */}
        <button
          className="icon-btn mobile"
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={toggle}
        >
          <span className="burger" data-open={open ? "true" : "false"} />
        </button>
      </div>

      {/* Mobile menu overlay */}
      {open && (
        <div className="mobile-sheet" role="dialog" aria-modal="true">
          <div className="mobile-sheet-inner">
            <div className="mobile-top">
              <span className="mobile-title">Navigate</span>
              <button
                className="icon-btn"
                type="button"
                aria-label="Close menu"
                onClick={close}
              >
                ✕
              </button>
            </div>

            <div className="mobile-links">
              {links.map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  end={l.to === "/"}
                  className="mobile-link"
                  onClick={close}
                >
                  {l.label}
                </NavLink>
              ))}
            </div>

            <div className="mobile-cta">
              <NavLink to="/demo" className="btn btn-primary" onClick={close}>
                Launch Demo
              </NavLink>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
