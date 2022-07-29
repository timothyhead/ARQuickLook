

const linkElement2 = document.getElementById("ar-link");
linkElement.addEventListener("message", function (event) { ... }, false);

const linkElement2 = document.getElementById("ar-link");
linkElement.addEventListener("message", function (event) {
    if (event.data == "_apple_ar_quicklook_button_tapped") {
        // Handle the user tap.
        console.log("ok");
    }
}, false);
