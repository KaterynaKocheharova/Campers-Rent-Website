export const useGetAvailableCategories = (vehicleData) => {

  const {
    AC,
    bathroom,
    kitchen,
    TV,
    radio,
    refrigerator,
    microwave,
    gas,
    water,
  } = vehicleData || {};

  const availableCategories = [
    { name: "AC", available: AC },
    { name: "Bathroom", available: bathroom },
    { name: "Kitchen", available: kitchen },
    { name: "TV", available: TV },
    { name: "Radio", available: radio },
    { name: "Refrigerator", available: refrigerator },
    { name: "Microwave", available: microwave },
    { name: "Gas", available: gas },
    { name: "Water", available: water },
  ]
    .filter((category) => category.available)
    .map((category) => category.name);

    console.log(availableCategories)

  return availableCategories;
};
