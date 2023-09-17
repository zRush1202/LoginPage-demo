function change_color(){
    const bgc = document.querySelector(".div");
    const arrcolor = ["red", "green", "blue", "white", "black"];
    col = Math.floor(Math.random()* arrcolor.length);
    console.log(col);
    bgc.style.backgroundColor = arrcolor[col];
}



let button = document.querySelector(".button");
button.addEventListener("click", change_color);