import { useState } from "react";
import Resume from "../assets/Resume.pdf"
import "./about.css";

const PHOTO = "./assets/about.png";

const FACTS = [
  { label: "Studying", value: "BSc Software Engineering" },
  { label: "University", value: "Multimedia University of Kenya" },
  { label: "Graduating", value: "November 2028" },
  { label: "Focus", value: "Full-stack web, ML on the side" },
];

export function About() {
  const [Photo, setPhoto] = useState(false);

  return (
    <section className="about" id="about">
      <div className="inner_about">
        {!Photo && (
          <figure className="about_photo">
            <img
              src={PHOTO}
              alt="me working on a laptop"
              onError={() => setPhoto(true)}
            />
          </figure>
        )}

        <div className="about_text">
          <h2>About me</h2>
          <p>
            I'm a <strong>Software Engineering student</strong> at Multimedia University of Kenya, graduating in November 2028. I build full-stack
            web applications—from responsive React interfaces to Django backends
            and relational databases—and I enjoy owning a feature from start to
            finish.
          </p>

          <p>
            On the side, I explore <strong>machine learning</strong>, and I'm
            interested in how it can make everyday apps smarter and more useful.
            {/* TODO: add one real example later*/}
          </p>

          <p>
            I'm looking for internship and attachment opportunities where I can
            ship real features and learn from experienced engineers. If you're
            building something, I'd like to hear about it.
          </p>

          <dl className="about_facts">
            {FACTS.map((fact) => (
              <div key={fact.label}>
                <dt>{fact.label}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
          </dl>

          <div className="about_actions">
            <a className="btn btn_primary" href="#projects">
              View my projects
            </a>
                      <a className="btn btn_outline" href={ Resume} target="_blank" >
              View Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
