
let arr_1 = [];
let display = "";
let check_1;
let check_2;
let ketQua;
let tinhGiaiThua = 1;
let tinhCan;
let tinhBinhPhuong;

// hiển thị

let screen = document.getElementById('display')
function pressNumber (str) {
	display = display + str;
	screen.innerText = display;
}

// reset

function pressAc (str) {
	display = [];
	arr_1 = [];
	checkGiaiThua = 0;
	tinhCan = 0;
	tinhBinhPhuong = 0;
	screen.innerText = 0;
}

// phép toán + - x /

function pressMath (str) {
	check_1 = str;
	if (display != "") {
		arr_1.unshift(display.valueOf())
	}
	display = [];
	if (check_1 == "+") {screen.innerText = "+";}
	if (check_1 == "-") {screen.innerText = "-";}
	if (check_1 == "x") {screen.innerText = "X"};
	if (check_1 == "/") {screen.innerText = "/"};
}

// kết quả của phép toàn 

function pressKetQua (str) {
	if (check_1 == "+") {
		arr_1.unshift(display.valueOf())
		ketQua = Number(arr_1[1]) + Number(arr_1[0]);
		screen.innerText = ketQua;
		arr_1.unshift(Number(ketQua));
	}
	if (check_1 == "-") {
		arr_1.unshift(display.valueOf())
		ketQua = Number(arr_1[1]) - Number(arr_1[0]);
		screen.innerText = ketQua;
		arr_1.unshift(Number(ketQua));
	}
	if (check_1 == "x") {
		arr_1.unshift(display.valueOf())
		ketQua = Number(arr_1[1]) * Number(arr_1[0]);
		screen.innerText = ketQua;
		arr_1.unshift(Number(ketQua));
	}
	if (check_1 == "/") {
		arr_1.unshift(display.valueOf())
		ketQua = Number(arr_1[1]) / Number(arr_1[0]);
		screen.innerText = ketQua;
		arr_1.unshift(Number(ketQua));
	}
}

// giai thừa bình phương căn bậc 2

function pressFunction (str) {
	if (display == "") {screen.innerText = 0;}

	if (display != "") {
		check_2 = str;
		if (check_2 == "can" ) {
			arr_1.unshift(display.valueOf());
			tinhCan = Math.sqrt(arr_1[0]);
			arr_1.unshift(tinhCan.valueOf());
			screen.innerText = tinhCan;
			display = [];
		}
		if (check_2 == "binhPhuong") {
			arr_1.unshift(display.valueOf());
			tinhBinhPhuong = Math.pow(arr_1[0], 2);
			arr_1.unshift(tinhBinhPhuong.valueOf());
			screen.innerText = tinhBinhPhuong;
			display = [];
		}
		if (check_2 == "giaiThua") {
			arr_1.unshift(display.valueOf());
			for (let i = 1; i<= Number(arr_1[0]); i++) {
				tinhGiaiThua = tinhGiaiThua*i;
			}
			screen.innerText = tinhGiaiThua;
			arr_1.unshift(tinhGiaiThua.valueOf());
			display = [];
		}
	}
}