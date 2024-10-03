import { useId } from "react";
import { useField, Field } from "formik";
import { getFilterButtonName } from "../FilterButton/getFilterButtonName";
import StyledFilterButton from "../StyledFilterButton/StyledFilterButton";
import css from "./FilterEquipmentCheckbox.module.css";

const FilterEquipmentCheckbox = ({ filterData: { icon, name } }) => {
  const filterName = getFilterButtonName(name);
  const [field, meta] = useField({
    name: "checkedEquipment",
  });
  const checkboxId = useId();

  return (
    <StyledFilterButton
      htmlFor={checkboxId}
      selected={field.value.includes(name)}
    >
      <Field
        className={css.checkbox}
        type="checkbox"
        id={checkboxId}
        name={field.name}
        value={name}
        checked={field.value.includes(name)}
      />
      <svg className={css.icon}>
        <use href={`/sprite.svg#${icon}`}></use>
      </svg>
      <p className={css.text}>{filterName}</p>
    </StyledFilterButton>
  );
};

export default FilterEquipmentCheckbox;
