import FilterButtonsGrid from "../FilterButtonsGrid/FilterButtonsGrid";
import FilterButton from "../FilterButton/FilterButton";
import FilterTitle from "../FilterTitle/FilterTitle";

const vehicleTypeFilters = [
  {
    name: "Van",
    icon: "icon-3grid",
  },
  {
    name: "Fully Integrated",
    icon: "icon-4grid",
  },
  {
    name: "Alclove",
    icon: "icon-9grid",
  },
];

const VehicleTypeFilter = () => {
  return (
    <>
      <FilterTitle>Vehicle type</FilterTitle>
      <FilterButtonsGrid>
        {vehicleTypeFilters.map((equipmentFilter, index) => (
          <FilterButton
            key={index}
            filterData={equipmentFilter}
            variant="vehicle-type"
          />
        ))}
      </FilterButtonsGrid>
    </>
  );
};

export default VehicleTypeFilter;
