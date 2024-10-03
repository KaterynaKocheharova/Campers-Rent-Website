import FilterButtonsGrid from "../FilterButtonsGrid/FilterButtonsGrid";
import FilterTitle from "../FilterTitle/FilterTitle";
import FilterEquipmentCheckbox from "../FilterEquipmentCheckbox/FilterEquipmentCheckbox";

export const equipmentFilters = [
  {
    name: "AC",
    icon: "icon-wind",
  },
  { name: "transmission", icon: "icon-diagram" },
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
  return (
    <>
      <FilterTitle>Vehicle equipment</FilterTitle>
      <FilterButtonsGrid name="checkedEquipment">
        {equipmentFilters.map((equipmentFilter, index) => {
          if (equipmentFilter.name === "transmission") {
            return (
              <FilterEquipmentCheckbox
                key={index}
                variant="equipment"
                filterData={{ ...equipmentFilter, name: "Automatic" }}
              />
            );
          } else {
            return (
              <FilterEquipmentCheckbox
                key={index}
                filterData={equipmentFilter}
                variant="equipment"
              />
            );
          }
        })}
      </FilterButtonsGrid>
    </>
  );
};

export default EquipmentFilter;
