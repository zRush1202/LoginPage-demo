const now = new Date();
//built-in object
//Timezone: Múi giờ
console.log(now);
//Timestamp & Epoch time
console.log(now.getTime()); //print timestamp (kết quả là miliseconds)
console.log(new Date(0));
console.log(new Date(1690557087040));
console.log(new Date("Fri Jul 28 2023 22:18:21 GMT+0700 (Giờ Đông Dương)"));
//Month tính từ 0 => thêm số 6 -> tháng 7

//Các hàm get Date
const birthday = new Date(2003, 2, 12);
console.log(birthday.getFullYear()); //In ra năm 
console.log(birthday.getMonth()); //In ra tháng
console.log(birthday.getDate()); //In ra ngay