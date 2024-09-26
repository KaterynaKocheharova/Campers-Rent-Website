import { useSelector, useDispatch } from "react-redux";
import { selectVehicleEquipmentFilter } from "../../redux/filters/selectors";
import { changeVehicleEquipmentFilter } from "../../redux/filters/slice";
import FilterButtonsGrid from "../FilterButtonsGrid/FilterButtonsGrid";
import FilterButton from "../FilterButton/FilterButton";
import FilterTitle from "../FilterTitle/FilterTitle";

const equipmentFilters = [
  {
    name: "AC",
    icon: "icon-wind",
  },
  {
    name: "Automatic",
    icon: "icon-diagram",
  },
  {
    name: "Kitchen",
    icon: "icon-coffee",
  },
  {
    name: "TV",
    icon: "icon-tv",
  },
  {
    name: "Bathroom",
    icon: "icon-droplet",
  },
];

const EquipmentFilter = () => {
  const equipment = useSelector(selectVehicleEquipmentFilter);
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
      </FilterButtonsGrid>
    </>
  );
};

export default EquipmentFilter;
