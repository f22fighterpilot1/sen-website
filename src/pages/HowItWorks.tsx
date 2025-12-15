export default function HowItWorks() {
    return (
        <section className="page">
            <h1>How SymbolicEngine Works</h1>

            <ol className="steps">
                <li>
                    <strong>Visual Segmentation</strong>
                    <p>Pixels are grouped into contrast-consistent regions (“splotches”).</p>
                </li>

                <li>
                    <strong>Geometric Fingerprinting</strong>
                    <p>
                        Each splotch is reduced to invariant properties like holes, symmetry,
                        mass distribution, and ratios.
                    </p>
                </li>

                <li>
                    <strong>Deterministic Matching</strong>
                    <p>
                        Fingerprints are matched against a curated template library using
                        weighted geometric similarity.
                    </p>
                </li>
            </ol>
        </section>
    );
}
