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
        console.log(this.name, this.age, this.birthday, this.male);
    },
};

console.log("---Hàm print của object: ");
student.print();

//for...in
console.log("---For in in object: ");
for (let n in student){
    console.log(`${n} : ${student[n]}`);
}


//Object.keys()
console.log("---Object.keys: ");
const keys = Object.keys(student); //lấy danh sách các key của object => keys là mảng
console.log(keys);

//Object.values() 
console.log("---Object.values: ")
const values = Object.values(student); //lấy ra danh sách các giá trị của các key => values là mảng
console.log(values);

//Object.entries()
console.log("---Object.entries: ")
const arrStudent = Object.entries(student); //lấy ra danh sách các key và value của chúng trong object
// for (let n in arrStudent){
//     console.log(arrStudent[n]);
// }
console.log(arrStudent);

const arr = {
    size: 5,
    index: 1,
    maxValue: 100,
};


//Object.assign()
//console.log("---Object.assign: ");
//const ass = Object.assign(student, arr); //Gộp các object lại với nhau
//console.log(ass);

//Object.freeze(): Ngăn chặn không cho chỉnh sửa key và value
//Object.seal(): Cho phép chỉnh sửa key, value nhưng không được thêm key mới

//Copy object
console.log("---Copy object: ");
const copy_student = {...student};
console.log(copy_student);