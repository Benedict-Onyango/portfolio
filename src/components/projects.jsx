import { useEffect, useState } from "react";
import axios from "axios";
import "./projects.css";

const PROJECTS = [
  {
    title: "Supermarket POS System",
    badge: "Desktop app",
    description:
      "A point-of-sale system for a small supermarket. It handles sales and checkout, stock tracking, and employee management.",
    image: "/images/pos-sales.png",
    image_alt: "Sales screen of the supermarket POS system",
    tags: ["Java", "Swing", "MySql"],
    github: "https://github.com/your-username/pos-system", // TODO: real repo URL
    demo: null,
  },
  {
    title: "Calvo Auto Locks",
    badge: "Web app",
    description:
      "A responsive website for a car locksmith company where customers can browse services and book help online.",
    image: "/images/calvo.png",
    image_alt: "Sales screen of the supermarket POS system",
    tags: ["React", "Python", "Django", "PostgreSQl"],
    github: "https://github.com/Benedict-Onyango/Calvo_auto_locks",
    demo: null,
  },
];

function ProductCard({ project, useFallback }) {
  const [imageField, setImageField] = useState(false);
  return (
    <article className="card">
      {useFallback ? (
        <figure className={`card_media ${imageField ? "media_missing" : ""}`}>
          {!imageField && (
            <img
              src={project.image}
              alt={project.image_alt}
              loading="lazy"
              onError={() => setImageField(true)}
            />
          )}
        </figure>
      ) : project.project_images?.length > 0 ? (
        project.project_images?.map((img) => {
          const isMissing = imageField || !img.image;
          return (
            <figure
              key={img.id}
              className={`card_media ${isMissing ? "media_missing" : ""}`}
            >
              {!isMissing && (
                <img
                  src={img.image}
                  alt={img.image_alt}
                  loading="lazy"
                  onError={() => setImageField(true)}
                />
              )}
            </figure>
          );
        })
      ) : (
        <figure className="card_media media_missing" />
      )}
      <div className="card_body">
        <div className="card_top">
          <h3>{project.title}</h3>
          {project.badge && <span className="badge">{project.badge}</span>}
        </div>
        <p>{project.description}</p>

        {useFallback ? (
          <ul className="tags">
            {project.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        ) : (
          <ul className="tags">
            {project.tag.map((tag) => (
              <li key={tag.id}>{tag.tag}</li>
            ))}
          </ul>
        )}

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
              Source Code
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [fetchFailed, setFetchFailed] = useState(false);
  const API_URL = import.meta.env.VITE_API_URL || "http://127.0.0.1:8000";

  useEffect(() => {
    axios
      .get(`${API_URL}/api/projects/`)
      .then((res) => {
        setProjects(res.data);
        setFetchFailed(false);
      })
      .catch(() => {
        setFetchFailed(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const useFallback = fetchFailed || projects.length === 0;

  const displayedProjects = useFallback ? PROJECTS : projects;
  return (
    <section className="projects" id="projects">
      <div className="projects_inner">
        <h2>Projects</h2>
        <p className="projects_intro">
          Things I've built, from desktop software to full-stack web apps.
        </p>
        {loading ? (
          <p>Loading projects...</p>
        ) : (
          <div className="projects_grid">
            {displayedProjects.map((project) => (
              <ProductCard
                key={project.title}
                project={project}
                useFallback={useFallback}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
