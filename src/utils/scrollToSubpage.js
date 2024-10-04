
export const scrollToSubpage = (component) => {
  const { top } = component.getBoundingClientRect();
  window.scrollBy({
    top,
    behavior: "smooth",
  });
};
