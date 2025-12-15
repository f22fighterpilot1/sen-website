import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

const links = [
    { to: "/", label: "Home" },
    { to: "/how-it-works", label: "How it works" },
    { to: "/demo", label: "Demo" },
    { to: "/contact", label: "Contact" },
];

export default function Navbar() {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [open]);

    return (
        <header className="nav">
            <div className="container nav-inner">
                <NavLink to="/" className="brand" onClick={() => setOpen(false)}>
                    <span className="brand-mark" aria-hidden />
                    <span>SymbolicEngine</span>
                </NavLink>

                <nav className="nav-links desktop">
                    {links.map((l) => (
                        <NavLink key={l.to} to={l.to} className="nav-link">
                            {l.label}
                        </NavLink>
                    ))}
                    <NavLink to="/demo" className="btn btn-primary">
                        Launch Demo
                    </NavLink>
                </nav>
            </div>
        </header>
    );
}
