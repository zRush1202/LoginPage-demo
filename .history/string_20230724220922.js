const name = "hello";
console.log(name);
console.log(typeof name);
const newStr1 = "hello everybody";
const newStr2 = name + " everybody";
console.log(newStr1);
console.log(newStr2);
//backsicks ` `
const newStr3 = `${name} everybody`; //backticks có thể xuống dòng
console.log(newStr3);
//Độ dài
console.log(newStr3.length);
console.log(newStr1.slice(0, 3));
console.log(newStr1.substring(0, 3));