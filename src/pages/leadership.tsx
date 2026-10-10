
import { useState } from "react";

const leaders = [
  {
    name: "Britton Irechukwu",
    title: "Chief Executive Officer",
    image: "/public/media/images/leadership/britton.png",
    bio: "Add the executive's professional background, leadership experience, and contributions to SymbolicEngine.",
  },
  {
    name: "Drew Irechukwu",
    title: "President",
    image: "/public/media/images/leadership/drew.png",
    bio: "Add the executive's technical background, expertise, and role in developing SymbolicEngine's technology.",
  },
  {
    name: "Paul Jan Zdunek",
    title: "Chair, Board of Advisors",
    image: "/public/media/images/leadership/paul.jpg",
    bio: "Add the executive's operational experience and responsibilities at SymbolicEngine.",
  },
  {
    name: "Josh Raphaelson",
    title: "Member, Board of Advisors",
    image: "/public/media/images/leadership/josh.png",
    bio: "Add the executive's financial leadership experience and responsibilities.",
  },
{
    name: "Dr. Giovanni Vincenti",
    title: "Member, Board of Advisors",
    image: "/public/media/images/leadership/giovanni.png",
    bio: "Add the leader's engineering background and responsibilities for technical execution.",
  },
  {
    name: "Name Surname",
    title: "Chief General Counsel",
    //image: "/public/media/images/leadership/drew.png",
    bio: "Add the person's confirmed legal role, professional background, and relevant experience.",
  },
];

export default function Leadership() {
  const [expandedBio, setExpandedBio] = useState<number | null>(null);

  return (
    <main className="leadership-page">
      <div className="container">
        <header className="leadership-header">
          <h1>Leadership</h1>
          <div className="leadership-accent" aria-hidden="true" />
        </header>

        <section
          className="leadership-grid"
          aria-label="Corporate leadership team members"
        >
          {leaders.map((leader, index) => (
            <article className="leadership-card" key={leader.title}>
              <div className="leadership-photo">
                <img
                  src={leader.image}
                  alt={leader.name}
                  loading="lazy"
                  onError={(event) => {
                    event.currentTarget.style.visibility = "hidden";
                  }}
                />
              </div>

              <div className="leadership-card-content">
                <h2>{leader.name}</h2>
                <p className="leadership-title">{leader.title}</p>

                <button
                  className="leadership-bio-link"
                  type="button"
                  aria-expanded={expandedBio === index}
                  onClick={() =>
                    setExpandedBio(
                      expandedBio === index ? null : index
                    )
                  }
                >
                  {expandedBio === index ? "Close Bio" : "Read Bio"}
                  <span aria-hidden="true">
                    {expandedBio === index ? " −" : " →"}
                  </span>
                </button>

                {expandedBio === index && (
                  <div className="leadership-bio">
                    {leader.bio}
                  </div>
                )}
              </div>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
