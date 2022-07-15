changeStatus = (tag) => {
  console.log(tag.value);
  tag.removeAttribute("class");
  tag.setAttribute("class", stringToKebabCase(tag.value));
}