import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function Navbar() {
  const [expand, setExpand] = useState(false);

  console.log(expand);

  return (
    <div className="navbar-container">
      <div className="shortcuts">
        <a href="#home">Home</a>
        <a href="#band">Band</a>
        <a href="#tour">Tour</a>
        <a href="#contact">Contact</a>

        <a href="#navbar" onMouseOver={() => setExpand(true)}>
          More <FontAwesomeIcon icon={faCaretDown} />{" "}
          {expand ? (
            <ul
              className="expandable-list"
              onMouseOver={() => setExpand(true)}
              onMouseLeave={() => setExpand(false)}
            >
              <li>Merchandise</li>
              <li>Extras</li>
              <li>Media</li>
            </ul>
          ) : null}
        </a>
      </div>
      <div className="icon">
        <FontAwesomeIcon icon={faSearch} />
      </div>
    </div>
  );
}
