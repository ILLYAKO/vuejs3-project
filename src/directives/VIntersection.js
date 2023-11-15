export default {
  name: "intersection",
  mounted(element, binding) {
    // console.log(element, binding);
    // console.log(this.$refs.observer);
    const options = {
      root: document.querySelector("#scrollArea"),
      rootMargin: "0px",
      threshold: 1.0,
    };
    const callback = (entries) => {
      if (entries[0].isIntersecting) {
        binding.value();
      }
    };
    const observer = new IntersectionObserver(callback, options);
    observer.observe(element);
  },
};
