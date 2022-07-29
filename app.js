const linkElement = document.getElementById("ar-button");

linkElement.addEventListener("click", function (event) {

    if (event.target.value == "ar-button") {
        // Handle the user tap.
        console.log("Ok");
    }
}, false);
