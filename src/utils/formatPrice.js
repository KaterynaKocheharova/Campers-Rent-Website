export const formatPrice = (price) =>
  String(price.toFixed(2)).split(".").join(",");
