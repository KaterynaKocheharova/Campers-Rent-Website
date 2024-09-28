import CategoryItem from "../CategoryItem/CategoryItem";
import { getIconByCategoryName } from "../../utils/icons";
import clsx from "clsx";
import css from "./CategoriesList.module.css";

const CategoriesList = ({
  availableCategories,
  engine,
  transmission,
  extraClass,
}) => {
  return (
    <ul className={clsx(css.list, css[extraClass])}>
      {availableCategories.map((category, index) => {
        const icon = getIconByCategoryName(category);
        return <CategoryItem key={index} icon={icon} text={category} />;
      })}
      <CategoryItem text={engine} icon="icon-fuel-pump" />
      <CategoryItem text={transmission} icon="icon-diagram" />
    </ul>
  );
};

export default CategoriesList;
