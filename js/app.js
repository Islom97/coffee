let modal = document.querySelector(".madal");
const linkModal = document.getElementById("modal");

linkModal.addEventListener("click", function(evn){
   evn.preventDefault();

   modal.classList.toggle("active");
})

let headerNav = document.querySelector(".answers");
let tabContent = document.querySelectorAll(".answers__info");
let tab = document.querySelectorAll(".answers__title");


   //*   Funstion (main and section) => visible added and remove

function hideTabContent(a, b) {
   for (let i = a; i < b.length; i++) {
      b[i].classList.remove("show");
      b[i].classList.add("hide");
   }
}
hideTabContent(0, tabContent);

function showTabContent(z, y) {
   if(y[z].classList.contains('hide')){
      y[z].classList.remove("hide");
      y[z].classList.add("show");
      y[z].classList.add("bounce-in-right")
   }
}

   //*   Funstion header => grow added and remove

function growOn(a, b) {
   for (let i = a; i < b.length; i++) {
      b[i].classList.remove("grow-on");
      b[i].classList.add("grow-off");
      b[i].classList.remove("color-dark");
   }
}
growOn(0, tab);

function growOff(z, y) {
   if (y[z].classList.contains('grow-off')){
      y[z].classList.remove("grow-off");
      y[z].classList.add("grow-on");
      y[z].classList.add("color-dark");
   }
}

   //?   On-click event

headerNav.addEventListener("click", (evn) => {
   let target = evn.target;
   
   for (let i = 0; i < tab.length; i++) {
      
      if (target == tab[i]) {
         growOn(0, tab);
         growOff(i, tab);

         hideTabContent(0, tabContent);
         showTabContent(i, tabContent);
         break;
      }
   }
})
