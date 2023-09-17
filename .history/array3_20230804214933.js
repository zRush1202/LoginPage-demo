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
//C2: spread operator
const cop2Arr1 = [...arr1];
console.log(cop2Arr1);

//Nối mảng
//C1: concat
const merge_arr1 = arr1.concat(arr2);
console.log(merge_arr1);
//C2: spread operator
const merge_arr2 = [...arr1, ...arr2];
console.log("Merge arr2: ");
console.log(merge_arr2);

//destructering array => lấy giá trị trong mảng
const abc = ["a", "b", "c", "d", "e", "f"];
const [x, y, z, ...rest] = abc;
console.log(x,y,z);
console.log(rest);
function demo(a, ...rest){
    console.log(a, rest);
}
demo(1, 2, 3, 4, 5);