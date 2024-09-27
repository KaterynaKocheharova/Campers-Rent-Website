export const getFilterButtonName = (name) => {
    console.log(name);
  switch (name) {
    case "fullyIntegrated":
      return "Fully Intergated";
    case "panelTruck":
      return "van";
    default:
      return name;
  }
};
