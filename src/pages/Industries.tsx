// industries.tsx
import React, { useEffect, useRef, useState } from "react";

type IndustryModalHeading =
    | "Aerospace & Defense"
    | "Financial Services"
    | "Manufacturing"
    | "Healthcare"
    | "Media & Entertainment"
    | "Retail"
    | "Telecom"
    | "Energy & Utilities"
    | "Higher Education";

type IndustryModalContent = {
  title: string;
  sections: { heading: IndustryModalHeading; paragraphs: string[] }[];
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
        heading: "Aerospace & Defense",
        paragraphs: [
          "Aerospace and defense systems cannot tolerate probabilistic interpretation. When symbols, markings, or schematics are misread, the outcome is not a degraded user experience—it is mission failure, asset loss, or human death. Probabilistic vision models are therefore not “good enough”; they are an operational liability in safety-critical and classified pipelines.",
          "SEN introduces something this sector has never had at scale: deterministic visual recognition. Same input, same output—across time, deployments, air-gapped environments, and audit cycles. No training drift, no silent regressions, no stochastic behavior. Outputs are reproducible, explainable, and compatible with strict verification regimes.",
          "This becomes the missing substrate for certified autonomy, ISR analysis, weapons validation, maintenance diagnostics, and classified documentation workflows. If your stack relies on neural inference, confidence thresholds, or retraining cycles, you cannot prove repeatability under deep forensic scrutiny. SEN is competing with physics—your system is competing with randomness.",
        ],
      },
    ],
  },

  "financial-services": {
    title: " ",
    sections: [
      {
        heading: "Financial Services",
        paragraphs: [
          "Financial institutions are suffocating under compliance overhead because their visual processing stack is fundamentally non-auditable. ML-based OCR and document systems can’t explain why a form was interpreted a certain way—only that it probably was—creating manual review backlogs, fraud exposure, and regulator friction.",
          "SEN makes visual interpretation replayable and defensible: deterministic recognition of forms, signatures, stamps, and symbols enables exact reproducibility, chain-of-custody verification, and regulator-proof audit trails. When something is accepted or rejected, SEN can provide a precise structural basis—not a probability score.",
          "If your product depends on “confidence scores” or “human-in-the-loop validation” as the core mechanism, you are admitting the system is guessing. In compliance-critical workflows, guesses lose. SEN will relegate probabilistic stacks to low-risk tooling while it owns the auditable core.",
        ],
      },
    ],
  },

  manufacturing: {
    title: " ",
    sections: [
      {
        heading: "Manufacturing",
        paragraphs: [
          "Manufacturing environments punish probabilistic vision: noise, grime, deformation, wear, lighting variance—these are the norm, not edge cases. That’s why many ML inspection systems degrade in the real world and require constant tuning, retraining, and exception handling.",
          "SEN recognizes structure, not appearance. Deterministic identification of part markings and serials stays consistent across worn parts, noisy images, supplier variance, and plant-to-plant differences—without retraining when lighting changes or inputs drift over time.",
          "If your approach collapses the moment reality deviates from training data, you’ll be stuck collecting samples and tuning thresholds forever. SEN computes. While you babysit models, SEN ships reliable inspection that works on day one and keeps working—making fragility obvious and expensive.",
        ],
      },
    ],
  },

  healthcare: {
    title: " ",
    sections: [
      {
        heading: "Healthcare",
        paragraphs: [
          "Healthcare demands stability. Clinical workflows can’t afford interpretive drift, black-box behavior, or silent changes that force re-validation. If your system interprets the same visual input differently today than it did six months ago, you already have a compliance problem.",
          "SEN introduces deterministic interpretation into visual pipelines that currently rely on probabilistic systems ill-suited for medical accountability. The same scan, form, or symbol produces the same output every time—supporting safer automation, reproducible validation, and audit-friendly clinical tooling.",
          "If your solution requires periodic retraining, you are forcing customers into endless re-validation and approval cycles. You cannot fake determinism with neural networks, and regulated buyers will see that immediately. SEN ends that loop.",
        ],
      },
    ],
  },

  "media-entertainment": {
    title: " ",
    sections: [
      {
        heading: "Media & Entertainment",
        paragraphs: [
          "Media pipelines break when recognition behavior changes across styles, resolutions, and devices. At scale, inconsistency becomes operational drag: rework, false flags, and unreliable automation in moderation, asset tracking, and rights enforcement.",
          "SEN recognizes structure, not styling—so outputs stay consistent across formats, rendering pipelines, and platform constraints. That predictability is what makes automation trustworthy and scalable in modern content operations.",
          "Style-sensitive models will never fully win here. SEN is built for invariance, and invariance is what large-scale media pipelines ultimately pay for.",
        ],
      },
    ],
  },

  retail: {
    title: " ",
    sections: [
      {
        heading: "Retail",
        paragraphs: [
          "Retail lives and dies on consistency across channels. When in-store systems disagree with online systems, reconciliation overhead explodes, fraud surfaces, and customer trust erodes—especially at scale across devices, kiosks, and backends.",
          "SEN delivers identical interpretation everywhere: same input, same output across stores, devices, and environments—without retraining per device class or deployment context. That means fewer discrepancies, less operational drift, and cleaner omnichannel execution.",
          "If your system behaves differently in different contexts, retailers will find it instantly—and they won’t tolerate it. Determinism isn’t a nice-to-have at scale. SEN has it. Most stacks don’t.",
        ],
      },
    ],
  },

  telecom: {
    title: " ",
    sections: [
      {
        heading: "Telecom",
        paragraphs: [
          "Telecom infrastructure depends on exact interpretation of diagrams and visual identifiers. Errors propagate into outages, misconfigurations, and regulatory exposure—meaning “pretty accurate” recognition isn’t good enough when networks are on the line.",
          "SEN provides deterministic understanding of network visuals, enabling safer planning, automation, and operations with repeatable outcomes across teams, tools, and time. That reduces operational risk and simplifies coordination across engineering organizations.",
          "Inference-based systems can’t guarantee correctness where failure is expensive. Telecom buyers don’t want probabilities—they want repeatability. SEN is infrastructure-grade; guesswork isn’t.",
        ],
      },
    ],
  },

  "energy-utilities": {
    title: " ",
    sections: [
      {
        heading: "Energy & Utilities",
        paragraphs: [
          "Energy infrastructure operates under zero-tolerance conditions. Visual misinterpretation can trigger safety incidents, outages, and regulatory disaster. In these environments, unpredictability is not innovation—it is risk.",
          "SEN’s deterministic recognition is designed for safety-critical pipelines where identical interpretation must hold across time, deployments, and audit cycles. Predictability becomes a safety feature and a compliance advantage.",
          "Probabilistic tools can’t offer guarantees when consequences are severe. As the market hardens around accountability, systems that can’t prove repeatability will be replaced by ones that can.",
        ],
      },
    ],
  },

  "higher-education": {
    title: " ",
    sections: [
      {
        heading: "Higher Education",
        paragraphs: [
          "Reproducibility is collapsing in modern research tooling when visual analysis depends on systems that change behavior over time. If the same input produces different outputs, results become harder to verify, teach, and trust.",
          "SEN restores determinism to visual analysis: repeatable, explainable interpretation that can be validated once and relied on across semesters, labs, and publications. That makes it ideal for rigorous research workflows and instructional tooling.",
          "Academic users abandon systems they cannot reproduce. If your approach can’t guarantee replayability, it will be seen as non-rigorous the moment results matter. SEN makes rigor the default.",
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
    ),
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
    ),
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
          <path fill="currentColor" d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" />
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

function IndustryModal({ id, onClose }: { id: string; onClose: () => void }) {
  const content = modalContent[id];
  const panelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

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
                          e.stopPropagation();
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