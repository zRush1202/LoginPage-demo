function greater(a, b){
    return a>b;
}

const myArray = [1,2,3,4];
console.log(myArray.join(" "));
myArray.pop(); // Xóa phần tử cuối
myArray.push("trong"); // Thêm phần tử cuối
myArray.shift(); // Xóa phần tử đầu
myArray.unshift("hello"); // Thêm phần tử đầu
console.log("My array:")
console.log(myArray);

const newArray = myArray.slice(); // Copy array
const newArr2 = myArray.slice(1, 3); // Copy từ vị trí số 1, kết thúc ở vị trí 3 - 1 = 2
newArray.reverse(); // Nghịch đảo mảng
console.log("New array:");
console.log(newArray);
console.log("New array 2:");
console.log(newArr2);

newArr2.splice(0, 1, "haha"); //Xóa từ vị trí 0, xóa 1 phần tử, thêm 1 phần tử ở vị trí 0 là "haha"
console.log(newArr2);

const arr = [999, 1, 678, 23, -1, -88, 23];
console.log("New array sorted:");
const arraySorted = arr.sort(greater(1, 2));
console.log(arraySorted); //sort theo ký tự đầu tiên 100 < 50 < 7