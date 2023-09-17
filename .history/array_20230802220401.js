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

function greater(a, b){
    return a > b? 1 : a < b? -1 : 0;
}

const arr = [999, 1, 678, 29, -1, -88, 23];
console.log("New array sorted:");
arr.sort(greater);
console.log(arr); //sort theo ký tự đầu tiên 100 < 50 < 7
const fnum = arr.find((x) => x > 10); // Tìm phần tử lớn hơn 10 đầu tiên
console.log(fnum);
const fInum = arr.findIndex((x) => x > 600); //Tìm vị trí của phần tử lớn hơn 600 đầu tiên
console.log(fInum);