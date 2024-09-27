import { Circles } from "react-loader-spinner";
import css from "./Loader.module.css";

const Loader = () => {
  
  return (
    <div className={css.backdrop}>
      <div className={css["loader-group"]}>
        <Circles color="var(--red-light)" />
      </div>
    </div>
  );
};

export default Loader;
