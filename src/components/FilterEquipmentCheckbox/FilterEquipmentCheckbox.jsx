import { useId } from "react";
import { useField, Field } from "formik";
import { getFilterButtonName } from "../../utils/getFilterButtonName";
import StyledFilterButton from "../StyledFilterButton/StyledFilterButton";
import StyledFilterButtonText from "../StyledFilterButtonText/StyledFilterButtonText";
import StyledFilterButtonIcon from "../StyledFilterButtonIcon/StyledFilterButtonIcon";
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
      <StyledFilterButtonIcon path={`/sprite.svg#${icon}`} />
      <StyledFilterButtonText>{filterName}</StyledFilterButtonText>
    </StyledFilterButton>
  );
};

export default FilterEquipmentCheckbox;
