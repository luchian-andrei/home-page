import "./styles.css";

export default function BandInfo() {
  return (
    <div className="band-info-container">
      <div className="band-info-text">
        <h1> THE BAND</h1>
        <span>We love music</span>
        <p>
          We have created a fictional band website. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
          nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.
        </p>
        <div className="band-info-cards">
          <div id="band" className="card">
            <p>Name</p>
            <img src="/images/img1.jpg" alt="random img" />
          </div>
          <div className="card">
            <p>Name</p>
            <img src="/images/img2.jpg" alt="random img" />
          </div>
          <div className="card">
            <p>Name</p>
            <img src="/images/img3.jpg" alt="random img" />
          </div>
        </div>
      </div>
    </div>
  );
}
