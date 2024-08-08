function toggleMode() {
  const html = document.documentElement;
  html.classList.toggle("light");

  const iconButton = document.querySelector("#switch button ion-icon");

  if (html.classList.contains("light")) {
    iconButton.setAttribute("name", "sunny");
  } else {
    iconButton.setAttribute("name", "moon");
  }
}