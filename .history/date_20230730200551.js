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
const birthday = new Date(2003, 1, 12);
console.log(birthday.getUTCFullYear()); //In ra năm (có UTC là giờ quốc tế)
console.log(birthday.getMonth()); //In ra tháng
console.log(birthday.getDate()); //In ra ngay
console.log(birthday.getDay()); //In ra thu 0: chu nhat, 6: thu 7
console.log(birthday.getHours());
console.log(birthday.getMinutes());
console.log(birthday.getSeconds());
console.log(birthday.getTime());
birthday.setFullYear(2004);
console.log(birthday);

//
console.log(now.toDateString());
console.log(now.toTimeString());
console.log(now.toLocaleDateString());