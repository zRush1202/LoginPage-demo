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

//anomynous function (function expression)
const logName = function() {
    console.log("Your name");
}
logName();