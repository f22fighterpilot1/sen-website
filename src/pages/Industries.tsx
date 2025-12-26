// industries.tsx
import React, { useEffect, useRef, useState } from "react";

type IndustryModalHeading = "To investors" | "To customers" | "To competitors";

type IndustryModalContent = {
  title: string;
  sections: {
    heading: IndustryModalHeading;
    paragraphs: string[];
  }[];
};

type IndustryCard = {
  id: string; // stable key + modal lookup
  title: string;
  description: string;
  href?: string;
  icon: React.ReactNode;
};

const modalContent: Record<string, IndustryModalContent> = {
  "aerospace-defense": {
    title: " ",
    sections: [
      {
        heading: "To investors",
        paragraphs: [
          "Aerospace and defense systems cannot tolerate probabilistic interpretation. When symbols, markings, or schematics are misread, the outcome is not a degraded user experience—it is mission failure, asset loss, or human death.",
          "SEN introduces something this sector has never had at scale: deterministic visual recognition. Same input, same output, forever. No training drift, no silent regressions, no stochastic hallucinations.",
          "This is the missing substrate for safety-critical autonomy, ISR analysis, weapons validation, maintenance diagnostics, and classified documentation pipelines. SEN is not a feature upgrade; it is a new class of infrastructure that defense modernization budgets are explicitly starving for and will fund aggressively once proven.",
        ],
      },
      {
        heading: "To customers",
        paragraphs: [
          "If you are operating aircraft, spacecraft, defense platforms, or classified systems, probabilistic vision models are already a liability on your balance sheet—you just haven’t paid the price yet.",
          "SEN guarantees that a symbol, marking, or schematic element is interpreted identically across time, deployments, air-gapped systems, and audit cycles. No retraining. No data leakage. No unexplained output changes.",
          "SEN can run offline, in classified environments, and under strict verification regimes. This is how you eliminate ambiguity from safety-critical interpretation and finally align visual recognition with the engineering standards you already enforce everywhere else.",
        ],
      },
      {
        heading: "To competitors",
        paragraphs: [
          "If your system relies on neural inference, confidence thresholds, or retraining cycles, you are unfit for aerospace and defense. Period.",
          "You cannot prove determinism, you cannot guarantee repeatability, and you cannot pass deep forensic audits without excuses.",
          "SEN does not “approximate” understanding—it encodes structure. That means your models will be sidelined to non-critical tooling while SEN becomes the backbone of certified pipelines.",
          "You are competing with randomness. SEN is competing with physics.",
        ],
      },
    ],
  },

  "financial-services": {
    title: " ",
    sections: [
      {
        heading: "To investors",
        paragraphs: [
          "Financial institutions are suffocating under compliance overhead because their visual processing stack is fundamentally non-auditable. ML-based OCR and document understanding systems cannot explain why a form was interpreted a certain way—only that it probably was.",
          "SEN changes that permanently. Deterministic recognition of forms, signatures, stamps, and symbols enables exact replayability, chain-of-custody verification, and regulator-proof audit trails.",
          "This directly translates into lower compliance cost, faster onboarding, and reduced regulatory exposure. SEN converts a perpetual compliance tax into a defensible competitive advantage.",
        ],
      },
      {
        heading: "To customers",
        paragraphs: [
          "If you process financial documents, signatures, or regulatory forms, you already know the pain: false positives, false negatives, manual review backlogs, and auditors asking questions your systems cannot answer.",
          "SEN eliminates ambiguity. Every recognition result is structurally derived, reproducible, and explainable. When regulators ask why something was accepted or rejected, SEN gives a precise answer—not a probability score.",
          "This is how you pass audits faster, reduce fraud without blocking legitimate customers, and finally trust automation in regulated workflows.",
        ],
      },
      {
        heading: "To competitors",
        paragraphs: [
          "If your product depends on “confidence scores” or “human-in-the-loop validation,” you are admitting failure. Financial institutions do not want guesses—they want proofs.",
          "SEN will expose your systems as statistically convenient but operationally weak. You cannot compete with a system that produces identical outputs across years, jurisdictions, and audits.",
          "You will be relegated to low-risk, low-value workflows while SEN owns the compliance-critical core.",
        ],
      },
    ],
  },

  manufacturing: {
    title: " ",
    sections: [
      {
        heading: "To investors",
        paragraphs: [
          "Manufacturing environments destroy probabilistic vision systems. Noise, wear, grime, deformation, lighting variance—these are not edge cases, they are the norm.",
          "SEN’s structure-based recognition thrives precisely where ML fails, because geometry does not care about surface degradation.",
          "Deterministic identification of part markings and serials unlocks true lights-out inspection, lower scrap rates, and defensible quality assurance at scale. SEN is the visual backbone for Industry 4.0 that ML promised but never delivered.",
        ],
      },
      {
        heading: "To customers",
        paragraphs: [
          "If your inspection systems break the moment a serial number is scratched or a marking is partially occluded, you are burning money daily.",
          "SEN identifies structure, not appearance. That means consistent recognition across worn parts, noisy images, and real factory conditions.",
          "No retraining when lighting changes. No recalibration when suppliers vary. SEN gives you reliable inspection you can actually deploy across plants, vendors, and geographies without babysitting.",
        ],
      },
      {
        heading: "To competitors",
        paragraphs: [
          "Your convolutional models collapse the moment reality deviates from training data. SEN does not train—it computes.",
          "While you scramble to collect more samples and tune thresholds, SEN ships deterministic inspection that works on day one and keeps working forever.",
          "Manufacturing will not tolerate fragile systems, and SEN will expose exactly how fragile yours are.",
        ],
      },
    ],
  },

  healthcare: {
    title: " ",
    sections: [
      {
        heading: "To investors",
        paragraphs: [
          "Healthcare demands absolute consistency. Clinical workflows cannot afford interpretive drift, black-box behavior, or silent failures.",
          "SEN introduces deterministic interpretation into visual pipelines that currently rely on probabilistic systems ill-suited for medical accountability.",
          "This enables safer automation, reproducible diagnostics support, and verifiable clinical tooling—without retraining cycles that invalidate prior approvals. SEN aligns perfectly with regulatory reality and clinical risk tolerance.",
        ],
      },
      {
        heading: "To customers",
        paragraphs: [
          "If your clinical systems interpret visual inputs differently today than they did six months ago, you already have a compliance problem. SEN guarantees stability.",
          "The same scan, form, or symbol produces the same interpretation every time. That means safer workflows, easier validation, and trust from clinicians who are tired of systems they cannot rely on.",
          "SEN does not replace judgment—it removes uncertainty from the tools that support it.",
        ],
      },
      {
        heading: "To competitors",
        paragraphs: [
          "If your healthcare solution requires periodic retraining, you are forcing customers to re-validate endlessly. SEN ends that cycle.",
          "Determinism beats statistical cleverness in regulated medicine, and you cannot fake determinism with neural networks.",
          "Healthcare buyers will see through it—and move on.",
        ],
      },
    ],
  },

  "media-entertainment": {
    title: " ",
    sections: [
      {
        heading: "To investors",
        paragraphs: [
          "Media pipelines are collapsing under inconsistency. Assets rendered across styles, resolutions, and devices require recognition systems that behave identically everywhere.",
          "SEN provides deterministic recognition across transformations, enabling scalable moderation, asset tracking, and rights enforcement.",
          "This is foundational infrastructure for modern content platforms, not a marginal improvement.",
        ],
      },
      {
        heading: "To customers",
        paragraphs: [
          "If your graphics recognition breaks when styles change or resolutions shift, you are wasting operational effort.",
          "SEN recognizes structure, not styling. That means consistent results across formats, pipelines, and platforms.",
          "Your workflows become predictable, your automation reliable, and your content operations scalable without constant tuning.",
        ],
      },
      {
        heading: "To competitors",
        paragraphs: [
          "Style-sensitive models will never win here. SEN is immune to cosmetic variation, and that alone makes your systems obsolete in large-scale media pipelines.",
          "You optimize for aesthetics; SEN optimizes for invariance. The market will choose invariance.",
        ],
      },
    ],
  },

  retail: {
    title: " ",
    sections: [
      {
        heading: "To investors",
        paragraphs: [
          "Retail lives and dies on consistency across channels. Probabilistic recognition systems fracture that consistency.",
          "SEN delivers identical interpretation across stores, devices, kiosks, and backends, eliminating reconciliation overhead and operational drift.",
          "This directly improves margins, reduces fraud, and accelerates omnichannel execution.",
        ],
      },
      {
        heading: "To customers",
        paragraphs: [
          "If your in-store systems disagree with your online systems, your customers notice—and your operations suffer.",
          "SEN ensures the same visual input is understood identically everywhere. No retraining per device. No discrepancies between environments.",
          "Just reliable identification that scales with your footprint.",
        ],
      },
      {
        heading: "To competitors",
        paragraphs: [
          "Retailers will not tolerate systems that behave differently in different contexts. SEN will expose your inconsistency immediately.",
          "Determinism is not optional at scale, and you do not have it.",
        ],
      },
    ],
  },

  telecom: {
    title: " ",
    sections: [
      {
        heading: "To investors",
        paragraphs: [
          "Telecom infrastructure depends on exact interpretation of diagrams and visual identifiers. Errors propagate into outages, misconfigurations, and regulatory exposure.",
          "SEN provides deterministic understanding of network visuals, enabling safer planning, automation, and operations.",
          "This is infrastructure-grade technology for infrastructure companies.",
        ],
      },
      {
        heading: "To customers",
        paragraphs: [
          "If your network diagrams are interpreted inconsistently across tools or teams, you are inviting downtime.",
          "SEN ensures exact, repeatable interpretation of visual identifiers, reducing operational risk and simplifying coordination across engineering organizations.",
        ],
      },
      {
        heading: "To competitors",
        paragraphs: [
          "Inference-based systems cannot guarantee correctness in infrastructure planning. SEN can.",
          "Telecom buyers will not gamble on probabilities when networks are on the line.",
        ],
      },
    ],
  },

  "communications-media": {
    title: " ",
    sections: [
      {
        heading: "To investors",
        paragraphs: [
          "Publishing and moderation pipelines require exact understanding of symbols and diagrams at scale.",
          "SEN enables deterministic processing that eliminates ambiguity, reduces review overhead, and enforces consistency across distribution channels.",
          "This is foundational for scalable, defensible media operations.",
        ],
      },
      {
        heading: "To customers",
        paragraphs: [
          "If moderation or publishing decisions vary unpredictably, you lose trust.",
          "SEN guarantees consistent interpretation across pipelines, ensuring fairness, repeatability, and operational confidence.",
        ],
      },
      {
        heading: "To competitors",
        paragraphs: [
          "You cannot moderate or distribute at scale with guesswork. SEN will outclass systems that rely on probabilistic interpretation the moment consistency matters.",
        ],
      },
    ],
  },

  "energy-utilities": {
    title: " ",
    sections: [
      {
        heading: "To investors",
        paragraphs: [
          "Energy infrastructure operates under zero-tolerance conditions. Visual misinterpretation leads to safety incidents, outages, and regulatory disaster.",
          "SEN’s deterministic recognition is uniquely suited for safety-critical environments where predictability is non-negotiable.",
        ],
      },
      {
        heading: "To customers",
        paragraphs: [
          "If your inspection or monitoring systems cannot guarantee identical interpretation every time, they are a liability.",
          "SEN provides predictable recognition you can trust in high-risk environments, reducing human exposure and operational uncertainty.",
        ],
      },
      {
        heading: "To competitors",
        paragraphs: [
          "Safety-critical infrastructure will not accept probabilistic tools. SEN will replace them.",
        ],
      },
    ],
  },

  "higher-education": {
    title: " ",
    sections: [
      {
        heading: "To investors",
        paragraphs: [
          "Reproducibility is collapsing in modern research tooling. SEN restores determinism to visual analysis, enabling verifiable, repeatable academic workflows.",
          "This positions SEN as core infrastructure for next-generation research and education platforms.",
        ],
      },
      {
        heading: "To customers",
        paragraphs: [
          "If your tools produce different results for the same input, your research is compromised.",
          "SEN ensures that analysis is repeatable, explainable, and teachable—exactly what serious education requires.",
        ],
      },
      {
        heading: "To competitors",
        paragraphs: [
          "Academic users will abandon systems they cannot reproduce. SEN will expose your lack of rigor instantly.",
        ],
      },
    ],
  },
};

const cards: IndustryCard[] = [
  {
    id: "aerospace-defense",
    title: "Aerospace & Defense",
    description:
      "Deterministic recognition of symbols, markings, and schematics for safety-critical and classified systems.",
    href: "#aerospace-defense",
icon: (
  <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
    <path
      fill="currentColor"
      d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3-1 3 1v-1.5L12 19v-5.5L21 16z"
    />
  </svg>
),
  },
  {
    id: "financial-services",
    title: "Financial Services",
    description:
      "Exact, auditable recognition of forms, signatures, and stamps to meet regulatory and compliance requirements.",
    href: "#financial-services",
icon: (
  <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
    <path
      fill="currentColor"
      d="M11 3h2v2.1c2.28.34 4 1.7 4 3.9h-2c0-1.1-1.34-2-3-2s-3 .9-3 2c0 .88.66 1.5 3.3 2.15C15.4 11.95 17 13.1 17 15.5c0 2.2-1.72 3.66-4 4V21h-2v-1.1c-2.4-.34-4-1.86-4-4.4h2c0 1.56 1.36 2.5 3 2.5s3-.94 3-2.5c0-1.18-.88-1.88-3.5-2.5C8.2 11.12 7 9.9 7 8c0-2.2 1.72-3.56 4-3.9V3z"
    />
  </svg>
),
  },
  {
    id: "manufacturing",
    title: "Manufacturing",
    description:
      "Structure-based identification of part markings and serials for reliable inspection under noise, wear, and variation.",
    href: "#manufacturing",
icon: (
  <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
    <path
      fill="currentColor"
      d="M3 21V10a1 1 0 0 1 1-1h3V6a1 1 0 0 1 1-1h2l1 2h3l1-2h2a1 1 0 0 1 1 1v15H3zm4-10H5v8h14v-8h-2v2l-4-2-4 2v-2H7zm2 6h2v2H9v-2zm4 0h2v2h-2v-2z"
    />
  </svg>
)
,
  },
  {
    id: "healthcare",
    title: "Healthcare",
    description:
      "Deterministic interpretation in clinical workflows with stability across validation cycles and audits.",
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
    id: "media-entertainment",
    title: "Media & Entertainment",
    description:
      "Consistent recognition for graphics across rendering styles, formats, and resolutions.",
    href: "#media-entertainment",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
        <path fill="currentColor" d="M8 5v14l11-7L8 5z" />
      </svg>
    ),
  },
  {
    id: "retail",
    title: "Retail",
    description:
      "Reliable identification across stores, devices, and channels with identical outputs across environments.",
    href: "#retail",
icon: (
  <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
    <path
      fill="currentColor"
      d="M3 12l9-9h6a2 2 0 0 1 2 2v6l-9 9L3 12zm15-5a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM7 13l4 4 1.5-1.5-4-4L7 13z"
    />
  </svg>
)
,
  },
  {
    id: "telecom",
    title: "Telecom",
    description:
      "Exact interpretation of network diagrams and visual identifiers used in infrastructure planning and operations.",
    href: "#telecom",
icon: (
  <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
    <path
      fill="currentColor"
      d="M12 3a9 9 0 0 1 6.36 15.36l-1.42-1.42A7 7 0 0 0 12 5a7 7 0 0 0-4.94 11.94l-1.42 1.42A9 9 0 0 1 12 3zm0 4a5 5 0 0 1 3.54 8.54l-1.42-1.42A3 3 0 0 0 12 9a3 3 0 0 0-2.12 5.12l-1.42 1.42A5 5 0 0 1 12 7zm0 6a2 2 0 0 1 2 2c0 .53-.21 1.04-.59 1.41L12 22l-1.41-5.59A2 2 0 0 1 12 13z"
    />
  </svg>
)
,
  },
  {
    id: "communications-media",
    title: "Communications & Media",
    description:
      "Exact understanding of symbols and diagrams in publishing, moderation, and distribution pipelines.",
    href: "#communications-media",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M4 6h16v10H7l-3 3V6zm4 2v2h8V8H8zm0 4v2h6v-2H8z"
        />
      </svg>
    ),
  },
  {
    id: "energy-utilities",
    title: "Energy & Utilities",
    description:
      "Predictable recognition in safety-critical infrastructure environments where ambiguity is unacceptable.",
    href: "#energy-utilities",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M13 2L3 14h7l-1 8 10-12h-7l1-8z"
        />
      </svg>
    ),
  },
  {
    id: "higher-education",
    title: "Higher Education",
    description:
      "Reproducible visual analysis for research workflows and instructional tooling where repeatability matters.",
    href: "#higher-education",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M12 3l10 6-10 6L2 9l10-6zm0 13l6.5-3.9V18L12 21l-6.5-3v-5.9L12 16z"
        />
      </svg>
    ),
  },
];

function IndustryModal({
  id,
  onClose,
}: {
  id: string;
  onClose: () => void;
}) {
  const content = modalContent[id];
  const panelRef = useRef<HTMLDivElement | null>(null);

  // Close on ESC, lock body scroll, focus for accessibility
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", onKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // focus the panel so keyboard users land inside the dialog
    panelRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose]);

  if (!content) return null;

  return (
    <div className="modal-overlay" role="presentation" onClick={onClose}>
      <div
        className="modal-panel modal-panel--dark"
        role="dialog"
        aria-modal="true"
        aria-label={content.title}
        tabIndex={-1}
        ref={panelRef}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close" onClick={onClose} aria-label="Close">
          ×
        </button>

        <h2 className="modal-title">{content.title}</h2>

        <div className="modal-body">
          {content.sections.map((s) => (
            <section key={s.heading} className="modal-section">
              <h4 className="modal-heading">{s.heading}</h4>
              {s.paragraphs.map((p, i) => (
                <p key={i} className="modal-paragraph">
                  {p}
                </p>
              ))}
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Industries() {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  return (
    <>
      <section className="page industries-page">
        <header className="industries-header">
          <h1>Products built for how your industry works</h1>
        </header>

        <div className="industries-grid">
{cards.map((c) => {
  const hasModal = Boolean(modalContent[c.id]);

  const handleOpen = () => {
    if (hasModal) setActiveModal(c.id);
  };

  return (
    <article
      key={c.id}
      className="industry-card"
      role={hasModal ? "button" : undefined}
      tabIndex={hasModal ? 0 : undefined}
      onClick={hasModal ? handleOpen : undefined}
      onKeyDown={
        hasModal
          ? (e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                handleOpen();
              }
            }
          : undefined
      }
    >
      <div className="industry-icon" aria-hidden="true">
        {c.icon}
      </div>

      <h3 className="industry-title">{c.title}</h3>
      <p className="industry-desc">{c.description}</p>

      <button
        type="button"
        className="industry-link"
        onClick={(e) => {
          e.stopPropagation(); // prevent double-trigger
          handleOpen();
        }}
      >
        Learn more <span aria-hidden="true">→</span>
      </button>
    </article>
  );
})}

        </div>
      </section>

      {activeModal && (
        <IndustryModal id={activeModal} onClose={() => setActiveModal(null)} />
      )}
    </>
  );
}
