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

student.print();

//for...in
for (let n in student){
    console.log(`${n} : ${student[n]}`);
}

//Object.keys()
const keys = Object.keys(student); //lấy danh sách các key của object => keys là mảng
console.log(keys);

//Object.values() 
const values = Object.values(student);
console.log(values);

