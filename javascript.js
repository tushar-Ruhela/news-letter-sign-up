let Email=document.getElementById("email");
let btn=document.getElementById("sub");
let para = document.querySelector(".result");
let main=document.querySelector(".Form");
let succses=document.querySelector(".subscribe");
let dismiss=document.querySelector(".dismis");


function ValidateEmail(Email) {

  var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if(Email.value.match(validRegex)) {
    para.innerText = "Vaild email address";
    para.style.color = "green";
    Email.value=" ";
main.style.display="none";
succses.style.display="block";
    return true;

  } 
  else {


      para.innerText = "Invaild email address";
      para.style.color = "red";
      Email.style.backgroundColor= "hsl(0, 89%, 90%)";
     Email.style.border= "2px solid rgb(235, 86, 86)";
     Email.style.color=  "rgb(235, 86, 86)";
     Email.style.boxShadow = "0 0 10px 5px hsl(0, 89%, 90%)";
  
    return false;
  }

}
btn.addEventListener("click", function(event) {
  event.preventDefault(); // Prevent the default form submission
  ValidateEmail(Email);
});
dismiss.addEventListener("click",function(){
  main.style.display="flex";
  succses.style.display="none";
  para.innerText=" ";
  Email.style.backgroundColor= " white";
  Email.style.border= "1px solid hsl(231, 7%, 60%)";
  Email.style.color=  "black";
})


