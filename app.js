


const linkElement = document.getElementById("CustomBanner");
linkElement.addEventListener("message", function (event) {
  // window.open("https://www.w3schools.com");
    if (event.data == "_apple_ar_quicklook_button_tapped") {
        // Handle the user tap.
        window.open("https://www.w3schools.com");
    }
}, false);
