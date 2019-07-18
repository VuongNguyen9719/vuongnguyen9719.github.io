// submit + blur

$(function() {
	let $userName = $("#username");
	let $userNumber = $("#sdt");
	let $userEmail = $("#email");

	$userName.on('input',changeName);
	$userNumber.on('input',changeNumber);
	$userEmail.on('input',changeEmail);

// count down number

	$("#comment").keyup(function(event) {
		$('#numberDown').val(250 - $('#comment').val().length);
		$("#numberDown").css("display","inline")
	});

// event blur

function changeName () {
	if (!/[^A-Za-z0-9_@\.]|@{2,}|\.{5,}/.test($userName.val())) {
		$userName.css("border","solid 1px red");
		$("#span1").css({"display":"inline","color":"red"});
		$("#span0").css("display","none");
		event.preventDefault();
	}
	if (/[^A-Za-z0-9_@\.]|@{2,}|\.{5,}/.test($userName.val())) {
		$userName.css("border","solid 1px green");
		$("#span0").css({"display":"inline","color":"green"});
		$("#span1").css("display","none");
	}
}

function changeNumber () {
	if (!/^[0-9]+$/.test($userNumber.val())) {
		$userNumber.css("border","solid 1px red");
		$("#span3").css({"display":"inline","color":"red"});
		$("#span2").css("display","none");
		event.preventDefault();
	}
	if (/^[0-9]+$/.test($userNumber.val())) {
		$userNumber.css("border","solid 1px green");
		$("#span2").css({"display":"inline","color":"green"});
		$("#span3").css("display","none");
	}
}
function changeEmail () {
	if (!/[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/igm.test($userEmail.val())) {
		$userEmail.css("border","solid 1px red");
		$("#span5").css({"display":"inline","color":"red"});
		$("#span4").css("display","none");
		event.preventDefault();
	}
	if (/[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/igm.test($userEmail.val())) {
		$userEmail.css("border","solid 1px green");
		$("#span4").css({"display":"inline","color":"green"});
		$("#span5").css("display","none");
	}
}

// event submit

$('form').on('submit', function(event) {
	if (!/[^A-Za-z0-9_@\.]|@{2,}|\.{5,}/.test($userName.val())) {
		$userName.css("border","solid 1px red");
		$("#span1").css({"display":"inline","color":"red"});
		$("#span0").css("display","none");
		event.preventDefault();
	}
	if (!/^[0-9]+$/.test($userNumber.val())) {
		$userNumber.css("border","solid 1px red");
		$("#span3").css({"display":"inline","color":"red"});
		$("#span2").css("display","none");
		event.preventDefault();
	}
	if (!/[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/igm.test($userEmail.val())) {
		$userEmail.css("border","solid 1px red");
		$("#span5").css({"display":"inline","color":"red"});
		$("#span4").css("display","none");
		event.preventDefault();
	}
	if (/[^A-Za-z0-9_@\.]|@{2,}|\.{5,}/.test($userName.val())) {
		$userName.css("border","solid 1px green");
		$("#span0").css({"display":"inline","color":"green"});
		$("#span1").css("display","none");
	}
	if (/^[0-9]+$/.test($userNumber.val())) {
		$userNumber.css("border","solid 1px green");
		$("#span2").css({"display":"inline","color":"green"});
		$("#span3").css("display","none");
	}
	if (/[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/igm.test($userEmail.val())) {
		$userEmail.css("border","solid 1px green");
		$("#span4").css({"display":"inline","color":"green"});
		$("#span5").css("display","none");
	}
	if (/[^A-Za-z0-9_@\.]|@{2,}|\.{5,}/.test($userName.val()) && /^[0-9]+$/.test($userNumber.val()) && /[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/igm.test($userEmail.val())) {
		$("form").submit();
	}

	$("#comment").input(function(event) {
		$('#numberDown').val(250 - $('#comment').val().length);
	});
});
});