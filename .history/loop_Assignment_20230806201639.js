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
    let nstr = [];
    for (let i = 0; i < size; i++){
        nstr[i] = str[count];
        count--;
    }
    return nstr;
}

const str = "i love";
const nStr = reverse(str);
console.log("Bài 2: ");
console.log(nStr);