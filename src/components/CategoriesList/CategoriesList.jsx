import CategoryItem from "../CategoryItem/CategoryItem";
import { getIconByCategoryName } from "../../utils/icons";
import css from "./CategoriesList.module.css";

const CategoriesList = ({ availableCategories, engine, transmission }) => {
  return (
    <ul className={css.list}>
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
