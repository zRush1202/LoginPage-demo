//Bài 1: đảo ngược chuỗi
const str = prompt("Nhập vào chuỗi: ");
const strsplit = str.split();
const size = strsplit.length;
let newstr = "";
while(size - 1 >= 0){
    newstr = newstr + strsplit[size - 1] + " ";
    size--;
}
console.log(newstr);