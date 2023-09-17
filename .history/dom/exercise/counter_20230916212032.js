const ins = document.querySelector(".ins");
const des = document.querySelector(".des");
let num = document.querySelector(".num");

function increase(e){
    num.textContent += 1;
}

function descrease(e){
    num.textContent -= 1;
}

ins.addEventListener('click', increase(e));
