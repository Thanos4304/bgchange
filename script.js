function toggleBgColor() {
  var body = document.querySelector("body");
  var toggle = document.querySelector("#toggle-bg-color");
  if (toggle.checked) {
    body.style.backgroundColor = "#333";
    body.style.color = "#f5f5f5";
  } else {
    body.style.backgroundColor = "#f5f5f5";
    body.style.color = "#333";
  }
}
