import { personalDetails } from "../data";

function Education() {
  return (
    <section className="section">
      <h2 className="section-title">Education</h2>

      <div className="glass-card education-card">
        <h3>B.Tech in Computer Science Engineering</h3>

        <p>
          <strong>College:</strong> {personalDetails.college}
        </p>

        <p>
          <strong>CGPA:</strong> {personalDetails.cgpa}
        </p>

        <p>
          <strong>Year:</strong> 2022 - 2026
        </p>
      </div>
      <div className="glass-card education-card">
        <h3>Pre University Course</h3>

        <p>
          <strong>College:</strong> {personalDetails.college}
        </p>

        <p>
          <strong>CGPA:</strong> 9.8
        </p>

        <p>
          <strong>Year:</strong> 2020 - 2022
        </p>
      </div>
    </section>
  );
}

export default Education;