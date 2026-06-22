import { personalDetails } from "../data";

function Footer() {
  return (
    <footer className="footer">
      <p>© 2026 {personalDetails.fullName}. All rights reserved.</p>
    </footer>
  );
}

export default Footer;