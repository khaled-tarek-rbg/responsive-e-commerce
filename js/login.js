

var menu = document.getElementById("menu");
var image = document.getElementById("image");
var loginform = document.querySelector("#login")
var regform = document.querySelector("#reg")
var logSpan = document.querySelector("#login-span")
var regSpan = document.querySelector("#reg-span")
var footer = document.querySelector(".footer")
var accountItem = document.querySelector("#account")
image.onclick = function(){
   menu.classList.toggle("active")
}

regSpan.addEventListener("click" , function(){
   regform.style.transform = "translateX(0px)"
   loginform.style.transform = "translateX(0px)"
   regSpan.classList.add("active-effect")
   logSpan.classList.remove("active-effect")
  
})
logSpan.addEventListener("click" , function(){
   regform.style.transform = "translateX(300px)"
   loginform.style.transform = "translateX(300px)"
   regSpan.classList.remove("active-effect")
   logSpan.classList.add("active-effect")
})

accountItem.addEventListener("click", function(){
   footer.scrollIntoView({
      behavior : "smooth"
   })
})


    