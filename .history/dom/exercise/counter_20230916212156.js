const ins = document.querySelector(".ins");
const des = document.querySelector(".des");
let num = document.querySelector(".num");

function increase(){
    num.textContent += 1;
}

function descrease(){
    num.textContent -= 1;
}

ins.addEventListener('click', increase);
des.addEventListener('click', descrease);
