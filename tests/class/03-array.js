let monHoc = ["Toán", "Lý", "Hoá", "Anh", "Tin"];

console.log(monHoc[5]);

//
console.log(monHoc.length)
console.log(monHoc[monHoc.length-1]);

monHoc[1]= "GDCD";
console.log(monHoc[1]);
console.log(monHoc);

const danhSach = ["Phong", "Uyên"];
danhSach.push("Phong");
console.log(danhSach);
// Xoa phan tu cuoi cung
danhSach.pop("Phong");
console.log(danhSach);
// Them vao dau mang
danhSach.unshift("Hoa")
console.log(danhSach);
// Xóa ở cuối
danhSach.shift("Hoa");
console.log(danhSach);

const diemSo = [10, 7, 6.5, 9.5];
for (let i = 0; i < diemSo.length; i++) {

    console.log(diemSo[i]);

}
