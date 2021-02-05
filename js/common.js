"use strict";document.addEventListener("DOMContentLoaded",function(){// Проверка активного меню
try{$(function(){let a=window.location.pathname;a=a.split("/");a=a[a.length-1];let b=window.location.href;b=b.split("/");b=b[b.length-1];$(".header-nav__item-link").each(function(){let c=$(this).attr("href");if(a==c||b==c){$(this).addClass(" header-nav__item-link--active");}else{};});});}catch(a){console.log(a);};// Открытие модалки формы 
try{let a=document.querySelector(".modal-form");let b=document.querySelector(".contact-page__button");// console.log(op);
// console.log(mod);
b.addEventListener("click",function(){a.className+=" modal-active";});}catch(a){console.log(a);};// mobile menu
const a=document.querySelector(".hamburger");const b=document.querySelector(".mobile-menu");const c=function(){a.classList.toggle("is-active");b.classList.toggle("mobile-menu--active");document.body.classList.toggle("no-scroll");};a.addEventListener("click",c);//swiper js
try{const a=new Swiper('.swiper-container',{pagination:{el:'.swiper-pagination',type:'fraction'},navigation:{nextEl:'.swiper-button-nexty',prevEl:'.swiper-button-prevy'}// observer: true,
// observeParents: true,
// parallax:true,
});//   Добавление 0 перед счетчиком слайдов
let b=document.querySelector(".swiper-pagination-fraction");let c=document.querySelectorAll(".swiper-pagination-fraction");let d=document.querySelectorAll(".swiper-pagination-total");let e=b.textContent.split(" / ",1);if(e[0]<10){c.forEach(function(a){a.className+=" zerro";});d.forEach(function(a){a.className+=" zerro";});};}catch(a){// console.log(err);
};//   Проверка формы
try{let a=document.querySelectorAll("input[type='phone']");let b=new Inputmask("+38(099)99-99-999");let c=document.querySelector(".modal");b.mask(a);new JustValidate('.js-form',{rules:{// name: {
//     required: true,
//     minLength: 2
// },
email:{required:true,email:true},phone:{required:true},text:{required:true,minLength:5,maxLength:300}},messages:{// name: 
// {
//     required: 'Потрібно ввести ім\'я',
//     minLength: 'Портібно більше двох літер' 
// },
email:'Нужно ввести email',phone:'Нужно ввести телефон',text:'Нужно ввести сообщение'},submitHandler:function(a){let b=new XMLHttpRequest();b.open("POST","mail.php",true);let d=new FormData(a);b.addEventListener("load",function(){if(b.readyState===4){switch(b.status){case 200:console.log("Форма оправлена!");a.reset();c.classList.add("modal-active");// setTimeout(() => {
//     modal.classList.remove("modal-active");
// }, 2000);
break;case 404:console.log("Ничего не вышло");default:console.log("Error");break;}}});b.send(d);}});}catch(a){console.log(a);};// Закрытие модалки
try{let a=document.querySelector(".modal__button");let b=document.querySelector(".modal__close");let c=document.querySelector(".modal-form");let d=document.querySelector(".modal");a.addEventListener("click",function(){console.log(1);d.classList.remove("modal-active");});b.addEventListener("click",function(){console.log(2);try{d.classList.remove("modal-active");}catch(a){console.log(a);};try{c.classList.remove("modal-active");}catch(a){console.log(a);};});}catch(a){console.log(a);};// fancybox
try{$('[data-fancybox="gallery"]').fancybox({// Options will go here
});}catch(a){console.log(a);};});