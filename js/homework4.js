// bài 1

function locTen (arr) {
	arr.sort()
	arr.forEach(inTen)
}

function inTen (item,index) {
	document.write (`${index} : ${item } <br>`);
}

locTen ([arr]);

// bài 2

function laySochan (arr) {
	var newArr = arr.filter (locSo);

	function locSo(item) {
		return item % 2 == 0;
	}
	newArr.sort(function(a,b) {
		return b - a;
    }
	)
	return newArr;
}

laySochan ([arr]);

// bài 3

function timTrue (arr) {
	var number = arr.indexOf(true);
	return number;
}

timTrue ([arr]);

// bài 4

function daoChuoi (str) {
	var newStr = "";
	for (var i = str.length -1; i >= 0; i--) {
		newStr = newStr + str[i];
	}
	return newStr;
}

daoChuoi ("str");

// bài 5

function tinhTong (arr) {
	var newArr = arr.reduce (myFunction);

	function myFunction (total,num){
		return total + num;
	}
	return newArr;
}

tinhTong ([arr]);

//bài 6

function locTen (arr){

	var newArr = arr.filter (myFunction);

	function myFunction (item) {
		return item.charAt(0).toLowerCase() === "h";
	}
	return newArr;
}

locTen (["h","H","a"]);

// bài 8 

var hocSinh = [
  {name: "Alibaba", id: 1},
  {name: "Kane", id: 2},
  {name: "Steven", id: 3},
  {name: "Mike", id: 4},
  {name: "Suzy", id: 5}
]

function locHocsinh (a,b) {
	var nameA = a.name.toLowerCase();
	var nameB = b.name.toLowerCase();
 if (nameA > nameB) {
   return 1;
 } else if (nameA < nameB) {
   return -1;
 }
 else return 0;
}

hocSinh.sort(locHocsinh);

// bài 7
var arr = new Array(100);
for (var i = 0; i < a.length; ++i) { 
	arr[i] = false;
	for (var j = 1; j < 100; j ++ ) {
		if (j % i == 0) {
			arr[i] = ! arr[i];
		}
		return arr[i];
	}
}

// bài 7 làm lại

function checkTheDoor(num) {
	var isClosed = true;
	var arr = new Array (100);
	for (var i = 0; i < arr.length; i++){
		arr[i] = false;
	}
	for (var i = 1; i <= arr.length; i++){
		if(i == 1) {
			for (var i = 0; i < arr.length; i++)
				arr[i] = !arr[i];
		} else if ( i == 100) {
			arr[100] = !a[100];
		} else {
			for(var j = i; j <= arr.length; j++) {
				if(j % i == 0) {
					a[j] = !a[j]
				}
			}
		}
	}
	isClosed = arr[num]
	return isClosed
}



