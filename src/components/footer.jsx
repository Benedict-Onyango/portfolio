// import "./footer.css";
export function Footer() {
  return (
    <footer>
      <div className="left">
        &copy; 2026 Benedict Onyango. All rights reserved
      </div>

      <div className="right">
        <a
          href="https://github.com/Benedict-Onyango"
          target="_blank"
          rel="noopener noreferrer "
        >
          <i className="fa-brands fa-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/benedict-onyango-153958340/"
          target="_blank"
          rel="noopener noreferrer "
        >
          <i className="fa-brands fa-linkedin-in"></i>
        </a>
        <a
          href="https://www.instagram.com/_.ben.e_/"
          target="_blank"
          rel="noopener noreferrer "
        >
          <i className="fa-brands fa-instagram"></i>
        </a>
      </div>
    </footer>
  );
}
