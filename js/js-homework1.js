function sayHello() {
	document.write ('xin chào các bạn');
}
sayHello();
 

 function sayHello(name) {
 	document.write ('xin chao' + name);
 }
sayHello('name');


 function sayHello(name) {

 	document.write ('xin chao\"' + name + '\"');
 }
sayHello('name');


function tinhTong(a,b) {
	document.write (a + b);
}
tinhTong(a,b);


function binhPhuong (a) {
	document.write ( a * a);
}
binhPhuong(a);

function theKy (a) {
	var b = Math.floor((a/100)+1);
	document.write ('day la the ki ' + b);
}
theKy(a);

function so (a) {
	document.write ('day la so ' + a);
}
so(a);

function chu(b) {
	document.write (`ten toi la "${b}"`);
}
chu('b');
function (so) {
	document.write (`day la so "${so}"`);
} (50);

function tenA(a) {
	document.write(a.charAt(0).toUppercase());
}
tenA('abclasldkjas')









