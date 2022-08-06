


const linkElement = document.getElementById("CustomBanner");
linkElement.addEventListener("message", function (event) {
  // window.open("https://www.w3schools.com");
    if (event.data == "_apple_ar_quicklook_button_tapped") {
        // Handle the user tap.
        window.open("https://www.w3schools.com");
    }
}, false);

const linkElement2 = document.getElementById("CustomBanner2");
linkElement2.addEventListener("message", function (event) {
  // window.open("https://www.w3schools.com");
    if (event.data == "_apple_ar_quicklook_button_tapped") {
        // Handle the user tap.
        window.open("https://www.w3schools.com");
    }
}, false);

const linkElement3 = document.getElementById("CustomBanner3");
linkElement.addEventListener("message", function (event) {
  // window.open("https://www.w3schools.com");
    if (event.data == "_apple_ar_quicklook_button_tapped") {
        // Handle the user tap.
        window.open("https://www.w3schools.com");
    }
}, false);
