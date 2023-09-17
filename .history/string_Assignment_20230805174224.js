
//Bài 1: đảo ngược chuỗi
// const str = prompt("Nhập vào chuỗi: ");
// const strsplit = str.split(" ");
// let size = strsplit.length;
// let newstr = "";
// while(size - 1 >= 0){
//     newstr = newstr + strsplit[size - 1] + " ";
//     size--;
// }
// console.log("Chuỗi bị đảo ngược: ");
// console.log(newstr);

//Bài 2: đảo ngược chuỗi (tất cả ký tự)
const str = prompt("Nhập vào chuỗi: ");
const strsplit = str.split(" ");
let size = strsplit.length;
let newstr = "";
while(size - 1 >= 0){
    strsplit[size - 1].split("").reverse().join("");
    size--;
}
size = strsplit.length;
while(size - 1 >= 0){
    newstr = newstr + strsplit[size - 1] + " ";
    size--;
}
console.log("Chuỗi bị đảo ngược: ");
console.log(newstr);