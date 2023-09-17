function checkLeapYear(year){
    if (year % 4 !== 0)
        return false;
    else if (year % 100 !== 0)
        return true;
    else if (year % 400 !== 0)
        return false;
    else 
        return true;
}

function checkValidDate(ngay, thang, nam){
    if (thang - 1 < 0 || thang > 12){
        return false;
    }
    switch (thang){
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            if (ngay < 1 || ngay > 31){
                return false;
            }
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            if (ngay < 1 || ngay > 30){
                return false;
            }
            break;
        case 2:
            if (checkLeapYear(nam)){
                if (ngay < 1 || ngay > 29){
                    return false;
                }
            }
            else {
                if (ngay < 1 || ngay > 28){
                    return false;
                }
            }
            break;
    }
    return true;
}

function stringToDate(str){
    const date = new Date();
    const arrDate = str.split('/');
    //Check valid date
    if (checkValidDate(parseInt(arrDate[0]), parseInt(arrDate[1]), parseInt(arrDate[2])) === false){
        return null;
    }
    date.setDate(parseInt(arrDate[0]));
    date.setMonth(parseInt(arrDate[1]) - 1);
    date.setFullYear(parseInt(arrDate[2]));
    return date;
}

/*
//Bài 1: Nhập vào năm sinh và in ra số tuổi
console.log("Câu 1: ");
const now = new Date();
let nDate = new Date();
let birthday;
do {
    birthday = prompt("Nhập ngày sinh(cách nhau bởi dấu /): ");
} while (stringToDate(birthday) === null);
nDate = stringToDate(birthday);
console.log("Ngày sinh là: " );
console.log(nDate.getDate(), nDate.getMonth() + 1, nDate.getFullYear());
const Tuoi = now.getFullYear() - nDate.getFullYear();
console.log(`Tuổi là: ${Tuoi}`);*/

function printCD(time){
    console.log(time);
}

//Bài 2: Viết chương trình đếm ngược thời gian theo giây
let timeCD = prompt("Nhập vào thời gian cần countdown: ");
do {
    setInterval(printCD(timeCD), 1000);
    timeCD--;
}while(timeCD >= 0);