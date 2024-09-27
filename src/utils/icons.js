export const categories = [
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
  { name: "Radio", icon: "icon-radios" },

  { name: "Refrigerator", icon: "" },
  {
    name: "Gas",
    icon: "",
  },
  { name: "Water", icon: "icon-droplet" },
  { name: "Microwave", icon: "" },
];

export const getIconByCategoryName = (categoryName) =>
  categories.find((category) => categoryName === category.name).icon;

