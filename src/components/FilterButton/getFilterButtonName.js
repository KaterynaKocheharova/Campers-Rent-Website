export const getFilterButtonName = (name) => {

  switch (name) {
    case "fullyIntegrated":
      return "Fully Intergated";
    case "panelTruck":
      return "van";
    default:
      return name;
  }
};
