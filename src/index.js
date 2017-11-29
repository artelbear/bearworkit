// import style
import "./sass/base.sass";
// import user components
import "./js/firebase.min.js";
// import indist.start from
import "./js/start.js";

if (indist.start == null) {
	alert("You dont setup your function Start");
} else {
	window.onload = indist.start;
};
