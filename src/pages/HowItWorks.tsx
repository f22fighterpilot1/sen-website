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
            SymbolicEngine supports deterministic workflows for validating
            changes and verifying outcomes before deployment.
          </p>

          <ul className="tutorial-bullets">
            <li>Deterministic validation across environments</li>
            <li>Repeatable, version-controlled configurations</li>
            <li>Traceable changes with clear diffs and reviews</li>
            <li>Safer collaboration through predictable outputs</li>
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

          <p>
            Interact with your platforms and services through a consistent model.
            Define resources once, reuse patterns, and scale governance without
            adding friction to delivery.
          </p>

          <h2>Standardize your deployment workflow</h2>
          
          <p>
            Compose configurations into reusable modules and keep your workflow
            consistent from development through production. Deterministic checks
            help ensure what you planned is what you deploy.
          </p>

          <h2>Collaborate</h2>

          <p>
            Interact with your platforms and services through a consistent model.
            Define resources once, reuse patterns, and scale governance without
            adding friction to delivery.
          </p>

          <h2>Quick Start</h2>

          <p>
            Compose configurations into reusable modules and keep your workflow
            consistent from development through production. Deterministic checks
            help ensure what you planned is what you deploy.
          </p>
          <h2>Next Steps</h2>

          <p>
            Now that you are familiar with its core concepts, you are ready to implement SymbolicEngine into your projects.
          </p>
        </div>
      </div>
    </section>
    );
}
