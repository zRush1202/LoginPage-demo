function add(a = 0, b = 0){
    console.log(a+b);
    return a + b;
}

const s = add;
s(300, 400);