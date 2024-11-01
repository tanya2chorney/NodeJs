// Завдання 3

document.getElementById("btn").addEventListener("click", function () {
  console.log("Функція!!!");
});

// Завдання 4.1
document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();
  const result = document.getElementById("result");
  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;

  result.textContent = `Name: ${name},  Age: ${age}`;
});

// Завдання 4.2
document.getElementById("btn-info").addEventListener("click", function () {
  const info = document.getElementById("info");
  info.style.opacity = 1;
});

// Завдання 4.2
const buttons = document.querySelectorAll(".btn-style");
buttons.forEach(function (button) {
  button.addEventListener("mouseover", function () {
    button.style.backgroundColor = "#0056b3";
  });
  button.addEventListener("mouseout", function () {
    button.style.backgroundColor = "#007bff";
  });
});
