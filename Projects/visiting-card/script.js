const uName = document.querySelector(".uName");
const showName = document.querySelector(".showName");

uName.addEventListener("input", function () {
  showName.textContent = uName.value;
});
