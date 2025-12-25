export default function HowItWorks() {
    return (
    <section className="section">
    <h2>What is SymbolicEngine?</h2>
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
              src="https://www.youtube.com/watch?v=-6rVV-Clw3E"
              title="Tutorial video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>

        {/* Content */}
        <div className="tutorial-body">
          <p>
            Infrastructure as Code (IaC) tools let you define and manage
            infrastructure through configuration files rather than a graphical
            interface. This approach helps keep your infrastructure consistent,
            auditable, and repeatable across environments.
          </p>

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

          <h2>Manage any infrastructure</h2>

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

          {/* Diagram / image box */}
          <div className="tutorial-media card tutorial-diagram">
            {/* Replace with your image path */}
            <img
              src="/images/tutorial-diagram.png"
              alt="Workflow diagram"
              loading="lazy"
            />
          </div>

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
