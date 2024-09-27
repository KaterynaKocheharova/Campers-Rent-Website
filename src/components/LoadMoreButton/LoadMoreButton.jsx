import { useSelector, useDispatch } from "react-redux";
import { selectCurrentPage } from "../../redux/vehicles/selectors";
import {
  selectVehicleEquipmentFilter,
  selectVehicleTransmissionFilter,
  selectVehicleTypeFilter,
  selectLocationFilter,
} from "../../redux/filters/selectors";
import { fetchVehicles } from "../../redux/vehicles/operations";
import { changeCurrentPage } from "../../redux/vehicles/slice";
import Button from "../common/Button/Button";

const LoadMoreButton = () => {
  const currentPage = useSelector(selectCurrentPage);
  const location = useSelector(selectLocationFilter);
  const vehicleEquipment = useSelector(selectVehicleEquipmentFilter);
  const vehicleType = useSelector(selectVehicleTypeFilter);
  const transmission = useSelector(selectVehicleTransmissionFilter);

  const dispatch = useDispatch();

  const handleLoadMoreClick = () => {
    dispatch(changeCurrentPage(currentPage + 1));
    dispatch(
      fetchVehicles({
        page: currentPage + 1,
        limit: 4,
        filters: {
          location,
          vehicleEquipment,
          vehicleType,
          transmission,
        },
      })
    )
      .unwrap()
      .then(() => {
        window.scrollBy({
          top: 500,
          behavior: "smooth",
        });
      });
  };

  return (
    <Button handleClick={handleLoadMoreClick} extraClass="load-more-button">
      Load more
    </Button>
  );
};

export default LoadMoreButton;
