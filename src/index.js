import "./sass/base.sass";

window.$ = window.jQuery = require("jquery");

$(document).ready(function() {
	if ($("#BearLoad").length) {
		// MEOW!!
	} else {
		$(".Bearapper").before('<div id="BearLoad"></div>');
	};
	$("#MagicImage").on('load', function() {
		$("#MagicImageBox").css("height", ($("#MagicImage").height() - 5) + "px");
		$("#BearLoad").animate({height: "0px"}, 2000, function(){$("#BearLoad").remove()});
		$(window).scroll(function() {
			$("#MagicImage").css("top", (($(window).scrollTop() / 4) - 5) + "px");
		});
	});
});
