$(function() {
	$.getJSON('https://minhducluong.github.io/db.json',function(data) {
		let films = data.films;
		let check = 0;
		function add12 () {
			for (let i = 0; i < 2; i++){
				$("table").append(`
					<tr>
					<td>${films[i].id}</td>
					<td>${films[i].genre}</td>
					<td>${films[i].title}</td>
					<td>${films[i].duration}</td>
					<td>${films[i].date}</td>
					</tr>
					`)
			}
		}

		function add34 () {
			for (let i=2; i < 4; i++){
				$("table").append(`
					<tr>
					<td>${films[i].id}</td>
					<td>${films[i].genre}</td>
					<td>${films[i].title}</td>
					<td>${films[i].duration}</td>
					<td>${films[i].date}</td>
					</tr>
					`)
			}
		}

		function add5 () {
			$("table").append(`
				<tr>
				<td>${films[4].id}</td>
				<td>${films[4].genre}</td>
				<td>${films[4].title}</td>
				<td>${films[4].duration}</td>
				<td>${films[4].date}</td>
				</tr>
				`)
		}

		$("th").on('click',function() {
			if (check == 0) {
				$('tr:gt(0)').remove();
				add12();
				$("th").on('click',function() {
					$('tr:gt(2)').remove();
					add34();
					$("th").on('click',function() {
						$('tr:gt(4)').remove();
						add5();
						$("th").on('click', function() {
							$('tr:gt(4)').remove();
							$("th").on('click', function() {
								$('tr:gt(2)').remove();
								$("th").on('click', function() {
									$('tr:gt(0)').remove();
								});
							});
						});
					});
				});
				check = 1;
			}
			if (check == 1) {
				$('tr:gt(0)').remove();
				add12();
				$("th").on('click',function() {
					$('tr:gt(2)').remove();
					add34();
					$("th").on('click',function() {
						$('tr:gt(4)').remove();
						add5();
						$("th").on('click', function() {
							$('tr:gt(4)').remove();
							$("th").on('click', function() {
								$('tr:gt(2)').remove();
								$("th").on('click', function() {
									$('tr:gt(0)').remove();
								});
							});
						});
					});
				});
				check = 0 ;
			}
		});
	});
});