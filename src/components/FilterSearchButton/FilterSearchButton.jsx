import { useDispatch } from "react-redux";
import { cleanVehicles } from "../../redux/vehicles/slice";
import { useFetchVehicles } from "../../hooks/useFetchVehicles";
import Button from "../common/Button/Button";

const FilterSearchButton = () => {
  const dispatch = useDispatch();

  const { fetch } = useFetchVehicles();

  const handleSearchByFilter = () => {
    dispatch(cleanVehicles());
    fetch();
  };

  return (
    <div>
      <Button handleClick={handleSearchByFilter} extraClass="search-button">
        Search
      </Button>
    </div>
  );
};

export default FilterSearchButton;
