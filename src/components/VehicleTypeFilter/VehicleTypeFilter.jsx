import FilterButtonsGrid from "../FilterButtonsGrid/FilterButtonsGrid";
import FilterVehicleTypeRadio from "../FilterVehicleTypeRadio/FilterVehicleTypeRadio";
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
  return (
    <>
      <FilterTitle>Vehicle type</FilterTitle>
      <FilterButtonsGrid name="vehicleType">
        {vehicleTypeFilters.map((equipmentFilter, index) => (
          <FilterVehicleTypeRadio key={index} filterData={equipmentFilter} />
        ))}
      </FilterButtonsGrid>
    </>
  );
};

export default VehicleTypeFilter;
