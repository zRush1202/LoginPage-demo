function add(a = 0, b = 0){
    console.log(a+b);
    return a + b;
}

function avg(a, b, fn){
    const total = fn(a, b);
    return total/2;
}

const s = add;
s(300, 400);
console.log(avg(5, 10, s));

//anomynous function (function expression) - phải gọi sau khi khai báo
const logName = function() {
    console.log("Your name");
}
logName();

//IIFE
(function(){
    console.log("This is IIFE");
})();

//Bài tập
//1.
function isgreater(a, b){
    if (a >= b) return a;
    else return b;
}

function upperFirstChar(str){
    return str.slice(0,1).toUpperCase() + str.slice(1, str.length);
}

let name = "trong";
console.log(upperFirstChar(name));

const compare = isgreater;

function printResult(a, b, fn){
    console.log(fn(a, b));
}

printResult(5, 7, compare);