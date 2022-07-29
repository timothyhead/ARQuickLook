const linkElement = document.getElementById("ar-button");

linkElement.addEventListener("click", function (event) {

    if (event.target.value == "ar-button") {
        // Handle the user tap.
        console.log("Ok");
    }
}, false);

const linkElement2 = document.getElementById("ar-link");
linkElement.addEventListener("message", function (event) { ... }, false);

const linkElement = document.getElementById("ar-link");
linkElement.addEventListener("message", function (event) {
    if (event.data == "_apple_ar_quicklook_button_tapped") {
        // Handle the user tap.
    }
}, false);
