//JSON
const arr1 = [1,2];
const arr2 = [1,2];
//JSON.stringify(value) //convert giá trị sang dạng JSON String
console.log(JSON.parse("[1,2,3]")); //chuyển sang mảng lại
const arr1Str = JSON.stringify(arr1);
const arr2Str = JSON.stringify(arr2);
console.log(arr1Str === arr2Str);

//clone
//C1: dùng slice
const copArr1 = arr1.slice();
console.log(copArr1);