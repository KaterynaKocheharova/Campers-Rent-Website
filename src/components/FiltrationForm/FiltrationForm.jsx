import * as Yup from "yup";
import { Formik, Form } from "formik";
import LocationFilter from "../LocationFilter/LocationFilter";
import css from "./FiltrationForm.module.css";

const BookingForm = () => {
  const initialValues = {
    location: "",
    checkedEquipment: [],
    vehicleType: "",
  };

  const validationSchema = Yup.object().shape({
    location: Yup.string().required("Write a city"),
    // checkedEquipment: Yup.array().required(
    //   "Choose equipment. You can choose a few"
    // ),
    // vehicleType: Yup.string().required("Choose one vehicle type"),
  });

  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css["filtration-form"]}>
        <LocationFilter />
        <h2 className={css["filters-title"]}>Filters</h2>
        <button type="submit">Search</button>
      </Form>
    </Formik>
  );
};

export default BookingForm;
