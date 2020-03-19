"use strict";

// const nav = document.getElementsByClassName('header__nav');
//
// nav.addEventListener('click', (event) => {
//     nav.querySelectorAll('ul>li').forEach(el => el.classList.remove('active'));
//     event.target.add('active');
// });
//
// const menu = document.querySelector("nav ul");
//
// addEventListener("click", (event) => {
//     document.querySelector("nav ul").querySelectorAll('li a').forEach(e => e.classList.remove('active'));
//     event.target.classList.add("active");
// });

let slideIndex = 1;
showSlides();

function plusSlides(n) {
    showSlides(slideIndex += n);
    document.getElementById('slide2').style.opacity = '1';
}
plusSlides();

function showSlides(n) {
    let slides = document.getElementsByClassName("slide");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex-1].style.display = "block";
}

// var i=0;
// var imgs  = document.getElementsByClassName(".iphone-horizontal");
// function imgsrc(){
//     var image=document.getElementById("img");
//     image.src=imgs[++i];
// }

// function imgsrc() {
//     document.getElementById('img').style.opacity = '1';
// }

var flag=false;

function imgsrc1(){
    if (flag){
        document.getElementById('img_hor').style.opacity = '1';
    } else{
        document.getElementById('img_hor').style.opacity = '0';
    }
    flag=!flag;
}

function imgsrc2() {
    if (flag){
        document.getElementById('img_ver').style.opacity = '1';
    } else {
        document.getElementById('img_ver').style.opacity = '0';
    }
    flag=!flag;
}

function Complete()
{
    let Elem="Name: " + document.Form.Name.value +
        "\nE-mail: " + document.Form.Email.value +
        "\nSubject: " + document.Form.Subject.value +
        "\nText: " + document.Form.Text.value;
    alert(Elem);
}
 function CheckValue(subject){
   if (!document.Form.Subject.value){
       return 'Без темы';
   } return document.Form.Subject.value;
}