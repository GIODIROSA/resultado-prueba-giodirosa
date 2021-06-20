//logica de modal
let cerrar = document.querySelectorAll(".closer")[0];
let modal = document.querySelectorAll(".modale")[0];
let modalC = document.querySelectorAll(".modale-containere")[0];

function abrir() {
  modalC.style.opacity = "1";
  modalC.style.visibility = "visible";
  modal.classList.toggle("modale-close");
}

cerrar.addEventListener("click", function () {
  modal.classList.toggle("modale-close");

  setTimeout(() => {
    modalC.style.opacity = "0";
    modalC.style.visibility = "hidden";
  }, 850);
});

window.addEventListener("click", function (e) {
  if (e.target == modalC) {
    modal.classList.toggle("modale-close");

    setTimeout(() => {
      modalC.style.opacity = "0";
      modalC.style.visibility = "hidden";
    }, 850);
  }
});

window.onload = setTimeout(() => {
  abrir();
}, 500);

//librería de carousel
new Splide("#scooterDos", {
  perPage: 3,
  breakpoints: {
    500: {
      perPage: 1,
    },
  },
  rewind: true,
  width: "80%",
  type: "loop",
  autoplay: false,
  focus: "center",
  pagination: false,
  pauseOnHover: true,
}).mount();

new Splide("#scooterUno", {
  perPage: 1,
  breakpoints: {
    500: {
      perPage: 1,
    },
  },
  rewind: true,
  width: "100%",
  type: "loop",
  autoplay: false,
  focus: "center",
  pagination: false,
  pauseOnHover: true,
}).mount();

//lógica de cuenta regresiva
const getRemainTime = (deadline) => {
  let now = new Date(),
    remainTime = (new Date(deadline) - now + 1000) / 1000,
    remainSeconds = ("0" + Math.floor(remainTime % 60)).slice(-2),
    remainMinutes = ("0" + Math.floor((remainTime / 60) % 60)).slice(-2),
    remainHours = ("0" + Math.floor((remainTime / 3600) % 24)).slice(-2),
    remainDays = Math.floor(remainTime / (3600 * 24));

  return {
    remainTime,
    remainSeconds,
    remainMinutes,
    remainHours,
    remainDays,
  };
};

const countdown = (deadline, elem, finalMessage) => {
  const el = document.getElementById(elem);
  const timerUpdate = setInterval(() => {
    let t = getRemainTime(deadline);
    el.innerHTML = `${t.remainDays}d:${t.remainHours}h:${t.remainMinutes}m:${t.remainSeconds}s`;

    if (t.remainTime <= 1) {
      clearInterval(timerUpdate);
      el.innerHTML = finalMessage;
    }
  }, 1000);
};

countdown("Nov 20 2021 08:48:04 GMT-0400", "clock", "¡CyberDays RIPLEY ahora!");
