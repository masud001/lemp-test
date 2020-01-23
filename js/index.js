$(function() {
	$(document).ready(function() {
		$(".table").click(function() {
			$(this).css({
				width: "calc(100% - 50px)",
				"box-shadow": "0px 1px 6px 0px #d1d1d1"
			});
		});
		$('input[type="checkbox"]').click(function() {
			if ($(this).prop("checked") == true) {
				console.log("button is clicked");
				$(".table")
					.hide()
					.css("z-index", "-1");
				$(".toggle-icon").css("z-index", "1");
				$(".holder-status-area").show();
			}
			if ($(this).prop("checked") == false) {
				$(".holder-status-area").hide();
				$(".table")
					.show()
					.css({
						"z-index": "2",
						width: "100%"
					});
			}
		});
	});
});
