import VehicleImage from "../VehicleImage/VehicleImage";
import css from "./VehicleImageGrid.module.css";

const VehicleImageGrid = ({ images }) => {
  return (
    <ul className={css.grid}>
      {images.map((image, index) => (
        <VehicleImage key={index} url={image} />
      ))}
      <VehicleImage url={images[0]} />
    </ul>
  );
};

export default VehicleImageGrid;
