const ins = document.querySelector(".ins");
const des = document.querySelector(".des");
let num = document.querySelector(".num");

function increase(){
    let n = Number(num.textContent);
    n += 1;
    num.textContent = n;
}

function descrease(){
    let n = Number(num.textContent);
    n -= 1;
    num.textContent = n;
}

ins.addEventListener('click', increase);
des.addEventListener('click', descrease);
