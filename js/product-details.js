/*
clientheight and clientwidth  viewable area include padding no margin no border no scroll
scrollheight and scrollwidth  visible area include padding no margin no border no scroll
offsetheight and offsetwidth  viewable area include padding no margin including border including scroll
scroll top scoll left
*/




var menu = document.getElementById("menu");
var image = document.getElementById("image");
var mainImage = document.querySelector(".main-image")
var childImages = document.querySelectorAll(".small-col img")
var footer = document.querySelector(".footer")
var accountItem = document.querySelector("#account")



image.onclick = function(){
   menu.classList.toggle("active")
}

childImages.forEach(function(image){
   image.addEventListener("click" , function(){
       mainImage.src = image.src
   })
})

accountItem.addEventListener("click", function(){
   footer.scrollIntoView({
      behavior : "smooth"
   })
})
    