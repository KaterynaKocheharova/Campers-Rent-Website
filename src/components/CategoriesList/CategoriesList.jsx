import CategoryItem from "../CategoryItem/CategoryItem";
import { getIconByCategoryName } from "../../utils/icons";
import clsx from "clsx";
import css from "./CategoriesList.module.css";

const CategoriesList = ({
  variant = "details",
  availableCategories,
  engine,
  transmission,
}) => {
  // the design for the card requires only 4 category items, and they should be only engine transmission, kitchen and AC,
  // but in the details page I'm supposed to have all items, so
  // below I was trying to implement this
  if (variant === "details") {
    return (
      <ul className={clsx(css.list, css.mb100)}>
        {availableCategories.map((category, index) => {
          const icon = getIconByCategoryName(category);
          return <CategoryItem key={index} icon={icon} text={category} />;
        })}
        <CategoryItem text={engine} icon="icon-fuel-pump" />
        <CategoryItem text={transmission} icon="icon-diagram" />
      </ul>
    );
  } else if (variant === "card") {
    return (
      <ul className={clsx(css.list, css.card)}>
        <CategoryItem text={transmission} icon="icon-diagram" />
        <CategoryItem text={engine} icon="icon-fuel-pump" />
        {availableCategories.map((category, index) => {
          if (category === "Kitchen" || category === "AC") {
            const icon = getIconByCategoryName(category);
            return <CategoryItem key={index} icon={icon} text={category} />;
          }
          return null;
        })}
      </ul>
    );
  }
};

export default CategoriesList;
