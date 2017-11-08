import "./sass/base.sass";
import "./sass/mobi.sass";
import Vue from "./js/vue.js";

function vue_oper() {
	window.scrollTo(0, 0);

	var loader = new Vue ({
		el: "#BearLoad",
		data: {
			show: true
		}
	});

	loader.show = false
	
	var Parallax = new Vue ({
		el: "#MagicImage",
		data: {
			paraTop: "0px"
		}
	});

	window.onscroll = function() {
		var scrolled = window.pageYOffset || document.documentElement.scrollTop;
		Parallax.paraTop = (scrolled / 4) + "px"
	};
}; // VUE FUN END

window.onload = vue_oper;
