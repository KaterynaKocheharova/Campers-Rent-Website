export const scrollToSubpage = (component) => {
  console.log(component);
  const { top } = component.getBoundingClientRect();
  window.scrollBy({
    top,
    behavior: "smooth",
  });
};
