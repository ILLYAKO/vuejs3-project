export default {
  name: "focus",
  mounted(element) {
    console.log(element);
    element.focus();
  },
};
