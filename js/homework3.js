// bài 1
var str = prompt ("vui lòng nhập chuỗi");

for (var i = 0; i<9; i++) {
  document.write (`"${str}" - `);
}
document.write (`"${str}"`);

//bài 3
var str1 = "bottles of beer on the wall";
var str2 = "bottles of beer";
var str3 = "Take one down, pass it around";

for (var i = 99; i >= 0 ; i--) {
  document.write (`${i} ${str1} <br> ${i} ${str2} <br> ${str3} <br>`)
}

//bài 2
var giaTri = 1;

function tinhGiaithua (giaiThua) {
  if (giaiThua < 0){
    return false;
  }
  else if (giaiThua === 0 && giaiThua === 1){
    return 1;
  }
  else{
    for (var i=1; i<=giaiThua; i++) {
      giaTri = giaTri * i;
    }
    return (giaTri)
  }
}
tinhGiaithua (5);

//bài 4
function troChoi() {

  var soNgaunhien = Math.floor(Math.random() * 10) + 1;
  var dapAn = (`Đáp án là ${soNgaunhien}`);
  var luot = 3;
  var soNhap;
  
  while (soNhap != soNgaunhien) {
    soNhap = prompt ('Máy sẽ tự động chọn 1 số nguyên từ 1 đến 10.  đố bạn đoán trúng đấy');

    if (soNhap === soNgaunhien) {
      alert (`Chúc mừng bạn đã đoán đúng`);
      break;
    } 
    
    if (soNhap < soNgaunhien) {
      luot --;
      alert (`Nhỏ hơn rồi. Bạn còn ${luot} lượt`);
    }

    if (soNhap > soNgaunhien) {
      luot --;
      alert (`Lớn hơn rồi. Bạn còn ${luot} lượt`);
    }

    if (luot == 0) {
      alert (`Bạn đã thua cuộc. ${dapAn}`);
      break;
    }
  }
}

troChoi ();