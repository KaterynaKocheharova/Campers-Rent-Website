import { useId } from "react";
import { useField, Field } from "formik";
import StyledFilterButton from "../StyledFilterButton/StyledFilterButton";
import StyledFilterButtonText from "../StyledFilterButtonText/StyledFilterButtonText";
import StyledFilterButtonIcon from "../StyledFilterButtonIcon/StyledFilterButtonIcon";
import css from "./FilterVehicleTypeRadio.module.css";

const FilterVehicleTypeRadio = ({ filterData: { icon, name } }) => {
  const [field, meta] = useField({
    name: "vehicleType",
  });
  const radioId = useId();

  return (
    <StyledFilterButton htmlFor={radioId} selected={field.value === name}>
      <Field
        className={css.radio}
        type="radio"
        id={radioId}
        name={field.name}
        value={name}
        checked={field.value === name}
      />
      <StyledFilterButtonIcon path={`/sprite.svg#${icon}`} />
      <StyledFilterButtonText>{name}</StyledFilterButtonText>
    </StyledFilterButton>
  );
};

export default FilterVehicleTypeRadio;
