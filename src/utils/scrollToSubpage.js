// it's used when you click on the features or reviews tab on the details page

export const scrollToSubpage = (component) => {
  const { top } = component.getBoundingClientRect();
  window.scrollBy({
    top,
    behavior: "smooth",
  });
};
