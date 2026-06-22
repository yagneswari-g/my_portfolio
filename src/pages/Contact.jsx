import { personalDetails } from "../data";

function Contact() {
  return (
    <section className="section">
      <h2 className="section-title">Contact Me</h2>

      <div className="contact-card">
        <p>
          <strong>Email:</strong> {personalDetails.email}
        </p>

        <p>
          <strong>Phone:</strong> {personalDetails.phone}
        </p>

        <p>
          <strong>Location:</strong> {personalDetails.location}
        </p>

        <div className="btn-group">
          <a href={`mailto:${personalDetails.email}`} className="btn primary-btn">
            Send Email
          </a>

          <a
            href={personalDetails.github}
            target="_blank"
            rel="noreferrer"
            className="btn outline-btn"
          >
            GitHub
          </a>

          <a
            href={personalDetails.linkedin}
            target="_blank"
            rel="noreferrer"
            className="btn outline-btn"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;