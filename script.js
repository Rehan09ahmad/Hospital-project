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
  loop: true,

  speed: 800,   

  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },

  coverflowEffect: {
    rotate: 40,
    stretch: 0,
    depth: 120,
    modifier: 1,
    slideShadows: false, 
  },
});


