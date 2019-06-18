var a = prompt ("Moi ban nhap so");
var b = prompt ("Moi ban nhap so");
if (typeof a == "number" && typeof b == "number"){
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
else if{
	alert ("vui long nhap so");
}