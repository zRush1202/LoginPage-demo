function stringToDate(str){
    const date = new Date();
    const arrDate = str.split('/');
    date.setDate(parseInt(arrDate[0]));
    date.setMonth(parseInt(arrDate[1]));
    date.setFullYear(parseInt(arrDate[2]));
    return date;
}

function checkdate(str){

}

//Bài 1: Nhập vào năm sinh và in ra số tuổi
const birthday = prompt("Nhập ngày sinh(cách nhau bởi dấu /): ");
console.log(birthday);