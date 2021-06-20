new Splide("#prueba", {
  perPage: 3,
  breakpoints: {
    450: {
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
    450: {
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





// window.addEventListener("load", function () {
//     new Glider(document.querySelector(".carousel__lista"), {
//       slidesToShow: 1,
//       slidesToScroll: 1,
//       draggable: true,
//       dots: ".carousel__indicadores",
//       arrows: {
//         prev: ".carousel__anterior",
//         next: ".carousel__siguiente",
//       },
//       responsive: [
//         {
//           // screens greater than >= 775px
//           breakpoint: 450,
//           settings: {
//             // Set to `auto` and provide item width to adjust to viewport
//             slidesToShow: 1,
//             slidesToScroll: 1,
//           },
//         },
//         {
//           // screens greater than >= 1024px
//           breakpoint: 800,
//           settings: {
//             slidesToShow: 4,
//             slidesToScroll: 4,
//           },
//         },
//       ],
//     });
//   });
