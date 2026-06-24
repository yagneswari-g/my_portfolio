import javaCert from "../assets/javaprogramming.jpeg";
import dbms from "../assets/database.jpeg";
import jo from "../assets/javaobject.jpeg";

function Certificates() {
  const certificates = [
    {
      title: "Programming using Java",
      platform: "Infosys Springboard",
      year: "2025",
      image: javaCert,
    },
    {
      title: "DBMS",
      platform: "Infosys Springboard",
      year: "2025",
      image: dbms,
    },
    {
      title: "Object Oriented System Development Using UML,Java And Patterns",
      platform: "NPTEL",
      year: "2025",
      image: jo,
    },
  ];

  return (
    <section className="section" id="certificates">
      <h2 className="section-title">Certificates</h2>

      <div className="certificates-grid">
        {certificates.map((cert, index) => (
          <div className="certificate-card" key={index}>
            <img
              src={cert.image}
              alt={cert.title}
              className="certificate-image"
            />

            <h3>{cert.title}</h3>
            <p>{cert.platform}</p>
            <span>{cert.year}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certificates;