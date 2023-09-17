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