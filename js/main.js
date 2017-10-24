// Auth: Kiselev Nikolay
// For BearWorKit 2017 with love


console.log("head from bearworkit is awake");

var script = document.createElement('script');
script.src = 'http://code.jquery.com/jquery.min.js';
script.type = 'text/javascript';

document.getElementsByTagName('head')[0].appendChild(script);

window.onload = function(){
  jQuery('head').append('<link rel="stylesheet" href="bearworkit/css/main.css" type="text/css" />');
  body_run()
};

function body_run() {
  console.log("body from bearworkit is loaded")

  var windowWidth = window.screen.width < window.outerWidth ?
  window.screen.width : window.outerWidth;
  var mobile = windowWidth < 500;
}
