const arr = [1,2,3,4,5,6,7,8,9];
console.log("For bth:");
for (let i = 0; i < arr.length; i++){
    if (i % 2 === 0)
        console.log(arr[i] + " ");
}

//for of
console.log("For of: ")
for (const n of arr){
    console.log(n + " ");
}