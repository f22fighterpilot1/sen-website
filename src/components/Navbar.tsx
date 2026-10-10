
import { NavLink, Link } from "react-router-dom";
import { useEffect, useState } from "react";

const links = [
  { to: "/industries", label: "Industries" },
  { to: "/pricing", label: "Pricing" },
  { to: "/support", label: "Contact Us" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);

  const close = () => {
    setOpen(false);
    setMobileAboutOpen(false);
  };

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
        {/* LEFT: logo + navigation */}
        <div className="nav-left">
          <NavLink to="/" className="brand" onClick={close}>
            <span className="brand-mark" aria-hidden="true" />
            <span>SymbolicEngine</span>
          </NavLink>

          {/* Desktop navigation */}
          <nav
            className="nav-links desktop"
            aria-label="Primary navigation"
          >
            {/* About dropdown */}
            <div className="nav-dropdown">
              <NavLink
                to="/about"
                className="nav-link nav-dropdown-trigger"
                aria-haspopup="true"
              >
                About

              </NavLink>

              <div className="nav-dropdown-menu">
                <Link
                  to="/leadership"
                  className="nav-dropdown-item"
                >
                  Leadership
                </Link>
              </div>
            </div>

            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                className="nav-link"
                onClick={close}
              >
                {l.label}
              </NavLink>
            ))}
          </nav>
        </div>

        {/* RIGHT: desktop CTA */}
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

          <NavLink to="/support" className="btn btn-primary">
            Request Demo
          </NavLink>
        </div>

        {/* Mobile hamburger */}
        <button
          className="icon-btn mobile nav-hamburger"
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={toggle}
        >
          <span
            className="burger"
            data-open={open ? "true" : "false"}
          />
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
              {/* Mobile About section */}
              <div className="mobile-about">
                <button
                  className="mobile-link mobile-about-trigger"
                  type="button"
                  aria-expanded={mobileAboutOpen}
                  onClick={() =>
                    setMobileAboutOpen((value) => !value)
                  }
                >
                  <span>About</span>
                  <span
                    className="dropdown-arrow"
                    aria-hidden="true"
                  >
                    {mobileAboutOpen ? "▴" : "▾"}
                  </span>
                </button>

                {mobileAboutOpen && (
                  <div className="mobile-submenu">
                    <NavLink
                      to="/about"
                      className="mobile-link mobile-submenu-link"
                      onClick={close}
                    >
                      About SymbolicEngine
                    </NavLink>

                    <NavLink
                      to="/leadership"
                      className="mobile-link mobile-submenu-link"
                      onClick={close}
                    >
                      Leadership
                    </NavLink>
                  </div>
                )}
              </div>

              {links.map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  className="mobile-link"
                  onClick={close}
                >
                  {l.label}
                </NavLink>
              ))}
            </div>

            <div className="mobile-cta">
              <NavLink
                to="/login"
                className="mobile-link"
                onClick={close}
              >
                Log in
              </NavLink>

              <NavLink
                to="/support"
                className="btn btn-primary"
                onClick={close}
              >
                Request Demo
              </NavLink>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
