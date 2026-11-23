import { useEffect, useRef, useState } from "react";
import ThemeToggle from "../theme/ThemeToggle";
// import "./header.css";

export function Header() {
  const sentinelRef = useRef(null);
  const [stuck, setStuck] = useState(false);
  const [sideBar, setSideBar] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) =>
      setStuck(!entry.isIntersecting),
    );
    observer.observe(sentinelRef.current);
    return () => observer.disconnect();
  }, []);

  const toggleSideBar = () => {
    setSideBar((prev) => !prev);
  };
  return (
    <>
      <div ref={sentinelRef} style={{ height: 1 }} />

      <header className={stuck ? "stuck" : ""}>
        <div className="left">
          <p className="title">
            <span className="top_part">
              Benedict <span className="last_name"> Onyango </span> <br />
            </span>
            <span className="bottom_part">SOFTWARE ENGINEER</span>
          </p>
        </div>
        <div className="right">
          <ul className="nav_list">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
          <ThemeToggle />
        </div>
        <div
          className={`hamburger_menu ${sideBar ? "active" : ""}`}
          onClick={toggleSideBar}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </header>

      <nav className={`small_screen ${sideBar ? "active" : ""}`}>
        <ul className="nav_list">
          <li>
            <a href="#home" onClick={toggleSideBar}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={toggleSideBar}>
              About
            </a>
          </li>
          <li>
            <a href="#skills" onClick={toggleSideBar}>
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" onClick={toggleSideBar}>
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" onClick={toggleSideBar}>
              Contact
            </a>
          </li>
        </ul>
        <ThemeToggle onClick={toggleSideBar} />
      </nav>
    </>
  );
}
