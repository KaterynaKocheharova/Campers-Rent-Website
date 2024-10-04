import Text from "../../common/Text/Text";
import { formatLocation } from "../../../utils/formatLocation";
import css from "./Location.module.css";

const Location = ({ location }) => {
  return (
    <div className={css["location-flex"]}>
      <svg className={css.icon}>
        <use href="/sprite.svg#icon-map"></use>
      </svg>
      <Text variant="dark">{formatLocation(location)}</Text>
    </div>
  );
};

export default Location;
