import { useSelector, useDispatch } from "react-redux";
import {
  selectVehicleEquipmentFilter,
  selectVehicleTransmissionFilter,
} from "../../redux/filters/selectors";
import {
  changeVehicleEquipmentFilter,
  changeVehicleTransmissionFilter,
} from "../../redux/filters/slice";
import FilterButtonsGrid from "../FilterButtonsGrid/FilterButtonsGrid";
import FilterButton from "../FilterButton/FilterButton";
import FilterTitle from "../FilterTitle/FilterTitle";

export const equipmentFilters = [
  {
    name: "AC",
    icon: "icon-wind",
  },
  {
    name: "kitchen",
    icon: "icon-coffee",
  },
  {
    name: "TV",
    icon: "icon-tv",
  },
  {
    name: "bathroom",
    icon: "icon-droplet",
  },
];

const EquipmentFilter = () => {
  const equipment = useSelector(selectVehicleEquipmentFilter);
  const vehicleTransmissionFilter = useSelector(
    selectVehicleTransmissionFilter
  );
  const dispatch = useDispatch();

  const handleChangeVehicleEquipmentFilter = (clickedEquipment) => {
    dispatch(changeVehicleEquipmentFilter(clickedEquipment));
  };
  return (
    <>
      <FilterTitle>Vehicle equipment</FilterTitle>
      <FilterButtonsGrid>
        {equipmentFilters.map((equipmentFilter, index) => (
          <FilterButton
            isSelected={equipment.includes(equipmentFilter.name)}
            changeFilterHandler={() =>
              handleChangeVehicleEquipmentFilter(equipmentFilter.name)
            }
            key={index}
            filterData={equipmentFilter}
            variant="equipment"
          />
        ))}
        <FilterButton
          isSelected={vehicleTransmissionFilter === "Automatic"}
          variant="equipment"
          changeFilterHandler={() =>
            dispatch(changeVehicleTransmissionFilter())
          }
          filterData={{ icon: "icon-diagram" }}
        />
      </FilterButtonsGrid>
    </>
  );
};

export default EquipmentFilter;
