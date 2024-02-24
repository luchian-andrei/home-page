import "./App.css";
import Navbar from "./components/navbar";
import InfoWrapper from "./components/info/wrapper";
import TourWrapper from "./components/tour/wrapper";
import Contact from "./components/contact";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <InfoWrapper />
      <TourWrapper />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
