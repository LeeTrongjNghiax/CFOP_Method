changeStatus = (tag) => {
  tag.removeAttribute("class");
  tag.setAttribute("class", stringToKebabCase(tag.value));
}