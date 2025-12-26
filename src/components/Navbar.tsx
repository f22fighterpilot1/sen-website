import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

const links = [
    { to: "/", label: "Home" },
    { to: "/secondHome", label: "SecondHome" },
    { to: "/how-it-works", label: "How it works" },
    { to: "/industries", label: "Industries" },
    //{ to: "/demo", label: "Demo" },
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
            <div className="container nav-left">
<div className="nav-left">
  <NavLink to="/" className="brand" onClick={close}>
    <span className="brand-mark" aria-hidden />
    <span>SymbolicEngine</span>
  </NavLink>

  <nav className="nav-links desktop" aria-label="Primary navigation">
    {links.map((l) => (
      <NavLink
        key={l.to}
        to={l.to}
        end={l.to === "/"}
        className="nav-link"
      >
        {l.label}
      </NavLink>
    ))}
  </nav>
</div>

<NavLink to="/demo" className="btn btn-primary desktop">
  Launch Demo
</NavLink>


                {/* Mobile hamburger button */}
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
                                    className="mobile-link"
                                    onClick={close}
                                >
                                    {l.label}
                                </NavLink>
                            ))}
                        </div>

                        <div className="mobile-cta">
                            <NavLink
                                to="/demo"
                                className="btn btn-primary"
                                onClick={close}
                            >
                                Launch Demo
                            </NavLink>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}
