//REQUIREMENTS
const career = document.querySelectorAll(".career");
const containerMsj = document.querySelector(".container-msj");
const btnClose = document.getElementById("btn-close");

career.forEach((el) =>
  el.addEventListener("click", function () {
    containerMsj.classList.add("active");
  })
);

btnClose.addEventListener("click", function () {
  containerMsj.classList.remove("active");
});
