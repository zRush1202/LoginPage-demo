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

function stringToDate(str){
    const date = new Date();
    const arrDate = str.split('/');
    date.setDate(parseInt(arrDate[0]));
    date.setMonth(parseInt(arrDate[1]) - 1);
    date.setFullYear(parseInt(arrDate[2]));
    //Check valid date
    if ((parseInt(arrDate[1]) - 1) < 0 || (parseInt(arrDate[1]) - 1) > 11){
        return null;
    }
    switch (parseInt(arrDate[1]) - 1){
        case 1, 3, 5, 7, 8, 10, 12: 
            if (parseInt(arrDate[0]) < 1 || parseInt(arrDate[0]) > 31)
                return null;
            break;
        case 4, 6, 9, 11:
            if (parseInt(arrDate[0]) < 1 || parseInt(arrDate[0]) > 30)
                return null;
            break;
        case 2:
            if (checkLeapYear(parseInt(arrDate[2])) === 1){
                if (parseInt(arrDate[0]) < 1 || parseInt(arrDate[0]) > 29)
                    return null;
            }
            else {
                if (parseInt(arrDate[0]) < 1 || parseInt(arrDate[0]) > 28)
                    return null;
            }
            break;
    }
    return date;
}


//Bài 1: Nhập vào năm sinh và in ra số tuổi
let nDate = new Date();
do {
    const birthday = prompt("Nhập ngày sinh(cách nhau bởi dấu /): ");
} while (stringToDate(birthday) == null);
nDate = stringToDate(birthday);
console.log(nDate);