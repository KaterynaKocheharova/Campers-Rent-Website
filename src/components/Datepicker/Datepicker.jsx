import DatePicker from "react-datepicker";
import { CiCalendar } from "react-icons/ci";
import "react-datepicker/dist/react-datepicker.css";
import "./Dtepicker.css";
import { registerLocale } from "react-datepicker";
import { enUS } from "date-fns/locale";
import { format } from "date-fns";

const Datepicker = ({ onChange, isError, selected }) => {
  const customLocale = {
    ...enUS,
    options: {
      ...enUS.options,
      weekStartsOn: 1,
    },
    localize: {
      ...enUS.localize,
      day: (n) => format(new Date(2023, 0, n + 1), "EEE"),
    },
  };

  registerLocale("custom-en", customLocale);

  return (
    <DatePicker
      locale="custom-en"
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
