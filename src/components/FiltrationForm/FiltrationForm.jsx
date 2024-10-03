import { useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filters/slice";
import { fetchVehicles } from "../../redux/vehicles/operations";
import { cleanVehicles } from "../../redux/vehicles/slice";
import { Formik, Form } from "formik";
import { activateErrorToast } from "../../utils/toast";
import LocationFilter from "../LocationFilter/LocationFilter";
import EquipmentFilter from "../EquipmentFilter/EquipmentFilter";
import VehicleTypeFilter from "../VehicleTypeFilter/VehicleTypeFilter";
import Button from "../common/Button/Button";

import css from "./FiltrationForm.module.css";

const FiltrationForm = () => {
  const reset = true;

  const initialValues = {
    location: "",
    checkedEquipment: [],
    vehicleType: "",
  };

  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    const { location, checkedEquipment, vehicleType } = values;

    if (!location && !checkedEquipment.length && !vehicleType) {
      activateErrorToast("At least one filter should be chosen");
      return;
    }

    const newVehicleEquipment = checkedEquipment.filter(
      (equipment) => equipment !== "Automatic"
    );

    const newFilters = {
      vehicleType,
      vehicleEquipment: newVehicleEquipment,
      location,
      transmission: checkedEquipment.includes("Automatic") ? "Automatic" : "",
    };

    dispatch(changeFilter(newFilters));

    const reset = true;

    dispatch(fetchVehicles({ page: 1, limit: 4, filters: newFilters, reset }))
      .unwrap()
      .catch(() => {
        dispatch(cleanVehicles());
      });
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form className={css["filtration-form"]}>
        <LocationFilter />
        <h2 className={css["filters-title"]}>Filters</h2>
        <EquipmentFilter />
        <VehicleTypeFilter />
        <Button type="submit" extraClass="search-button">
          Search
        </Button>
      </Form>
    </Formik>
  );
};

export default FiltrationForm;
