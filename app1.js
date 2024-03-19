const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener('click', () =>{
    container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener('click', () =>{
    container.classList.remove("sign-up-mode");
});

function checkPswd() {
  var password = document.getElementById("pass").value;
  var user = document.getElementById("user").value;
  if (password == "123" && user == "demo") {
      window.location = "index.html";
    }else{
	   alert('tryagain');
   }
  };