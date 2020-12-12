function hide_html() {
    zone_a_cacher = document.getElementById("html");
    zone_a_cacher.className="invisible";
    button = document.getElementById("btn_minus_html");
    button.className="invisible";
    button = document.getElementById("btn_plus_html");
    button.className="visible";
}
function show_html() {
    zone_a_montrer = document.getElementById("html");
    zone_a_montrer.className="visible";
    button = document.getElementById("btn_plus_html");
    button.className="invisible";
    button = document.getElementById("btn_minus_html");
    button.className="visible";
}
function hide_css() {
    zone_a_cacher = document.getElementById("css");
    zone_a_cacher.className="invisible";
    button = document.getElementById("btn_minus_css");
    button.className="invisible";
    button = document.getElementById("btn_plus_css");
    button.className="visible";
}
function show_css() {
    zone_a_montrer = document.getElementById("css");
    zone_a_montrer.className="visible";
    button = document.getElementById("btn_plus_css");
    button.className="invisible";
    button = document.getElementById("btn_minus_css");
    button.className="visible";
}
function hide_js() {
    zone_a_cacher = document.getElementById("js");
    zone_a_cacher.className="invisible";
    button = document.getElementById("btn_minus_js");
    button.className="invisible";
    button = document.getElementById("btn_plus_js");
    button.className="visible";
}
function show_js() {
    zone_a_montrer = document.getElementById("js");
    zone_a_montrer.className="visible";
    button = document.getElementById("btn_plus_js");
    button.className="invisible";
    button = document.getElementById("btn_minus_js");
    button.className="visible";
}

console.log('Hi ! ')
console.log('My GitHub : https://github.com/Nestx645')