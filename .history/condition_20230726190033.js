//alert("Welcome to my Web!"); //nofitication.
//const name = prompt("Enter name: ", ""); // Input
//const temp = confirm("Ban da tren 18 tuoi?"); //True or false
function isGreater(a, b){
    return a > b;
}
const a = prompt("Enter a = ", "");
const b = prompt("Enter b = ", "");
if (a > b)
    console.log(a);
else if (a < b)
    console.log(b);
else 
    console.log("a = b");
console.log(isGreater(a,b));
