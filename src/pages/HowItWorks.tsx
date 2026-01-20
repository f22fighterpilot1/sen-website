export default function HowItWorks() {
    return (
    <section className="section">
    <h1>What is SymbolicEngine?</h1>
      <div className="container tutorial">
        {/* Reference line */}
        <p className="tutorial-ref">
          Reference this often?{" "}
          <a href="/signup" className="tutorial-ref-link">
            Create an account
          </a>{" "}
          to bookmark tutorials.
        </p>

        {/* Video box */}
        <div className="tutorial-media card">
          <div className="tutorial-video">
            {/* Replace src with your real embed URL (YouTube/Vimeo/etc.) */}
            <iframe
              src="/src/media/videos/Drew_Cyber_Careers.mp4"
              title="Tutorial video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>

        {/* Content */}
        <div className="tutorial-body">

          <p>
            SymbolicEngine performs deterministic symbol recognition and verification.
            Given the same input, the output is identical.
          </p>

          <ul className="tutorial-bullets">
            <li>Deterministic recognition and scoring</li>
            <li>Repeatable results across environments</li>
            <li>Explicit confidence and abstention rules</li>
            <li>No model drift or hidden behavior</li>
          </ul>

          <section className="home2-section">
              <h2 className="home2-h2">Under the Hood</h2>
              <div className="workflow-grid">
                <figure className="workflow-item">
                  <img src="/src/media/images/eyeball.png" alt="Visual matching" className="workflow-img" />
                  <figcaption>1. Visual Input</figcaption>
                </figure>
                
                <figure className="workflow-item">
                  <img src="/src/media/images/symbol_decomposition.png" alt="Symbol decomposition" className="workflow-img" />
                  <figcaption>2. Symbol Decomposition</figcaption>
                </figure>

                <figure className="workflow-item">
                  <img src="/src/media/images/structural_normalization.png" alt="Structural normalization" className="workflow-img" />
                  <figcaption>3. Structural Normalization</figcaption>
                </figure>

                <figure className="workflow-item">
                  <img src="/src/media/images/encoding.png" alt="Structural encoding" className="workflow-img" />
                  <figcaption>4. Encoding</figcaption>
                </figure>

                <figure className="workflow-item">
                  <img src="/src/media/images/deterministic_comparison.png" alt="Deterministic comparison" className="workflow-img" />
                  <figcaption>5. Deterministic Comparison</figcaption>
                </figure>

                <figure className="workflow-item">
                  <img src="/src/media/images/structural_validity_perfect.png" alt="Structural validity check" className="workflow-img" />
                  <figcaption>6. Validity Assessment</figcaption>
                </figure>

                <figure className="workflow-item">
                  <img src="/src/media/images/verified_symbol_output.png" alt="Repeatable scoring" className="workflow-img" />
                  <figcaption>7. Verified Output</figcaption>
                </figure>
              </div>

          </section>

          <h2>Standardize Recognition and Verification</h2>

          <p>
            Recognition behaves the same everywhere.
            Local tests and production match.
            What you validate is what you deploy.
          </p>

          <h2>Collaborate with Confidence</h2>

          <p>
            Templates and rules are explicit.
            Changes can be reviewed and tested.
            No silent behavior changes.
          </p>

          <h2>Quick Start</h2>

          <p>
            Integrate via API, SDK, or container.
            Start recognizing symbols immediately.
            Enable verification as needed.
          </p>
          <h2>Next Steps</h2>

          <p>
            You are ready to integrate SymbolicEngine.
            Apply it to recognition, verification, and trust-critical workflows.
          </p>
        </div>
      </div>
    </section>
    );
}
