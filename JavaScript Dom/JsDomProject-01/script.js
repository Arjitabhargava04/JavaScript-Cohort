
var istatus = document.querySelector("h5");

var addfriend = document.querySelector("button");

var remove = document.querySelector("#remove");

addfriend.addEventListener("click", function(){
    istatus.innerHTML = "Friends"
    istatus.style.color = "green"
})

remove.addEventListener("click", function(){
    istatus.innerHTML = "stranger"
    istatus.style.color = "red"
})