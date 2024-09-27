import VehicleImage from "../VehicleImage/VehicleImage";
import css from "./VehicleImageGrid.module.css";

const VehicleImageGrid = ({ images }) => {
  return (
    <ul className={css.grid}>
      {images.map((image, index) => (
        // also pass url
        <VehicleImage key={index} />
      ))}
    </ul>
  );
};

export default VehicleImageGrid;
