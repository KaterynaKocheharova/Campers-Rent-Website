import { MdGasMeter,  MdOutlineMicrowave} from "react-icons/md";
import { TbFridge } from "react-icons/tb";

import css from "./CategoryItem.module.css";

const CategoryItem = ({ icon, text }) => {
  return (
    <div className={css.item}>
      {icon && (
        <svg className={css.icon}>
          <use href={`/sprite.svg#${icon}`}></use>
        </svg>
      )}
      {text === "Microwave" && <MdOutlineMicrowave className={css.icon} />}
      {text === "Gas" && <MdGasMeter className={css.icon} />}
      {text === "Refridgirator" && <TbFridge className={css.icon} />}

      <p className={css.text}>{text}</p>
    </div>
  );
};

export default CategoryItem;
