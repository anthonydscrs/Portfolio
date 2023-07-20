import Profil from "../../assets/photo.jpg";
import CV from "../../downloads/CV.pdf";
import Linkedin from "../../assets/linkedin.svg";
import Resume from "../../assets/resume.svg";
import Github from "../../assets/github.svg";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <div className={styles.About}>
      <div className={styles.containerPresentation}>
        <div className={styles.presentation}>
          <h2>Anthony Discours</h2>
          <h3>Développeur front-end.</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
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
        </div>
        <img src={Profil} className={styles.img} alt="profil" />
      </div>
    </div>
  );
}
