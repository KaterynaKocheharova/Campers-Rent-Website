import { useDispatch, useSelector } from "react-redux";
import { selectVehicleTypeFilter } from "../../redux/filters/selectors";
import { changeVehicleTypeFilter } from "../../redux/filters/slice";
import FilterButtonsGrid from "../FilterButtonsGrid/FilterButtonsGrid";
import FilterButton from "../FilterButton/FilterButton";
import FilterTitle from "../FilterTitle/FilterTitle";

const vehicleTypeFilters = [
  {
    name: "panelTruck",
    icon: "icon-3grid",
  },
  {
    name: "fullyIntegrated",
    icon: "icon-4grid",
  },
  {
    name: "alcove",
    icon: "icon-9grid",
  },
];

const VehicleTypeFilter = () => {
  const vehicleType = useSelector(selectVehicleTypeFilter);
  const dispatch = useDispatch();

  const handleChangeVehicleTypeFilter = (newType) => {
    dispatch(changeVehicleTypeFilter(newType));
  };

  return (
    <>
      <FilterTitle>Vehicle type</FilterTitle>
      <FilterButtonsGrid>
        {vehicleTypeFilters.map((equipmentFilter, index) => (
          <FilterButton
            isSelected={vehicleType === equipmentFilter.name}
            changeFilterHandler={() =>
              handleChangeVehicleTypeFilter(equipmentFilter.name)
            }
            key={index}
            filterData={equipmentFilter}
          />
        ))}
      </FilterButtonsGrid>
    </>
  );
};

export default VehicleTypeFilter;
