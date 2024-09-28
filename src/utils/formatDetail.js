export const formatDetail = (detail) => {
  if (!detail) return;
  let foundLetter = false;
  const formattedDetail = detail
    .split("")
    .map((char) => {
      if (!foundLetter && isNaN(char) && char !== ".") {
        foundLetter = true;
        return " " + char;
      }
      return char;
    })
    .join("");

  return formattedDetail;
};
