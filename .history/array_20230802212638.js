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
console.log(newArray);
console.log(newArr2);