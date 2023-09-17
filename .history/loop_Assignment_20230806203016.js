//Bài 1: Sao chép mảng dùng vòng lặp for
function copArr(arr){
    const size = arr.length;
    const narr = [];
    for (let n in arr){
        narr[n] = arr[n];
    }
    return narr;
}

const arr = [1, 9, 2, 8, 3, 7, 4, 6, 5];
const nArr = copArr(arr);
console.log("Bài 1: ");
console.log(nArr);

//Bài 2: Đảo ngược từ "i love" -> "evol i"
function reverse(str){
    const size = str.length;
    let count = size - 1;
    let nstr = "";
    for (let i = 0; i < size; i++){
        nstr += str[count];
        count--;
    }
    return nstr;
}

const str = "i love";
const nStr = reverse(str);
console.log("Bài 2: ");
console.log(nStr);

//Bài 3: Cho 1 mảng gồm nhiều giá trị 
//[1, 1000, false, null, "evondev", "", undefined, "javascript", [1, 2, 3]].
//Viết chương trình loại bỏ các giá trị là falsy ra khỏi mảng chỉ giữ lại giá trị truthy.
//Gợi ý giá trị falsy là 0, null, undefined, false, "", NaN

function swap(a, b){
    let temp = a;
    a = b;
    b = temp;
}

function deleteFalsy(arr){
    let size = arr.length;
    for (let i in arr){
        if (arr[i] === 0 || arr[i] === null || arr[i] === undefined || arr[i] === false || arr[i] === NaN){
            arr.splice(i, 1);
        }
    } 
}

let arr3 = [1, 1000, false, null, "evondev", "", undefined, "javascript", [1, 2, 3]];
deleteFalsy(arr3);
console.log("Bài 3: ");
console.log(arr3[3]);