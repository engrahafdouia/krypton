

 document.addEventListener('DOMContentLoaded', () => {

   // Get all "navbar-burger" elements
   const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

   // Add a click event on each of them
   $navbarBurgers.forEach(el => {
     el.addEventListener('click', () => {

       // Get the target from the "data-target" attribute
       const target = el.dataset.target;
       const $target = document.getElementById(target);

       // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
       el.classList.toggle('is-active');
       $target.classList.toggle('is-active');

     });
   });

 });
   // When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
   window.onscroll = function() {scrollFunction()};
 
 function scrollFunction() {
   if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
     document.getElementById("navbar1").style.backgroundColor="#6384FF";
     
   
   } else {
  document.getElementById("navbar1").style.backgroundColor="#36488A";
 
   }
 }
//  window.onscroll = function() {scrollFunction()};
 
//  function scrollFunction() {
//    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
//      document.getElementById("navbar-brand-img").outerHTML=url('./img/krypton.svg');
     
   
//    } else {
//     document.getElementById("navbar-brand-img").innerHTML=url('./img/krypton-gradient.svg');
 
//    }
//  }
 // $(function () { 
 //         $(window).scroll(function () {
 //             if ($(this).scrollTop() > 1000) { 
 //                 $('.navbar-brand-img img').attr('src','./img/krypton.svg');
 //             }
 //             if ($(this).scrollTop() < 1000) { 
 //                 $('.navbar-brand-img img').attr('src','./img/krypton-gradient.svg');
 //             }
 //         })
 //     });
     function openCity(evt, cityName) {
// Declare all variables
var i, tabcontent, tablinks;
// Get all elements with class="tabcontent" and hide them
tabcontent = document.getElementsByClassName("tabcontent");
for (i = 0; i < tabcontent.length; i++) {
 tabcontent[i].style.display = "none";
}

// Get all elements with class="tablinks" and remove the class "active"
tablinks = document.getElementsByClassName("tablinks");
for (i = 0; i < tablinks.length; i++) {
 tablinks[i].className = tablinks[i].className.replace(" active", "");
}

// Show the current tab, and add an "active" class to the button that opened the tab
document.getElementById(cityName).style.display = "block";
evt.currentTarget.className += " active";
}
 // window.addEventListener('load', () => {
 //     const pageloader = document.getElementById('pageloader');
 //     const infraloader = document.getElementById('infraloader');
 //     pageloader.classList.toggle('is-active');
 //     var pageloaderTimeout = setTimeout(function () {
 //         infraloader.classList.remove('is-active');
 //         pageloader.classList.toggle('is-active');
 //         clearTimeout(pageloaderTimeout);
 //     }, 1200);
 // })
