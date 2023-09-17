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
    let result = [];
    for (let i of arr){
        if (i !== 0 && i !== null && i !== undefined && i !== false && i !== "" && i !== NaN){
            result.push(i);
        }
    }
    return result;
}

let arr3 = [1, 1000, false, null, "evondev", "", undefined, "javascript", [1, 2, 3]];
arr3 = deleteFalsy(arr3);
console.log("Bài 3: ");
console.log(arr3);

//Bài 4: Cho 1 mảng phức tạp [[1, 2, 3, [false, null]], [1, 5, 6, ["javascript"]], [888, 666, [90]]]
//Và kết quả mong muốn là [1, 2, 3, false, null, 1, 5, 6, "javascript", 888, 666, 90]
function reduceArr(arr){
    let result = [];
    function reduceArr2(arr){
        for (let n of arr){
            if (Array.isArray(n)){
                reduceArr2(n);
            }
            else{
                result.push(n);
            }
        }
    }
    reduceArr2(arr);
    return result;
}

const arr4 = [[1, 2, 3, [false, null]], [1, 5, 6, ["javascript"]], [888, 666, [90]]];
const Arr4 = reduceArr(arr4);
console.log("Bài 4: ");
console.log(Arr4);


//Bài 5: Đảo ngược số nguyên. Ví dụ 1234 -> 4321, -567 -> -765
function abs(x){
    return x >= 0 ? x : 0 - x;
}

function reverseNum(x){
    let tmp = x;
    abs(tmp);
    let result = "";
    while (tmp > 0){
        result += tmp % 10;
        tmp /= 10;
    }
    if (x < 0){
        return 0 - parseInt(result, 10);
    }
    else    
        return parseInt(result, 10);
}

const x = 1234;
const rvX = reverseNum(x);
console.log("Bài 5: ");
console.log(rvX);
