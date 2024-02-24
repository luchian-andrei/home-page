import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareFacebook,
  faInstagram,
  faSnapchat,
  faPinterestP,
  faTwitter,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <div className="footer-container">
      <img src="/images/map.jpg" alt="map" />
      <div className="f-icons-wrapper">
        <FontAwesomeIcon icon={faSquareFacebook} size="xl" />
        <FontAwesomeIcon icon={faInstagram} size="xl" />
        <FontAwesomeIcon icon={faSnapchat} size="xl" />
        <FontAwesomeIcon icon={faPinterestP} size="xl" />
        <FontAwesomeIcon icon={faTwitter} size="xl" />
        <FontAwesomeIcon icon={faLinkedinIn} size="xl" />
      </div>
      <p id="f-info-link">
        Powered by <a href="dulceata-romaniei">Dulceata Romaniei.</a>{" "}
      </p>
    </div>
  );
}
