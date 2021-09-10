let heart = document.querySelector("#heart");
let back = document.querySelector(".back");
let body = document.querySelector("body");
let nav = document.querySelector("nav");
let Smmenu = document.querySelector("#Smmenu");
let menu = document.querySelector(".menu");
let raviTeja = document.querySelector("#raviTeja");


let r = true;
heart.addEventListener("click",function(){
    if(r){
        back.style.transform = "scale(.84)";
        back.style.border = "15px solid black";
        back.style.borderRadius = "8px";
        body.style.backgroundImage = "linear-gradient(315deg, #fce043 0%, #fb7ba2 74%)";
        back.style.backgroundColor = "#fff";
        r = false;
    }
    else{
        back.style.transform = "scale(1)";
        back.style.border = "none";
        back.style.borderRadius = "none";
        body.style.backgroundColor ="#fff";
        back.style.borderRadius = "0px";
        r = true;
    }                                               
})                                      


menu.addEventListener("click",function(){                                   
    Smmenu.style.display = "flex";
})                                  

raviTeja.addEventListener("click",function(data){
    Smmenu.style.display ="none";
})




