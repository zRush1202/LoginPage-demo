//JSON
const arr1 = [1,2];
const arr2 = [1,2];
//JSON.stringify(value) //convert giá trị sang dạng JSON String
console.log(JSON.parse("[1,2,3]"));
const arr1Str = JSON.stringify(arr1);
const arr2Str = JSON.stringify(arr2);
console.log(arr1 == arr2);