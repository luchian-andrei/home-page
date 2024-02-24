import "./styles.css";
import TourCard from "../card";

export default function TourWrapper() {
  return (
    <div id="tour" className="tour-wrapper">
      <div className="tour-text">
        <h1>TOUR DATES</h1>
        <span>Remember to book your tickets! </span>
      </div>
      <div className="tour-list">
        <ul>
          <li id="september">
            September <span id="sold-out">Sold Out</span>{" "}
          </li>
          <li id="october">
            October <span id="sold-out">Sold Out</span>{" "}
          </li>
          <li id="november">
            November <span id="three">3</span>
          </li>
        </ul>
      </div>
      <div className="tour-cards">
        <TourCard
          location="New York"
          date="Fri 27 "
          img="/images/newyork.jpg"
          id="newyork"
        />
        <TourCard
          location="Paris"
          date="Sat 28 "
          img="/images/paris.jpg"
          id="paris"
        />
        <TourCard
          location="San Francisco"
          date="Sun 29"
          img="/images/sanfran.jpg"
          id="sanfran"
        />
      </div>
    </div>
  );
}
