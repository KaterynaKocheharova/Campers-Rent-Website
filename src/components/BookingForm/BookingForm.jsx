import * as Yup from "yup";
import { Formik, Form } from "formik";
import FormField from "../FormField/FormField";
import { activateSuccessToast } from "../../utils/toast";
import H3Title from "../common/H3Title/H3Title";
import Text from "../common/Text/Text";
import Button from "../common/Button/Button";
import Datepicker from "../Datepicker/Datepicker";
import css from "./BookingForm.module.css";

const BookingForm = () => {
  const date = new Date();
  const initialValues = {
    name: "",
    email: "",
    bookingDate: "",
    comment: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .trim()
      .max(50, "Name can't exceed 50 characters")
      .required("Name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    bookingDate: Yup.date()
      .required("Booking date is required")
      .min(new Date(), "Only future dates!"),
    comment: Yup.string()
      .trim()
      .max(500, "Comment can't exceed 500 characters"),
  });

  const handleSubmit = (values, { resetForm, setSubmitting }) => {
    console.log(values);
    activateSuccessToast("Booking successful!");
    setSubmitting(false);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ values, setFieldValue, isSubmitting }) => (
        <Form className={css["form-container"]}>
          <H3Title extraClass="form">Book your campervan now</H3Title>
          <Text variant="light" extraClass="mb24">
            Stay connected! We are always ready to help you.
          </Text>
          <div className={css.inputs}>
            <FormField name="name" placeholder="Name*" />
            <FormField name="email" type="email" placeholder="Email*" />
            <Datepicker
              selected={values.bookingDate}
              onChange={(date) => setFieldValue("bookingDate", date)}
            />
            <FormField
              extraClass="textarea"
              name="comment"
              as="textarea"
              placeholder="Comment"
            />
          </div>
          <div className={css.center}>
            <Button
              type="submit"
              extraClass={isSubmitting && "disabled"}
              disabled={isSubmitting}
            >
              Send
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default BookingForm;
