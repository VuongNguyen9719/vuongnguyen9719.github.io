// Xử Lý Số
// bài 1

function vCau (r) {
	let V = 4/3 * r*r*r*Math.PI;
	return V;
}

vCau (5);

// bài 2

function sumMid (a,b) {
	let tong = 0;
	for (let i = a + 1; i<b; i++){
		tong = tong + i;
	}
	return tong;
}

sumMid (1,10);

// bài 3

function kiemTraSnt(n)
{
	let check = true;
	if (n < 2){
		check = false;
	}
	else{
		for (let i = 2; i < n ; i++)
		{
			if (n % i == 0){
				check = false;
				break;
			}
		}
	}
	if (check == true){
		return true;
	}
	else{
		return false;
	}
}

kiemTraSnt (3);

// bài 4

function kiemTraSnt(n)
{
	let check = true;
	if (n < 2){
		check = false;
	}
	else{
		for (let i = 2; i < n ; i++)
		{
			if (n % i == 0){
				check = false;
				break;
			}
		}
	}
	if (check == true){
		return true;
	}
	else{
		return false;
	}
}

function tinhTongSnt(n) {

	let tong_1 = 0;
	let tong_2 = 0;

	for (let j = 0; j <= n; j++) {
		if (kiemTraSnt(j) == true) {
			tong_1 += j;
		}
	}
	return tong_1
	if (n = !isNaN(n)) {
		for (let k = 0; k<=n; k ++){
			if (kiemTraSnt(k) == true ) {
				tong_2 += k;
			}
		}
	}
	return tong_2;
}

tinhTongSnt (101);

// bài 5

function tongUoc (number) {
	let sum_1 = 0;
	for ( let i = 1; i <= number; i++){
		if (number % i == 0) {
			sum += i;
		}
	}
}

tongUoc (5);

// bài 6

function check (number) {
	let n1 = 0;
	let n2 = 1;
	let n3 = 1;
	if (number == 0 || number == 1) return number;
	else {
		for (i = 2; i <= number; i++){
			n3 = n1 + n2;
			n1 = n2;
			n2 = n3;
		}
	}
	return n3;
}
function tinhTong(number){
	let tong = 0;
	for (let i = 0; i<= number; i++){
		if (check(i) % 2 == 0 && check(i) <= number) {
			tong += check(i);
		}
	}
	return tong;
}

tinhTong (10);

// xử lý chuỗi

// bài 1

function chuyenChuoi(str) {
	let newStr = str.toLowerCase().split(' ');
	for (let i = 0; i < newStr.length; i++) {
		newStr[i] = newStr[i].charAt(0).toUpperCase() + newStr[i].substring(1);     
	}
	return newStr.join(' '); 
}

chuyenChuoi("hello world");

// bài 2

function chuyenChuoi (str) {
	let newStr = str.toLocaleLowerCase().split(' ').join(`-`);
	return newStr;
}

chuyenChuoi ("hello world")

// bài 3

function checkChuoi (str) {
	let newStr = str.toLowerCase().split('').reverse().join("");
	for (let i = 0, j=0; i < str.length, j < newStr.length; i++, j++){
		if (str[i] != newStr[j]) {
			return false
		}
		else
			return true;
	}
}
checkChuoi ("hello ollEH")

//bài 4

function checkChuoi (str_1,str_2) {
	let newStr_1 = str_1.toLowerCase().split("").join("");
	let newStr_2 = str_2.toLowerCase().split("").join("");
	for (let i = 0; i < newStr_2.length; i++){
		let check = 0;
		for(let j = 0; j < newStr_1.length; j++){
			if (newStr_1[j] == newStr_2[i]) {
				check = 1;
				break;
			}
		}
		if(check == 0)
			return false;
	}
	return true;
}

checkChuoi ("hello world","hey");

// xử lý object

//bài 1


//bài 2

let hocSinh = [
{name: "Alibaba", gender : "male", age : 20},
{name: "Kane", gender : "male", age : 21},
{name: "Steven", gender : "male", age : 22},
{name: "Mike", gender : "female", age : 23},
{name: "Suzy", gender : "female", age : 24}
];

function tinhTuoiTrungBinh (){
	let trungBinh = 0;
	for (let i = 0; i<hocSinh.length; i++) {
		trungBinh = trungBinh + hocSinh[i].age;
	}

	return trungBinh / hocSinh.length;
}

tinhTuoiTrungBinh ();


// bài 3

let hocSinh = [
{name: "Alibaba", gender : "male", age : 22},
{name: "Kane", gender : "male", age : 21},
{name: "Steven", gender : "male", age : 29},
{name: "Mike", gender : "female", age : 30},
{name: "Suzy", gender : "female", age : 24}
];

function sapXepTheoTuoi (a,b) {
	let age_1 = a.age;
	let age_2 = b.age;
	if (age_1 > age_2) {
		return -1;
	}
	else if (age_1 < age_2) {
		return 1;
	}
	else return 0;
}

hocSinh.sort(sapXepTheoTuoi);

// bài 4

let hocSinh = [
{name: "G", gender : "male", age : 20},
{name: "A", gender : "male", age : 21},
{name: "C", gender : "male", age : 22},
{name: "D", gender : "female", age : 23},
{name: "B", gender : "female", age : 24}
];

function locHocsinh (a,b) {
	let nameA = a.name.toLowerCase();
	let nameB = b.name.toLowerCase();
	if (nameA > nameB) {
		return 1;
	} else if (nameA < nameB) {
		return -1;
	}
	else return 0;
}

hocSinh.sort(locHocsinh);

// bài 5

let hocSinh = [
{name: "G", gender : "male", age : 20},
{name: "A", gender : "male", age : 21},
{name: "C", gender : "male", age : 22},
{name: "hua", gender : "female", age : 23},
{name: "Hhhhhhieie", gender : "female", age : 24}
];

let newHocSinh = hocSinh.filter(locTen)

function locTen (item) {
	return item.name[0].toUpperCase() === 'H';
}

// xử lý mảng

// bài 1

function locMang (arr){
	let newArr = arr.filter(loc);

	function loc(item) {
		if (item !== false && item !== 0 && item !== "" && item !== undefined && item !== null && item !== NaN) return item;
	}
	return newArr;
}

locMang ([1,false,0,"",null,undefined,NaN]);

// bài 2

// 1. nhập 2 mảng
// 2. quét mảng 1. lấy tùng phần tử đã quét mảng 1 quét mảng 2. nếu phần tử mảng 1 != phần tử mảng 2. push phần tử khác nhau đó lên mang mới


// bài 3 

// viết 2 vòng for lồng nhau. 

for (i = 0;i<arr.length;i++) {
	for (j = i + 1; j<arr.length; j++){
		if (arr[i].length >= arr[j].length) {
			// push arr[i] vào mảng mới
		}
	}
} 

// tổng hợp 

// bài 1

function giaiPhuongTrinh (a,b) {
	let nghiem;
	if (a == 0) {
		alert("Phương trình vô nghiệm");
	}
	else {
		if (b == 0) {
			alert("Phương trình vô số nghiệm");
		}
		else{
			nghiem = -b/a;
			alert(`Nghiệm của phương trình là : ${nghiem}`);
		}
	}
	return nghiem;
}

giaiPhuongTrinh (1,2);

// bài 2

function giaiPhuongTrinh (a,b,c) {
	if (a == 0) {
		let nghiem,nghiem1,nghiem2
		if (b == 0) {
			alert("Phương trình vô nghiệm");
		}
		else {
			if (c == 0) {
				alert("Phương trình vô số nghiệm");
			}
			else {
				nghiem = -c/b;
				alert(`Nghiệm của phương trình là : ${nghiem}`);
			}
		}
	}
	else{
		let delta = b*b - 4*a*c;
		if (delta < 0) {
			alert("Phương trình vô nghiệm");
		}
		else if (delta == 0) {
			nghiem1 = nghiem2 = -b/(2*a);
			alert(`Phương trình có nghiệm kép là : ${nghiem1}`);
		}
		else {
			nghiem1 = (-b - Math.sqrt(delta)) / (2*a);
			nghiem2 = (-b + Math.sqrt(delta)) / (2*a);
			alert(`Phương trình có 2 nghiệm phân biệt là : ${nghiem1} và ${nghiem2}`);
		}
	}
	return nghiem,nghiem1,nghiem2;
}

giaiPhuongTrinh (1,2,3);

// bài 5

// chuyển number sang string. từ string chuyển sang mảng. sắp xếp từng phần tử trong mảng lại. chuyển từ mảng sang string. string sang number;