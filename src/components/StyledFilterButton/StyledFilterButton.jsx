import clsx from "clsx";
import css from "./StyledFilterButton.module.css";

const StyledFilterButton = ({ children, selected = false, ...props }) => {
  return (
    <label
      className={clsx(css.button, { [css.selected]: selected })}
      {...props}
    >
      {children}
    </label>
  );
};

export default StyledFilterButton;
