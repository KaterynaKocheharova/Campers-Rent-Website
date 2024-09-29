import VehicleImage from "../VehicleImage/VehicleImage";
import css from "./VehicleImageGrid.module.css";

const VehicleImageGrid = ({ images }) => {
  return (
    <ul className={css.grid}>
      {/* The data returned doesn't provide 4 pcitures as the mockup provides - 
      instead it has three items in the gallery array each of them
      having two identical pics - so here I'm repeating the first pic in order to match the mockup */}
      {images.map((image, index) => (
        <VehicleImage key={index} url={image} />
      ))}
      <VehicleImage url={images[0]} />
    </ul>
  );
};

export default VehicleImageGrid;
