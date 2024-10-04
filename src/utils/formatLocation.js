export const formatLocation = (string) => {
  if (!string.includes(",")) {
    return string;
  }

  return string
    .split(", ")
    .reverse()
    .join(", ");
};
