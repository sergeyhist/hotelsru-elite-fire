import "./index.scss";

const main = document.querySelector("main");
const favicon = document.querySelector("link[rel~='icon']");
const yellow = "#ffcf7a";
const gray = "#646464";
const rendList = [
  require("assets/images/rend_1.png"),
  require("assets/images/rend_1.png"),
  require("assets/images/rend_1.png"),
  require("assets/images/rend_1.png"),
];

favicon.href = require('assets/favicon.ico');

document.querySelector("#phone").src = require("assets/icons/phone.png");
document.querySelector("#kamin_1").src = require("assets/images/kamin_1.png");
document.querySelector("#kamin_2").src = require("assets/images/kamin_2.png");
document.querySelector("#kamin_3").src = require("assets/images/kamin_3.png");
document.querySelector("#kamin_4").src = require("assets/images/kamin_4.png");
document.querySelector("#kamin_5").src = require("assets/images/kamin_5.png");
document.querySelector("#shadow_1").src = require("assets/images/shadow_1.png");
document.querySelector("#shadow_2").src = require("assets/images/shadow_2.png");
document.querySelector("#shadow_3").src = require("assets/images/shadow_3.png");
document.querySelector("#shadow_4").src = require("assets/images/shadow_4.png");
document.querySelector("#shadow_5").src = require("assets/images/shadow_5.png");
document.querySelector("#shadow_6").src = require("assets/images/shadow_6.png");
document.querySelector("#group_1").src = require("assets/images/group_1.png");
document.querySelector("#group_2").src = require("assets/images/group_2.png");
document.querySelector("#group_3").src = require("assets/images/group_3.svg");
document.querySelector("#group_4").src = require("assets/images/group_4.png");
document.querySelector("#hose").src = require("assets/icons/hose.png");
document.querySelector(
  "#power-button"
).src = require("assets/icons/power-button.png");

function selectorButton(root, arr, type) {
  let num = Number(
    root.parentElement.querySelector(".selector__image").dataset.num
  );
  let count = Number(
    root.parentElement.querySelectorAll(".selector__element").length
  );

  type === "prev" && (num > 0 ? (num -= 1) : (num = count - 1));
  type === "next" && (num == count - 1 ? (num = 0) : (num += 1));

  root.parentElement.querySelector(".selector__image").dataset.num = num;
  root.parentElement.querySelector(".selector__image img").src = arr[num];
  root.parentElement.querySelectorAll(".selector__element").forEach((el) => {
    el.classList.contains("selector__element_active") &&
      el.classList.remove("selector__element_active");
  });
  root.parentElement
    .querySelectorAll(".selector__element")
    [num].classList.add("selector__element_active");
}

[
  { text: "Свое<br>производство", icon: require("assets/icons/gear.png") },
  {
    text: "Доставка в любую<br>точку мира",
    icon: require("assets/icons/plane.png"),
  },
].forEach((element) => {
  const infoCard = document.createElement("div");

  infoCard.classList.add('cards__card');
  infoCard.innerHTML = `
      <img class="cards__icon" src="${element.icon}" />
      <span class="cards__text">${element.text}</span>
    `;

  main.querySelector(".cards_vertical").append(infoCard);
});

[
  {
    text: "Пламя яркое, высотой<br>до 20 сантиметров",
    icon: require("assets/icons/fire.png"),
  },
  {
    text: "Работает такой камин<br>на биотопливе",
    icon: require("assets/icons/h2o.png"),
  },
  {
    text: "Он не дымит и не пахнет",
    icon: require("assets/icons/close.png"),
  },
].forEach((element) => {
  const infoCard = document.createElement("div");

  infoCard.classList.add('cards__card');
  infoCard.innerHTML = `
      <img class="cards__icon" src="${element.icon}" />
      <span class="cards__text">${element.text}</span>
    `;

  main.querySelector(".cards_horizontal").append(infoCard);
});

main.querySelectorAll(".slideshow").forEach((element) => {
  element.innerHTML = `
    <img></img>
    <div>
      <button><img src="${require("assets/icons/prev.png")}"/>
      </button><button><img src="${require("assets/icons/next.png")}"/></button>
    </div>
  `;
});

main.querySelector(".slider input").oninput = function () {
  this.style.background = `linear-gradient(to right, ${yellow} 0%, ${yellow} ${
    this.value - 5
  }%, ${gray} ${this.value}%, ${gray} 100%)`;
  document.querySelector('#kamin-selector-value').textContent = this.value / 10 + ' м'
};
main.querySelectorAll(".slider").forEach((el) => {
  el.querySelector("input").dispatchEvent(new Event("input"));
});

document.querySelector("#kamin-selector").innerHTML = `
  <button class="selector__prev"><img src="${require("assets/icons/prev.png")}"></button>
  <div class="selector__image" data-num=""><img></div>
  <button class="selector__next"><img src="${require("assets/icons/next.png")}"></button>
  <div class="selector__indicator"></div>
`;
document.querySelector("#kamin-selector .selector__image img").src =
  rendList[0];
document.querySelector("#kamin-selector .selector__image").dataset.num = 0;
rendList.forEach(() => {
  let indicatorElement = document.createElement("div");

  indicatorElement.classList.add("selector__element");
  document
    .querySelector("#kamin-selector .selector__indicator")
    .append(indicatorElement);
});
document
  .querySelector("#kamin-selector .selector__element")
  .classList.add("selector__element_active");
document.querySelector("#kamin-selector .selector__prev").onclick =
  function () {
    selectorButton(this, rendList, "prev");
  };
document.querySelector("#kamin-selector .selector__next").onclick =
  function () {
    selectorButton(this, rendList, "next");
  };

document.querySelectorAll(".checkbox input").forEach((el) => {
  el.checked && (el.parentElement.querySelector("svg").style.opacity = 1);
  el.onchange = function () {
    this.parentElement.querySelector("svg").style.opacity == 1
      ? (this.parentElement.querySelector("svg").style.opacity = 0)
      : (this.parentElement.querySelector("svg").style.opacity = 1);
  };
});
