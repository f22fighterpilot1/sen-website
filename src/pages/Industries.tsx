type IndustryCard = {
  title: string;
  description: string;
  href?: string;
  icon: React.ReactNode;
};

const cards: IndustryCard[] = [
  {
    title: "Aerospace and Defense",
    description:
      "Deterministic recognition of symbols, markings, and schematics for safety-critical and classified systems.",
    href: "#healthcare",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M12 21s-7-4.35-7-10a4 4 0 0 1 7-2 4 4 0 0 1 7 2c0 5.65-7 10-7 10z"
        />
      </svg>
    ),
  },
    {
    title: "Financial services",
    description:
      "Exact, auditable recognition of forms, signatures, and stamps to meet regulatory and compliance requirements.",
    href: "#financial",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M4 4h16v4H4V4zm0 6h10v10H4V10zm12 0h4v10h-4V10z"
        />
      </svg>
    ),
  },
  {
    title: "Manufacturing",
    description:
      "Structure-based identification of part markings and serials for reliable inspection under noise, wear, and variation.",
    href: "#manufacturing",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M12 2a4 4 0 0 0-4 4v2H6a4 4 0 0 0-4 4v8h20v-8a4 4 0 0 0-4-4h-2V6a4 4 0 0 0-4-4zm-2 6V6a2 2 0 1 1 4 0v2h-4z"
        />
      </svg>
    ),
  },
  {
    title: "Healthcare",
    description:
      "Deterministic interpretation in clinical workflows, providing more connected care.",
    href: "#healthcare",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M12 21s-7-4.35-7-10a4 4 0 0 1 7-2 4 4 0 0 1 7 2c0 5.65-7 10-7 10z"
        />
      </svg>
    ),
  },
  {
    title: "Media and entertainment",
    description:
      "Consistent recognition for graphics across rendering styles and resolutions.",
    href: "#media",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M8 5v14l11-7L8 5z"
        />
      </svg>
    ),
  },
  {
    title: "Retail",
    description:
      "Reliable identification across stores, devices, and channels.",
    href: "#retail",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M7 7h14l-2 13H9L7 7zm-3 0h2l1-3h12l-1 3H6z"
        />
      </svg>
    ),
  },
  {
    title: "Telecom",
    description:
      "Interpretation of network diagrams and visual identifiers used in infrastructure planning and operations.",
    href: "#manufacturing",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M12 2a4 4 0 0 0-4 4v2H6a4 4 0 0 0-4 4v8h20v-8a4 4 0 0 0-4-4h-2V6a4 4 0 0 0-4-4zm-2 6V6a2 2 0 1 1 4 0v2h-4z"
        />
      </svg>
    ),
  },
  {
    title: "Communications and Media",
    description:
      "Exact understanding of symbols and diagrams in publishing, moderation, and distribution pipelines.",
    href: "#media",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M8 5v14l11-7L8 5z"
        />
      </svg>
    ),
  },
  {
    title: "Energy and Utilities",
    description:
      "Predictable recognition in safety-critical infrastructure environments.",
    href: "#public",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M12 2l9 5v2H3V7l9-5zm-7 9h14v9H5v-9zm2 2v5h2v-5H7zm4 0v5h2v-5h-2zm4 0v5h2v-5h-2z"
        />
      </svg>
    ),
  },
  {
    title: "Higher Education",
    description:
      "Deterministic assistance for teaching, research, and reproducible analysis.",
    href: "#retail",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M7 7h14l-2 13H9L7 7zm-3 0h2l1-3h12l-1 3H6z"
        />
      </svg>
    ),
  }
];

export default function Industries() {
  return (
    <section className="page industries-page">
      <header className="industries-header">
        <h1>Products built for how your industry works</h1>
      </header>

      <div className="industries-grid">
        {cards.map((c) => (
          <article key={c.title} className="industry-card">
            <div className="industry-icon" aria-hidden="true">
              {c.icon}
            </div>

            <h3 className="industry-title">{c.title}</h3>
            <p className="industry-desc">{c.description}</p>

            <a className="industry-link" href={c.href ?? "#"}>
              Learn more <span aria-hidden="true">→</span>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
