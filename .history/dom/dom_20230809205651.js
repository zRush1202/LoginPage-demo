//1.Document object model

//2.Selecting node
//2.1. document.querySelector("selector") -> trả về 1 node nếu tồn tại
//selectors: .header, p, body, #heading
const singleNode = document.querySelector("h1");
const singleNode2 = document.querySelector(".container");
const singleNode3 = document.querySelector("#spinner");
console.log(singleNode3);

//document.querySelectorAll("selector") -> trả về 1 NodeList chứa danh sách các node
const multiNodes = document.querySelectorAll(".items")
console.log(multiNodes)

//2.3 document.getElementsByClassName("header") -> trả về 1 HTMLCollection chứa danh sách các node
const classNode = document.getElementsById("header");
console.log(classNode);





