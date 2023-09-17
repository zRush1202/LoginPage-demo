function change_color(){
    const bgc = document.querySelector(".div");
    const arrcolor = ["red", "green", "blue", "white", "black"];
    col = Math.floor(Math.random()* arrcolor.length);
    bgc.style.backgroundColor = col;
}



let button = document.querySelector(".button");
button.addEventListener("click", change_color);