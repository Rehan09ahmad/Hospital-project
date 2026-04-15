function openTab(event, tabId) {
  let contents = document.querySelectorAll(".tab-content");
  contents.forEach(tab => tab.classList.remove("active"));

  let buttons = document.querySelectorAll(".tab-btn");
  buttons.forEach(btn => btn.classList.remove("active"));

  document.getElementById(tabId).classList.add("active");
  event.target.classList.add("active");
}



// menu

document.querySelector(".menu").addEventListener("click", function(){
    document.querySelector("nav ul").classList.toggle("show");
});