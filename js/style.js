/*
clientheight and clientwidth  viewable area include padding no margin no border no scroll
scrollheight and scrollwidth  visible area include padding no margin no border no scroll
offsetheight and offsetwidth  viewable area include padding no margin including border including scroll
scroll top scoll left
*/




var menu = document.getElementById("menu");
var image = document.getElementById("image");
var hiddenBtn = document.querySelector(".hidden-button")
var header = document.querySelector(".header")
var sections = document.querySelectorAll("section")
var listItems = document.querySelectorAll(".header ul li")


window.addEventListener("scroll" , function(){
    window.scrollY > 900 ? hiddenBtn.classList.add("activeBtn"): hiddenBtn.classList.remove("activeBtn")
})
hiddenBtn.addEventListener("click" , function(){
    header.scrollIntoView({
        behavior : "smooth"
    })
})

image.onclick = function(){
   menu.classList.toggle("active")
}

listItems.forEach(function(item){
    item.addEventListener("click" , function(){
        let target = item.dataset.filter;
        sections.forEach(function(section){
            if (section.classList.contains(target)){
                section.scrollIntoView({
                    behavior : "smooth"
                })

        }
    })
})

})
    
