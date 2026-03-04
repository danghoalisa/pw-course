// 3. Tạo file ex3.js, thêm vào đáp án cho câu hỏi sau: Cho 2 biến: a = true, b = false, c =
// true. Theo bạn, kết quả của các biểu thức sau là gì?
// a. a && b && c
// b. a && b || c

// a. a && b && c

const a = true;
const b = false;
const c = true;

const ketqua1 = a&&b&&c;
console.log ("Ket qua se la false", ketqua1);

// b. a && b || c
const ketqua2 = a&&b||c;
console.log ("Ket qua se la true", ketqua2);
