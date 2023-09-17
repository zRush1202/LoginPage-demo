//object literal
const obj_ltr = {};
//object constructor
const obj_cst = new Object();

//ex:
const student = {
    name: "Nguyễn Phú Trọng",
    age: 20,
    male: true,
    birthday: "12/02/2003",
    print: function () {
        console.log("name", age, birthday, male);
    }
};

console.log(student.name);
student.print();