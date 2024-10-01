import { useDispatch, useSelector } from "react-redux";
import { fetchVehicles } from "../redux/vehicles/operations";
import { cleanVehicles } from "../redux/vehicles/slice";
import {
  selectLocationFilter,
  selectVehicleEquipmentFilter,
  selectVehicleTransmissionFilter,
  selectVehicleTypeFilter,
} from "../redux/filters/selectors";
import { selectCurrentPage } from "../redux/vehicles/selectors";

export const useFetchVehicles = (page) => {
  const currentPage = useSelector(selectCurrentPage);
  const location = useSelector(selectLocationFilter);
  const vehicleEquipment = useSelector(selectVehicleEquipmentFilter);
  const vehicleType = useSelector(selectVehicleTypeFilter);
  const transmission = useSelector(selectVehicleTransmissionFilter);

  const dispatch = useDispatch();

  const fetch = () => {
    dispatch(
      fetchVehicles({
        page: page ? page : currentPage,
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
      .catch(() => {
        dispatch(cleanVehicles());
      });
  };

  return { fetch };
};
