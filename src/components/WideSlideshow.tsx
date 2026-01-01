import { useEffect, useState } from "react";

type Slide = {
  image: string;
  logo?: string;
  quote: string;
  name: string;
  title: string;
};

const SLIDES: Slide[] = [
  {
    image: "/src/media/images/home_image.png",
    logo: "DECATHLON",
    quote:
      "Deterministic perception replaces probabilistic guesswork with auditable structure.",
    name: "Kevin Defries",
    title: "Information Systems Engineer, Decathlon",
  },
  {
    image: "/src/media/images/eyeball.png",
    logo: "AEROSPACE",
    quote:
      "Repeatable interpretation across environments is mandatory for safety-critical systems.",
    name: "Program Lead",
    title: "Aerospace & Defense",
  },
  {
    image: "/src/media/images/structural_normalization.png",
    logo: "FINANCIAL SERVICES",
    quote:
      "Auditable recognition turns compliance from a cost center into infrastructure.",
    name: "CTO",
    title: "Tier-1 Bank",
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
            {slide.logo && (
              <div className="wide-slideshow-logo">{slide.logo}</div>
            )}
            <img
              src={slide.image}
              alt=""
              className="wide-slideshow-left-img"
            />

            {/* dots */}
            <div className="wide-slideshow-dots">
              {SLIDES.map((_, i) => (
                <button
                  key={i}
                  className={`wide-slideshow-dot ${
                    i === index ? "is-active" : ""
                  }`}
                  onClick={() => setIndex(i)}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="wide-slideshow-right">
            <div className="wide-slideshow-quoteMark">“</div>

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
