// menu

document.querySelector(".menu").addEventListener("click", function(){
    document.querySelector("nav ul").classList.toggle("show");
});



function openTab(event, tabId) {
  let contents = document.querySelectorAll(".tab-content");
  contents.forEach(tab => tab.classList.remove("active"));

  let buttons = document.querySelectorAll(".tab-btn");
  buttons.forEach(btn => btn.classList.remove("active"));

  document.getElementById(tabId).classList.add("active");
  event.target.classList.add("active");
}

/* SLIDER IMGAES---------*/
var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",

    coverflowEffect: {
        rotate: 30,
        stretch: 100,
        depth: 100,
        scale: 0.9,
        modifier: 1,
        slideShadows: false,
    },

    loop: true,

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },

    breakpoints: {
        0: { slidesPerView: 1 },
        600: { slidesPerView: 2 },
        992: { slidesPerView: 3 }
    }
});


