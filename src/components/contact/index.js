import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

export default function Contact() {
  return (
    <div id="contact" className="contact-wrapper">
      <div className="contact-header">
        <h1>Contact</h1>
        <span>Fan ? Drop a note!</span>
      </div>

      <div className="contact-info">
        <ul>
          <li>
            <FontAwesomeIcon icon={faLocationDot} />
            <p>Chicago, US</p>
          </li>
          <li>
            <FontAwesomeIcon icon={faPhone} />
            <p>Phone: +00 151515</p>
          </li>
          <li>
            <FontAwesomeIcon icon={faEnvelope} />
            <p>Email: mail@mail.com</p>
          </li>
        </ul>
      </div>
      <div className="contact-input">
        <form>
          <input required id="input-name" type="text" placeholder="Name" />
          <input required id="input-email" type="text" placeholder="Email" />
          <input
            required
            id="input-message"
            type="text"
            placeholder="Message"
          />
          <button type="submit">SEND</button>
        </form>
      </div>
    </div>
  );
}
