import FilterButtonsGrid from "../FilterButtonsGrid/FilterButtonsGrid";
import FilterButton from "../FilterButton/FilterButton";

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
  return (
    <FilterButtonsGrid>
      {equipmentFilters.map((equipmentFilter, index) => (
        <FilterButton
          key={index}
          filterData={equipmentFilter}
          variant="equipment"
        />
      ))}
    </FilterButtonsGrid>
  );
};

export default EquipmentFilter;
