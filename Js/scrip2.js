const btnLeft2 = document.querySelector(".btn-left2"),
      btnRight2 = document.querySelector(".btn-right2"),
      slider2 = document.querySelector("#slider2"),
      sliderSection2 = document.querySelectorAll(".slider-section2");


btnLeft2.addEventListener("click", e => moveToLeft())
btnRight2.addEventListener("click", e => moveToRight())

setInterval(() => {
    moveToRight()
}, 3000);


let operacion = 0,
    counter = 0,
    widthImg = 100 / sliderSection2.length;

function moveToRight() {
    if (counter >= sliderSection2.length-1) {
        counter = 0;
        operacion = 0;
        slider2.style.transform = `translate(-${operacion}%)`;
        slider2.style.transition = "none";
        return;
    } 
    counter++;
    operacion = operacion + widthImg;
    slider2.style.transform = `translate(-${operacion}%)`;
    slider2.style.transition = "all ease .6s"
    
}  

function moveToLeft() {
    counter--;
    if (counter < 0 ) {
        counter = sliderSection2.length-1;
        operacion = widthImg * (sliderSection2.length-1)
        slider2.style.transform = `translate(-${operacion}%)`;
        slider2.style.transition = "none";
        return;
    } 
    operacion = operacion - widthImg;
    slider2.style.transform = `translate(-${operacion}%)`;
    slider2.style.transition = "all ease .6s"
    
    
}   