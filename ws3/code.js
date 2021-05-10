const menu = document.querySelector(".toggleMenu");
const menuOptions = document.querySelector(".navigation") 
const menuToggle = ()=>{
    menu.classList.toggle('active');
    menuOptions.classList.toggle('active');
}
menu.addEventListener("click", ()=>{
    menuToggle();
}, false);



