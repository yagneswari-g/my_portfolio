import { personalDetails } from "../data";

function Footer() {
  return (
    <footer className="footer">
      <p>© 2026 {personalDetails.fullName}.</p>
    </footer>
  );
}

export default Footer;