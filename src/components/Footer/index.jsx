import { FaGithub, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";

import SocialLink from "../SocialLink";

import "./Footer.css";

function Footer() {
  const creationYear = 2025;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="top-section">
        <SocialLink
          href="https://github.com/HigorAntonio"
          aria-label="Link do GitHub"
          target="_blank"
        >
          <FaGithub />
        </SocialLink>
        {/* <SocialLink href="#" aria-label="Link do Instagram" target="_blank">
          <FaInstagram />
        </SocialLink>
        <SocialLink href="#" aria-label="Link do YouTube" target="_blank">
          <FaYoutube />
        </SocialLink> */}
        <SocialLink
          href="https://br.linkedin.com/in/higor-ant%C3%B4nio-dos-santos-benevenuto-5b428b11b"
          aria-label="Link do LinkedIn"
          target="_blank"
        >
          <FaLinkedin />
        </SocialLink>
      </div>
      <div className="bottom-section">
        <p>
          {creationYear === currentYear ? "" : `${creationYear} - `}
          {currentYear} | Higor Antônio
        </p>
      </div>
    </footer>
  );
}

export default Footer;
