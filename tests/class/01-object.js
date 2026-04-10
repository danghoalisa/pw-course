let sinhVienA = {

    hoTen: "Nguyễn Văn ABC",

    tuoi: 20,

    lop: "WEB01"

};

let sinhVienB = new Object();
sinhVienB.hoTen = "Nguyen Van B";
sinhVienB.tuoi = 21;
sinhVienB.lop = "Playwright k22";

console.log(sinhVienA.hoTen);
console.log(sinhVienA.tuoi);
console.log(sinhVienA.lop);

const myClass ={
    name: "k22"
}
console.log(myClass);

myClass["major"] = "Playwright";
myClass.languge ="JavaScript";
console.log(myClass);


myClass.name="K23";
console.log(myClass);

delete myClass.languge
console.log(myClass);



