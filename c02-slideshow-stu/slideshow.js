let soThuTu = 0;
let slides = document.getElementsByClassName("slides");

function hienThiSlideTruocDo() {
    soThuTu--;
    if (soThuTu < 0) {
        soThuTu = slides.length - 1;
    }
    hienThiSlideHienTai();
}

function hienThiSlideKeTiep() {
    soThuTu++;
    if (soThuTu >= slides.length) {
        soThuTu = 0;
    }
    hienThiSlideHienTai();
}

function hienThiSlideHienTai() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[soThuTu].style.display = "block";
}
hienThiSlideHienTai()
