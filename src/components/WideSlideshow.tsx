import { useEffect, useState } from "react";

type Slide = {
  image: string;
  label?: string;
  quote: string;
  name: string;
  title: string;
};

const SLIDES: Slide[] = [
  {
    image: "/media/images/deterministic.png",
    label: "Determinism",
    quote:
        "Same input → same output. SEN is deterministic by design, so results are repeatable across environments, deployments, and time.",
    name: "SymbolicEngine",
    title: "Deterministic Recognition Core",
  },
  {
    image: "/media/images/inspection.png",
    label: "Inspection & Auditability",
    quote:
        "SEN produces traceable decisions: confidence, abstention, and inspection signals that make recognition debuggable and audit-ready.",
    name: "SymbolicEngine",
    title: "Inspectable Pipeline Outputs",
  },
  {
    image: "/media/images/the-case-for-on-prem-ai-data-centers.jpg",
    label: "Deployment Options",
    quote:
        "Choose the integration path that fits your environment: direct API access, an API-backed SDK, on-prem Docker deployment, or a fully embedded SDK.",
    name: "SymbolicEngine",
    title: "API • SDK • Docker • Embedded",
  },
];

export default function WideSlideshow() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % SLIDES.length);
    }, 5000);

    return () => clearInterval(id);
  }, []);

  const slide = SLIDES[index];

  return (
      <section className="wide-slideshow">
        <div className="wide-slideshow-inner">
          <div className="wide-slideshow-card">
            {/* LEFT */}
            <div className="wide-slideshow-left">
              {slide.label && <div className="wide-slideshow-logo">{slide.label}</div>}

              <img src={slide.image} alt="" className="wide-slideshow-left-img" />

              {/* dots */}
              <div className="wide-slideshow-dots">
                {SLIDES.map((_, i) => (
                    <button
                        key={i}
                        className={`wide-slideshow-dot ${i === index ? "is-active" : ""}`}
                        onClick={() => setIndex(i)}
                        aria-label={`Go to slide ${i + 1}`}
                    />
                ))}
              </div>
            </div>

            {/* RIGHT */}
            <div className="wide-slideshow-right">

              <p className="wide-slideshow-quote">{slide.quote}</p>

              <div className="wide-slideshow-person">
                <div className="wide-slideshow-name">{slide.name}</div>
                <div className="wide-slideshow-title">{slide.title}</div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}