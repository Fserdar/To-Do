const header = document.getElementById("header");
const dsc = document.getElementById("desc");
const add = document.querySelector(".add");
const mdiv = document.querySelector(".main-container");

add.onclick = function () {
  if (header.value == "") {
    document.querySelector(".w1").style.visibility = "visible";
    setTimeout(() => {
      document.querySelector(".w1").style.visibility = "hidden";
    }, 3000);
  }
  if (dsc.value == "") {
    document.querySelector(".w2").style.visibility = "visible";
    setTimeout(() => {
      document.querySelector(".w2").style.visibility = "hidden";
    }, 3000);
  } else {
    mdiv.innerHTML += `<div class="todo-item">
  <div class="todo-text">
          <h4>${header.value}</h4>
          <p>${dsc.value}</p>
        </div>
        <div>
        <i
            class="fa-solid fa-trash fa-2x"
            style="margin-right: 1.5rem; cursor: pointer"
          ></i>
          <i class="fa-solid fa-circle-check fa-2x"></i>
        </div>
        </div>`;
  }
};

// add.addEventListener("click", (event) => {
//   if (event.target.classList.contains("add")) {
//     event.target.previousElementSibling.childElement.innerText.remove();
//   }
// });

mdiv.addEventListener("click", (event) => {
  if (event.target.classList.contains("fa-circle-check")) {
    event.target.style.color = "white";
    event.target.style.backgroundColor = "white";
    event.target.parentElement.previousElementSibling.style.textDecoration =
      "line-through";
    event.target.parentElement.previousElementSibling.style.textDecorationColor =
      "white";
    event.target.parentElement.previousElementSibling.style.textDecorationThickness =
      "3px";
    event.target.parentElement.parentElement.style.backgroundColor =
      "rgb(217, 193, 162)";
  }
  if (event.target.classList.contains("fa-trash")) {
    event.target.parentElement.parentElement.remove();
    console.log(event.target.parentElement.parentElement);
  }
});
