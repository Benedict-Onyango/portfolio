import { useState } from "react";
import "./projects.css";

const PROJECTS = [
  {
    title: "Supermarket POS System",
    badge: "Desktop app",
    description:
      "A point-of-sale system for a small supermarket. It handles sales and checkout, stock tracking, and employee management.",
    image: "/images/pos-sales.png",
    imageAlt: "Sales screen of the supermarket POS system",
    tags: ["Java", "Swing","MySql"],
    github: "https://github.com/your-username/pos-system", // TODO: real repo URL
    demo: null,
  },
];

function ProductCard({ project }) {
  const [imageField, setImageField] = useState(false);

  return (
    <article className="card">
      <figure className={`card_media${imageField ? "media_missing" : ""}`}>
        {!imageField && (
          <img
            src={project.image}
            alt={project.imageAlt}
            onError={() => setImageField(true)}
          />
        )}
      </figure>
      <div className="card_body">
        <div className="card_top">
          <h3>{project.title}</h3>
          {project.badge && <span className="badge">{project.badge}</span>}
        </div>
        <p>{project.description}</p>

        <ul className="tags">
          {project.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>

        <div className="card_links">
          {project.demo && (
            <a
              className="btn demo"
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer "
            >
              Live demo
            </a>
          )}
          {project.github && (
            <a
              className="btn github"
              href={project.github}
              target="_blank"
              rel="noopener noreferrer "
            >
              Live demo
            </a>
          )}
        </div>
      </div>
    </article>
  );
}


export function Projects() { 
    return (
        <section className="projects" id="projects">
            <div className="projects_inner">
                <h2>Projects</h2>
                <p className="projects_intro">
                    Things I've built, from desktop software to full-stack web apps.
                </p>
                <div className="projects_grid">
                    {PROJECTS.map((project) => (
                        <ProductCard key={project.title} project={project}/>
                    ))}
                </div>
            </div>
        </section>
    );
}