const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
   hamburger.classList.toggle("active");
   navMenu.classList.toggle("active"); 
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click",() => {
   hamburger.classList.remove("active");
   navMenu.classList.remove("active"); 
   
}))

document.addEventListener('DOMContentLoaded', function() {
   navbar = document.querySelector('.navbar');
   main= document.getElementById('main');

   hamburger.addEventListener('click', function() {
      navbar.classList.toggle('active');
      main.classList.toggle('shift');
      if (main.classList.contains('shift')) {
         main.style.marginLeft = '150px';
      } else {
         main.style.marginLeft = '0';
      }
   });
});

document.getElementById("form").addEventListener("submit", function(event) {
   nameBox = document.getElementById("name").value;
   email = document.getElementById("email").value;
   message = document.getElementById("message").value;

   if (nameBox.length == 0 && email.length == 0 && message.length == 0) {
      window.alert('Fill in all fields');
      document.getElementById("name").style.border = "2px solid red";
      document.getElementById("email").style.border = "2px solid red";
      document.getElementById("message").style.border = "2px solid red";
      event.preventDefault();
   }
   else if (nameBox.length == 0) {
      window.alert('Fill in name field');
      document.getElementById("name").style.border = "2px solid red";
      event.preventDefault();
   }
   else if (email.length == 0) {
      window.alert('Fill in email field');
      document.getElementById("email").style.border = "2px solid red";
      event.preventDefault();
   }
   else if (message.length == 0) {
      window.alert('Fill in message field');
      document.getElementById("message").style.border = "2px solid red";
      event.preventDefault();
   }
});

hrs = document.getElementById("hrs");
mins = document.getElementById("mins");
secs = document.getElementById("secs");

let currentTime = new Date();

hrs.innerHTML = currentTime.getHours();
mins.innerHTML = currentTime.getMinutes();
secs.innerHTML = currentTime.getSeconds();