import { useNavigate } from "react-router-dom";
import Profil from "../../assets/photo.jpg";
import CV from "../../downloads/CV.pdf";
import Linkedin from "../../assets/linkedin.svg";
import Resume from "../../assets/resume.svg";
import Github from "../../assets/github.svg";
import styles from "./Home.module.css";

export default function Home() {
  const navigate = useNavigate();
  const handleLinkWebsite = () => {
    navigate("/aboutme");
  };
  return (
    <div className={styles.About}>
      <div className={styles.containerPresentation}>
        <div className={styles.presentation}>
          <h2>Anthony Discours</h2>
          <h3>I am a Web Developper.</h3>
          <p>
            I am currently searching for an apprenticeship opportunity to put
            into practice what I've learned in the world of work.
          </p>
          <div className={styles.contactLogo}>
            <a
              href="https://www.linkedin.com/in/anthony-discours/"
              target="__blank"
            >
              <img src={Linkedin} alt="linkedin" />{" "}
            </a>
            <a href="https://github.com/anthonydscrs" target="__blank">
              <img
                src={Github}
                alt="GitHub"
                style={{ marginLeft: "1rem", marginRight: "1rem" }}
              />{" "}
            </a>
            <a href={CV} target="__blank" rel="noreferrer">
              <img src={Resume} alt="Resume" />{" "}
            </a>
          </div>
          <button
            type="button"
            onClick={handleLinkWebsite}
            className={styles.button}
          >
            See more
          </button>
        </div>
        <img src={Profil} className={styles.img} alt="profil" />
      </div>
    </div>
  );
}
