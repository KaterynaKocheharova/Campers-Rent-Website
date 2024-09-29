import { MdGasMeter, MdOutlineMicrowave } from "react-icons/md";
import { RiFridgeLine } from "react-icons/ri";
import ThickText from "../common/ThickText/TickText";

import css from "./CategoryItem.module.css";

const CategoryItem = ({ icon, text }) => {
  return (
    <div className={css.item}>
      {icon && (
        <svg className={css.icon}>
          <use href={`/sprite.svg#${icon}`}></use>
        </svg>
      )}
      {/* some icons are not present on the mockup, so I had to add ones from React Icons lib */}
      {text === "Microwave" && <MdOutlineMicrowave className={css.icon} />}
      {text === "Gas" && <MdGasMeter className={css.icon} />}
      {text === "Refrigerator" && <RiFridgeLine className={css.icon} />}
      <ThickText extraClass="capitalized">{text}</ThickText>
    </div>
  );
};

export default CategoryItem;
