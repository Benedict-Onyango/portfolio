// import { ICONS } from "../assets/icons";
import "./skills.css";
const GROUPS = [
  {
    title: "Frontend",
    note: "What people see and click",
    items: ["HTML", "CSS", "JavaScript","BootStrap", "React"],
  },
  {
    title: "Backend",
    note: "Servers and APIs",
    items: ["Django", "REST APIs"],
  },
  {
    title: "Databases",
    note: "Where the data lives",
    items: ["MySql","PostgreSQL", "MongoDB"],
  },
  {
    title: "Machine learning",
    note: "Exploring on the side",
    items: ["Python", "pandas", "scikit-learn"],
  },
  {
    title: "Tools",
    note: "Day-to-day workflow",
    items: ["Git", "GitHub", "VS Code"],
  },
  {
    title: "Other Languages",
    note: "Still comfortable with",
    items: ["Java", "C++", "C"],
  },
];

const LEARNING = ["Docker", "AWS"];


function Chips({ items }) {
  return (
    <ul className="chips">
      {items.map((item) => (
        <li key={item}>
          {item}
        </li>
      ))}
    </ul>
  );
}


export function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="skills_inner">
        <h2>Skills</h2>
        <p className="skills_intro">
          The tools I use to build full-stack web apps, plus the machine
          learning stack I'm exploring on the side.
        </p>

        <div className="skills_grid">
          {GROUPS.map((group) => (
            <div className="skill_group" key={group.title}>
              <h3>{group.title}</h3>
              <p className="note">{group.note}</p>
              <Chips items={group.items} />
            </div>
          ))}
        </div>
        <div className="learning">
          <p>Currently learning:</p>
          <Chips items={LEARNING} />
        </div>
      </div>
    </section>
  );
}
