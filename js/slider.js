const slider = document.querySelector("#slider");
let sliderSection  = document.querySelectorAll(".slider__section");
let sliderSectionLast  = sliderSection[sliderSection.length - 1];

const btnLetf = document.querySelector("#btn-left");
const btnRight = document.querySelector("#btn-right");

slider.insertAdjacentElement('afterbegin', sliderSectionLast);

function nextRight(){
    let sliderSectionFirst = document.querySelectorAll(".slider__section")[0];
    slider.style.marginLeft = " -200%";
    slider.style.transition = "all .5s";
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement('beforeend', sliderSectionFirst);
        slider.style.marginLeft = " -100%";
    }, 500);
}

function nextLeft(){
    let sliderSection  = document.querySelectorAll(".slider__section");
let sliderSectionLast  = sliderSection[sliderSection.length - 1];
    slider.style.marginLeft = "0";
    slider.style.transition = "all .5s";
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement('afterbegin', sliderSectionLast);
        slider.style.marginLeft = " -100%";
    }, 500);
}


btnRight.addEventListener('click',function(){
    nextLeft();
});

btnLetf.addEventListener('click',function(){
    nextRight();
});

setInterval(function(){
    nextRight();
}, 5000);