$(function() {
	// khai báo

	let films = [
	{genre: "Animation", title: "Wildfood", duration: "3:47", date: "2014-07-16"},
	{genre: "Film", title: "The Deer", duration: "6:24", date: "2014-02-28"},
	{genre: "Animation", title: "The Ghost", duration: "11:40", date: "2012-04-10"},
	{genre: "Film", title: "Animals", duration: "6:40", date: "2005-12-21"},
	{genre: "Animation", title: "Wagons", duration: "21:40", date: "2007-04-12"},
	];

	let check = 0;

// thêm bảng

function addTable () { 
	for (let i = 0; i <films.length; i++){
		$("table").append(`
			<tr>
			<td>${films[i].genre}</td>
			<td>${films[i].title}</td>
			<td>${films[i].duration}</td>
			<td>${films[i].date}</td>
			</tr>
			`)
	}
}
addTable();

// sort genre

$("th:nth-child(1)").on('click',function() {
	$('tr:gt(0)').remove();
	if (check == 0) {
		$("#span0").css("display","none");
		$("#span1").css("display","inline");
		$("#span2").css("display","inline");
		$("#span3").css("display","inline");
		$("#span4").css("display","inline");
		$("#span5").css("display","inline");
		$("#span6").css("display","inline");
		$("#span7").css("display","inline");
		films.sort(function(a,b){
			if (a.genre > b.genre) return 1;
			else if (a.genre < b.genre) return -1;
			else return 0;
		});
		addTable();
		check = 1;
	}
	else {
		$("#span1").css("display","none");
		$("#span0").css("display","inline");
		$("#span2").css("display","inline");
		$("#span3").css("display","inline");
		$("#span4").css("display","inline");
		$("#span5").css("display","inline");
		$("#span6").css("display","inline");
		$("#span7").css("display","inline");
		films.sort(function(a,b){
			if (a.genre < b.genre) return 1;
			else if (a.genre > b.genre) return -1;
			else return 0;
		});
		addTable();
		check = 0;
	}
});

// sort title

$("th:nth-child(2)").on('click',function() {
	$('tr:gt(0)').remove();
	if (check == 0) {
		$("#span2").css("display","none");
		$("#span0").css("display","inline");
		$("#span1").css("display","inline");
		$("#span7").css("display","inline");
		$("#span3").css("display","inline");
		$("#span4").css("display","inline");
		$("#span5").css("display","inline");
		$("#span6").css("display","inline");
		films.sort(function(a,b){
			if (a.title > b.title) return 1;
			else if (a.title < b.title) return -1;
			else return 0;
		});
		addTable();
		check = 1;
	}
	else {
		$("#span3").css("display","none");
		$("#span1").css("display","inline");
		$("#span2").css("display","inline");
		$("#span4").css("display","inline");
		$("#span5").css("display","inline");
		$("#span6").css("display","inline");
		$("#span7").css("display","inline");
		$("#span0").css("display","inline");
		films.sort(function(a,b){
			if (a.title < b.title) return 1;
			else if (a.title > b.title) return -1;
			else return 0;
		});
		addTable();
		check = 0;
	}
});

// sort duration

$("th:nth-child(3)").on('click',function() {
	$('tr:gt(0)').remove();
	if (check == 0) {
		$("#span4").css("display","none");
		$("#span5").css("display","inline");
		$("#span0").css("display","inline");
		$("#span1").css("display","inline");
		$("#span2").css("display","inline");
		$("#span3").css("display","inline");
		$("#span6").css("display","inline");
		$("#span7").css("display","inline");
		films.sort(function(a,b){
			let numberA = a.duration.replace(':', '');
			let numberB = b.duration.replace(':', '');
			return numberA - numberB;
		});
		addTable();
		check = 1;
	}
	else {
		$("#span5").css("display","none");
		$("#span4").css("display","inline");
		$("#span0").css("display","inline");
		$("#span1").css("display","inline");
		$("#span2").css("display","inline");
		$("#span3").css("display","inline");
		$("#span6").css("display","inline");
		$("#span7").css("display","inline");
		films.sort(function(a,b){
			let numberA = a.duration.replace(':', '');
			let numberB = b.duration.replace(':', '');
			return numberB - numberA;
		});
		addTable();
		check = 0;
	}
});

// sort date

$("th:nth-child(4)").on('click',function() {
	$('tr:gt(0)').remove();
	if (check == 0) {
		$("#span6").css("display","none");
		$("#span7").css("display","inline");
		$("#span0").css("display","inline");
		$("#span1").css("display","inline");
		$("#span2").css("display","inline");
		$("#span3").css("display","inline");
		$("#span4").css("display","inline");
		$("#span5").css("display","inline");
		films.sort(function(a,b){
			if (new Date(a.date) > new Date(b.date)) return 1;
			else if (new Date(a.date) < new Date(b.date)) return -1;
			else return 0;
		});
		addTable();
		check = 1;
	}
	else {
		$("#span7").css("display","none");
		$("#span6").css("display","inline");
		$("#span0").css("display","inline");
		$("#span1").css("display","inline");
		$("#span2").css("display","inline");
		$("#span3").css("display","inline");
		$("#span4").css("display","inline");
		$("#span5").css("display","inline");
		films.sort(function(a,b){
			if (new Date(a.date) < new Date(b.date)) return 1;
			else if (new Date(a.date) > new Date(b.date)) return -1;
			else return 0;
		});
		addTable();
		check = 0;
	}
});

});
