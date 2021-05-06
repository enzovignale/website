const elementClicked = document.querySelector(".sidemenu-toggle");
const elementClicked2 = document.querySelector(".close");
const elementYouWantToShow = document.querySelector(".sidemenu");

elementClicked.addEventListener("click", ()=>{
  elementYouWantToShow.classList.toggle("active");
});
elementClicked2.addEventListener("click", ()=>{
    elementYouWantToShow.classList.toggle("active");
  });