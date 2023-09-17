//1.Document object model

//2.Selecting node
//2.1. document.querySelector("selector") -> trả về 1 node nếu tồn tại
//selectors: .header, p, body, #heading
const singleNode = document.querySelector("h1");
const singleNode2 = document.querySelector(".container");
const singleNode3 = document.querySelector("#spinner");
console.log(singleNode3);

//document.querySelectorAll("selector") -> trả về 1 NodeList chứa danh sách các node
