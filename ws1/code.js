const slideShow =  document.getElementById('slideShow');
const slides = slideShow.getElementsByTagName('video');
let index = 0;
//TODO: Debug; All event listener to js
const nextSlide = ()=>{
    slides[index].classList.remove('active');
    index = ++index % slides.length;
    slides[index].classList.add('active');
}
const prevSlide = ()=>{
    slides[index].classList.remove('active');
    index = (--index + slides.length) % slides.length;
    slides[index].classList.add('active');
}
///////////////////////////////////////////////////////////////////////
const slideShowText =  document.getElementById('slideShowText');
const slidesText = slideShowText.getElementsByTagName('div');
let i = 0;
//TODO: Debug; All event listener to js
const nextSlideText = ()=>{
    slidesText[i].classList.remove('active');
    i = ++i % slidesText.length;
    slidesText[i].classList.add('active');
}
const prevSlideText = ()=>{
    slidesText[i].classList.remove('active');
    i = (--i + slidesText.length) % slidesText.length;
    slidesText[i].classList.add('active');
}

////////////////////////////////////////////////////
const toggleMenu = ()=>{
    const menu = document.querySelector('.menuIcon');
    const navbar = document.querySelector('#navbar')
    menu.classList.toggle('active');
    navbar.classList.toggle('active');
}