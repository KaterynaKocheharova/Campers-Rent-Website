import DatePicker from "react-datepicker";
import { CiCalendar } from "react-icons/ci";
import "react-datepicker/dist/react-datepicker.css";
import "./Dtepicker.css";

const Datepicker = ({ selected, onChange, isError }) => {
  return (
    <DatePicker
      className={isError ? "error-input" : ""}
      showIcon
      icon={<CiCalendar />}
      toggleCalendarOnIconClick
      selected={selected}
      onChange={onChange}
      dateFormat="yyyy/MM/dd"
      placeholderText="Booking date*"
    />
  );
};

export default Datepicker;
