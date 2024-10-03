import { useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filters/slice";
import { fetchVehicles } from "../../redux/vehicles/operations";
import { cleanVehicles } from "../../redux/vehicles/slice";
import { Formik, Form } from "formik";
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

  // const validationSchema = Yup.object().shape({
  //   location: Yup.string(),
  //   checkedEquipment: Yup.array()
  //     .min(1, "Choose equipment. You can choose a few"),
  //   vehicleType: Yup.string(),
  // });

  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    const { location, checkedEquipment, vehicleType } = values;

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
    <Formik
      initialValues={initialValues}
      // validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
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
