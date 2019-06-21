// điều kiện rẽ nhánh 1

//bài tập 1

function tenF (a,b){
	if (typeof a === "number"  && typeof b === "number" ){
		if (a>b){
			alert(a);
		}
		else if (b>a){
			alert(b);
		}
		else {
			alert("Hai so co gia tri bang nhau");
		}
	}
	else {
		alert ("vui long nhap so");
	}
}
tenF (a,b); // hoặc tenF(a,"b") ,tenF("a",b), tenF ("a","b");

//bài 4

function userName (name) {
	if (name !== "" && name.length <20) {
		return true;
    }
	else {
		alert("Nhập lại tài khoản");
		return false;
    }
}
userName ("name");

function userPass (pass) {
	if (pass.length < 32 && pass.length >6) {
		return true;
    }
	else {
		alert("Nhập lại mật khẩu");
		return false;
    }
}
userPass ("pass");

var pass = "abcabcabc"
function userConfirm (confirm) {
	if (confirm == pass) {
		return true;
    }
	else {
		alert("Nhập lại mật khẩu");
		return false;
    }
}
userPass ("confirm");

// điều kiện rẽ nhánh 2
 // bai 1

 var D = new Date();
 document.write =( "Bây giờ là: " + "Năm "+ D.getFullYear() + " Tháng " + (D.getMonth()+1+" ") + D.getHours()+" giờ "+ D.getMinutes()+ " phút.");
 if ((D.getMonth()+1) >=0 && (D.getMonth()+1) < 3) {
 	document.write ("Hiện tại là Mùa xuân");
 }
 else if ((D.getMonth()+1) >=3 && (D.getMonth()+1) < 6) {
 	document.write ("Hiện tại là Mùa hạ");
 }
 else if ((D.getMonth()+1) >=6 && (D.getMonth()+1) <9) {
 	document.write ("Hiện tại là Mùa thu");
 }
 else{
 	document.write ("Hiện tại là mùa đông");
 }

//bài 2

function tenF (x) {
	if (typeof x === "number") {
		if (x >= 0 && x<= 10) {
			if (x<4 ) {
				alert ("Điểm F");
			}
			else if (x>=4 && x<5.5){
				alert ("Điểm D");
			}
			else if (x>= 5.5 && x<7){
				alert ("Điểm C");
			}
			else if (x>=7 && x<8.5){
				alert ("Điểm B");
			}
			else if (x>=8.5){
				alert ("Điểm A");
			}
		}
		else {
			alert ("Bạn nhập sai số rồi bạn ơi");
			return false;
		}
	}
	else {
		alert ("Hãy nhập số");
		return false;
	}	
}
tenF (x);

// bài 3 

function translateHello(quocGia) {
	switch (quocGia) {	
		case "Korean":
			document.write("annyeonghaseyo");
			break;
		case "Ukrainian":
			document.write("pryvit");
			break;
		case "Spain":
			document.write("hola");
			break;
		case "Japan":
			document.write(`Kon'nichiwa`);
			break;
		case "Thai":
			document.write("S̄wạs̄dī");
			break;
		default : 
			document.write("Xin chào")
	}
}
translateHello("Korean");
