function tinhDienTich(a, b) { // parameters

    const dienTich = a * b;

    console.log(`Square root of ${a}, ${b} là ${dienTich}`);

}

// tham số không cần khai báo trước rồi mới gọi à thầy?

tinhDienTich(10, 20);

tinhDienTich(10, 30);

function kiemTraDiem(ten,diem){

    if (diem>=5){
        console.log(`${ten} + "Đậu" + ${diem}`);
    }
    else
        console.log(`${ten} + "Trượt" + ${diem}`);
}
kiemTraDiem("Lan", 8);
kiemTraDiem("Phong",2);