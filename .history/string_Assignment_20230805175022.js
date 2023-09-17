
//Bài 1: đảo ngược chuỗi
// const str = prompt("Nhập vào chuỗi: ");
// const strsplit = str.split(" ").reverse().join(" ");
// console.log(strsplit);

//Bài 2: đảo ngược chuỗi (tất cả ký tự)
const str = prompt("Nhập vào chuỗi: ");
let strsplit = str.split(" ");
let size = strsplit.length;
for (let i = 0; i < size; i++){
    strsplit[i] = strsplit[i].split("").reverse().join("");
}
strsplit = str.split(" ").reverse().join(" ");
console.log("Chuỗi bị đảo ngược: ");
console.log(strsplit);

