import DatePicker from "react-datepicker";
import { CiCalendar } from "react-icons/ci";
import "react-datepicker/dist/react-datepicker.css";
import "./Dtepicker.css";
import css from "./Datepicker.module.css";

const Datepicker = ({ selected, onChange }) => {
//   const years = range(1990, getYear(new Date()) + 1, 1);
//   const months = [
//     "January",
//     "February",
//     "March",
//     "April",
//     "May",
//     "June",
//     "July",
//     "August",
//     "September",
//     "October",
//     "November",
//     "December",
//   ];
  return (
    <DatePicker
//       renderCustomHeader={({
//         date,
//         changeYear,
//         changeMonth,
//         decreaseMonth,
//         increaseMonth,
//         prevMonthButtonDisabled,
//         nextMonthButtonDisabled,
//       }) => (
//         <div
//           style={{
//             margin: 10,
//             display: "flex",
//             justifyContent: "center",
//           }}
//         >
//           <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
//             {"<"}
//           </button>
//           <select
//             value={getYear(date)}
//             onChange={({ target: { value } }) => changeYear(value)}
//           >
//             {years.map((option) => (
//               <option key={option} value={option}>
//                 {option}
//               </option>
//             ))}
//           </select>

//           <select
//             value={months[getMonth(date)]}
//             onChange={({ target: { value } }) =>
//               changeMonth(months.indexOf(value))
//             }
//           >
//             {months.map((option) => (
//               <option key={option} value={option}>
//                 {option}
//               </option>
//             ))}
//           </select>

//           <button onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
//             {">"}
//           </button>
//         </div>
//       )}
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
