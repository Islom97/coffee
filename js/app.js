let modal = document.querySelector(".madal");
const linkModal = document.getElementById("modal");

linkModal.addEventListener("click", function(evn){
   evn.preventDefault();

   modal.classList.toggle("active");
})