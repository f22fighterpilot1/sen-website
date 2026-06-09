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
    image: "/media/images/Demo1.png",
    label: "Determinism",
    quote:
        "Same input → same output. SEN's unmatched perception is deterministic by design, so results are repeatable across environments, deployments, and time.",
    name: "",
    title: "",
  },
  {
    image: "/media/images/Demo2.png",
    label: "Symbol Slot Evidence",
    quote:
        "For the first time in computer vision, recognition is no longer a black box. SEN exposes each symbol position as an inspectable slot, showing confidence, evidence, and matching signals behind the final output.",
    name: "",
    title: "",
  },
  {
    image: "/media/images/Demo3.png",
    label: "Inspection & Auditability",
    quote:
        "Inspect SEN's advanced matching trace: JSON-level logs expose the recognition path, candidate comparisons, resolver decisions, and audit evidence behind each output.",
    name: "",
    title: "",
  },
];

export default function WideSlideshow() {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const id = setInterval(() => {
      setIndex((i) => (i + 1) % SLIDES.length);
    }, 5000);

    return () => clearInterval(id);
  }, [isPaused]);

  const slide = SLIDES[index];

  return (
      <section className="wide-slideshow">
        <div className="wide-slideshow-inner">
          <div className="wide-slideshow-card">
            <div className="wide-slideshow-left">
              {slide.label && <div className="wide-slideshow-logo">{slide.label}</div>}

              <div className="wide-slideshow-image-frame">
                <img src={slide.image} alt="" className="wide-slideshow-left-img" />
              </div>

              <div className="wide-slideshow-dots">
                <button
                    type="button"
                    className="wide-slideshow-control-dot"
                    onClick={() => setIsPaused((value) => !value)}
                    aria-label={isPaused ? "Play slideshow" : "Pause slideshow"}
                    title={isPaused ? "Play" : "Pause"}
                >
                  {isPaused ? "▶" : "Ⅱ"}
                </button>

                {SLIDES.map((_, i) => (
                    <button
                        key={i}
                        type="button"
                        className={`wide-slideshow-dot ${i === index ? "is-active" : ""}`}
                        onClick={() => setIndex(i)}
                        aria-label={`Go to slide ${i + 1}`}
                    />
                ))}
              </div>
            </div>

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