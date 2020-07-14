let isTranslated = false;
let menuToggle = document.querySelector("#menuToggle input");
menuToggle.addEventListener("click",()=>{
    if(isTranslated == false){
        document.querySelector("#menu").style.transform="none";
    }
    else {
        document.querySelector("#menu").style.transform="translate(-100%, 0)";
    }
    isTranslated =! isTranslated;
})
let menu = document.querySelectorAll("#menuToggle ul li a");
menu.forEach(element => {
    element.addEventListener("click",function(){
        menu.forEach(ele => {
            ele.parentElement.classList.remove("active");
        })
        element.parentElement.classList.add("active");
        document.querySelector("#menu").style.transform="translate(-100%, 0)";
        document.querySelector("#menuToggle input").checked = false;
        isTranslated = false;
    });
});

let scrollEffect = document.querySelectorAll('.scrollEfect');
let icons = document.querySelectorAll('.header .icon-box');
let iconsMobile = document.querySelectorAll('#menuToggle ul li');

function scrollAppear(){
    let bool = false;
    scrollEffect.forEach(element => {
        let sectionPosition = element.getBoundingClientRect().top;
        let screenPosition = window.innerHeight;
        if(sectionPosition < screenPosition/2){
            let index = [].indexOf.call(scrollEffect, element);
            icons.forEach(element => {
                element.classList.remove("active");
            })
            icons[index+1].classList.add("active");

            bool = true;
        }
    })
    if(bool == false){
        icons.forEach(element => {
            element.classList.remove("active");
        })
        icons[0].classList.add("active");

        iconsMobile.forEach(element => {
            element.classList.remove("active");
        })
        iconsMobile[0].classList.add("active");
    }
}

window.addEventListener("scroll",scrollAppear);

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }

window.addEventListener("scroll", function(){
    let header = document.querySelector(".header");
    header.classList.toggle("sticky",window.scrollY>0);
    document.querySelector(".header h2").classList.toggle("title",window.scrollY>0);
    if(window.scrollY>0 == true){
        document.querySelector(".header #menuToggle").style.top = "5px";
        document.querySelector(".header #menuToggle").style.right = "9px";
    }
    else{
        document.querySelector(".header #menuToggle").style.top = "30px";
        document.querySelector(".header #menuToggle").style.right = "30px";
    }
})