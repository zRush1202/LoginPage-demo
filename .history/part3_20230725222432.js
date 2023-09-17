console.log(Number("4.5"));
console.log(Number("abcdef"));
console.log(String(4.2));
console.log(String(undefined));
//Type coercion - Tự ép kiểu đối với các dấu
let x = 10 + "10"; //Dấu + trong string đã được quá tải.
console.log(x); //1010 -> thành string
console.log(10 - "10");
//null + undefined = NaN
