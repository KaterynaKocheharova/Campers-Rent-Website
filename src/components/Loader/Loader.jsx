import Text from "../Text";
import { Circles } from "react-loader-spinner";
import css from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={css.backdrop}>
      <div className={css["loader-group"]}>
        <Text>LOADER</Text>
        <Circles color="red" />
      </div>
    </div>
  );
};

export default Loader;
