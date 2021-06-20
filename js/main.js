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







