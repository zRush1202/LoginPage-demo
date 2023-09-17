//1. selector.getAttribute("attribute")
const link = document.querySelector(".link");
console.log(link.getAttribute("href"));

const li = document.querySelectorAll(".item");
li.forEach((item) => {
    console.log(item.getAttribute("class"));
});
console.log(li);

//2. seletor.setAttribute("attribute", value)
link.setAttribute("target", "_blank");
const listLinks = document.querySelectorAll("a.link");
listLinks.forEach(item => item.setAttribute("target", "_blank"));

//3. 
const p = document.getElementById("#spinner");
p.removeAttribute("style");

//4. hasAttribute("attribute") => kiểm tra selector có attribute hay k
//5. textContent -> lấy full, cả khoảng trắng, k có HTML
//6. innerText -> loại bỏ khoảng trắng, không xuống hàng
//7. innerHtml -> lấy full, cả HTML, có thể sửa html
//8. selector.classList.add("abc")
//9. selector.classList.remove("container")
//10. selector.classList.contains("container") //false
//11. selector.classList.toggle("<class name>") -> có chứa class rồi thì xóa, chưa có thì thêm vào
//12. tạo element trong JS: document.createElement("thẻ")
//13. selector.appendChild(), document.body -> thẻ body