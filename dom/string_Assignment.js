
//Bài 1: Đảo ngược chuỗi
// const str = prompt("Nhập vào chuỗi: ");
// const strsplit = str.split(" ").reverse().join(" ");
// console.log(strsplit);

//Bài 2: Đảo ngược chuỗi (tất cả ký tự)
// const str = prompt("Nhập vào chuỗi: ");
// let strsplit = str.split(" ");
// let size = strsplit.length;
// for (let i = 0; i < size; i++){
//     strsplit[i] = strsplit[i].split("").reverse().join("");
// }
// strsplit = strsplit.reverse().join(" ");
// console.log("Chuỗi bị đảo ngược: ");
// console.log(strsplit);

//Bài 3: In hoa chữ cái đầu của từng từ của chuỗi
function upperFirstChar(str){
    return str.slice(0,1).toUpperCase() + str.slice(1, str.length).toLowerCase();
}

const str = prompt("Nhập vào chuỗi: ");
let nstr = str.split(" ");
for (let i = 0; i < nstr.length; i++){
    nstr[i] = upperFirstChar(nstr[i]);
}
nstr = nstr.join(" ");
console.log("Chuỗi in hoa chữ cái đầu: ");
console.log(nstr);