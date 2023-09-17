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