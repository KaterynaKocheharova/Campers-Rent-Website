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
  const initialValues = {
    location: "",
    checkedEquipment: [],
    vehicleType: "",
  };

  const dispatch = useDispatch();

  const handleSubmit = (values, { setSubmitting }) => {
    const { location, checkedEquipment, vehicleType } = values;

    if (!location && !checkedEquipment.length && !vehicleType) {
      activateErrorToast("At least one filter should be chosen");
      setSubmitting(false);
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

    dispatch(fetchVehicles({ page: 1, filters: newFilters, reset: true }))
      .unwrap()
      .catch(() => {
        dispatch(cleanVehicles());
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {({ isSubmitting }) => (
        <Form className={css["filtration-form"]}>
          <LocationFilter />
          <h2 className={css["filters-title"]}>Filters</h2>
          <EquipmentFilter />
          <VehicleTypeFilter />
          <Button
            type="submit"
            extraClass="search-button"
            disabled={isSubmitting}
          >
            Search
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default FiltrationForm;
