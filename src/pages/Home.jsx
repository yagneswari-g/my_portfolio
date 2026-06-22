import { Link } from "react-router-dom";
import { personalDetails } from "../data";
import yagneswari from'../assets/yagneswari.jpeg';

function Home() {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="welcome">Welcome to my portfolio</p>

        <h1>
          Hi, I am <span>{personalDetails.fullName}</span>
        </h1>

        <h2>{personalDetails.title}</h2>

        <p className="hero-desc">{personalDetails.subtitle}</p>

        <div className="btn-group">
          <Link to="/projects" className="btn primary-btn">
            View Projects
          </Link>

          <a
            href={personalDetails.resumeLink}
            download
            className="btn outline-btn"
          >
            Download Resume
          </a>
        </div>

        <div className="social-links">
          <a href={personalDetails.github} target="_blank" rel="noreferrer">
            GitHub
          </a>

          <a href={personalDetails.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </div>

      <div className="hero-card">
        <div>
         {/* {personalDetails.fullName.charAt(0)} */}
          <img src={yagneswari} className="profile-circle"/>
        </div>

        <h2>{personalDetails.fullName}</h2>
        <p>{personalDetails.title}</p>
      </div>
    </section>
  );
}

export default Home;