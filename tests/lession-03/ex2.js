
const chieuCao = 150;

const soLeChieuCao = chieuCao - 100;
const canNangLyTuong = soLeChieuCao * 9 / 10;
const canNangToiDa = soLeChieuCao;
const canNangToiThieu = soLeChieuCao * 8 / 10;

if (100 < chieuCao && chieuCao < 200) {

    console.log(soLeChieuCao + "cm" + " " + canNangToiDa + "kg" + " " + canNangToiThieu + "kg");
}
else
    console.log("Chiều cao vượt mức cho phép");