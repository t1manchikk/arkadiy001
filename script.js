const pizzas = [
  { name: "Маргарита", img: "https://i.imgur.com/1yY5Z6F.jpg" },
  { name: "Пепероні", img: "https://i.imgur.com/V8xVJvE.jpg" },
  { name: "4 сири", img: "https://i.imgur.com/6hZ6y1p.jpg" }
];

const cardsContainer = document.getElementById("cards");
const modal = document.getElementById("modal");
const closeModal = document.getElementById("closeModal");
const loginBtn = document.getElementById("loginBtn");

let isAuthorized = false;

function renderCards() {
  cardsContainer.innerHTML = "";
  pizzas.forEach(pizza => {
    cardsContainer.insertAdjacentHTML("beforeend", `
      <div class="card">
        <img src="${pizza.img}">
        <h3>${pizza.name}</h3>
      </div>
    `);
  });
}

renderCards();

cardsContainer.addEventListener("click", (event) => {
  const card = event.target.closest(".card");
  if (!card) return;

  if (!isAuthorized) {
    modal.classList.remove("hidden");
  } else {
    alert("Ви обрали піцу: " + card.querySelector("h3").innerText);
  }
});

loginBtn.addEventListener("click", () => {
  isAuthorized = true;
  modal.classList.add("hidden");
  alert("Ви успішно увійшли!");
});

closeModal.addEventListener("click", () => {
  modal.classList.add("hidden");
});