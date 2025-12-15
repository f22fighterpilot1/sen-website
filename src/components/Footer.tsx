export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-inner">
                <span>© {new Date().getFullYear()} SymbolicEngine</span>
                <span>Deterministic Perception Infrastructure</span>
            </div>
        </footer>
    );
}
