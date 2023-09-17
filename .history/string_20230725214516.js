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

const myStr3 = "   Frontend Developer D   ";
console.log(myStr3.trim().replace("Developer D", "Developer and Designer").toUpperCase().repeat(2));

//Ép kiểu string to int: parseInt
//                  float: parseFloat
//Math.abs(value): trị tuyệt đối
//Math.floor(value): làm tròn xuống
//Math.ceil(value): làm tròn lên
//Math.round(value): làm tròn gần nhất
// .toFixed(number): lấy number chữ số thập phân -> thành string
//Math.random() * n: ra số có giá trị từ 0->1 nếu k nhập n, từ 0 -> n - 1 nếu n != 1  
//isNaN(...): Not a Number -> true or false (chuyển đổi giá trị bên trong thành số. Nếu được -> false, k đc -> true)
//Number.isNaN
console.log(Number.isNaN(0/0));