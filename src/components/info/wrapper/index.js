import "./styles.css";
import BandInfo from "../band-info";
import ImageSlider from "../image-slider";

export default function InfoWrapper() {
  return (
    <div>
      <ImageSlider />
      <BandInfo />
    </div>
  );
}
