import me from "../assets/me.jpeg";
import resume from "../assets/Resume.pdf";
import "./home.css"

export function Home() {
  return (
    <section id="home" className="home">
      <div className="section_pic-container">
        <img src={me} alt="Benedict profile picture" className="profile-img" />
      </div>
      <div className="section_text">
        <p className="section_text_p1">Hello, I'm</p>
        <h1 className="title">Benedict Onyango</h1>
        <p className="section_text_p2"> Full Stack Software Engineer</p>
        <div className="link_container">
          <a href={resume} target="_blank" className="cv_link">
            View Resume
          </a>
          <a href="#contact" className="contact_link">
            Contact Info
          </a>
        </div>
        <div className="social_container">
          <a href="https://github.com/Benedict-Onyango">
            <i className="fa-brands fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/benedict-onyango-153958340/">
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
