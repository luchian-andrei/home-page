import "./styles.css";

export default function TourCard({
  location = "",
  date = "",
  img = "",
  id = "",
}) {
  return (
    <div className="tour-card-container" id={id}>
      <img src={img} alt={location} />
      <span id="location">{location} </span>
      <span id="date">{date} Nov 2016 </span>
      <p>Praesent tincidunt sed tellus ut rutrum sed vitae justo.</p>
      <button>Buy Tickets</button>
    </div>
  );
}
