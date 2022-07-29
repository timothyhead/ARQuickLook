


const linkElement = document.getElementById("ar-link");
linkElement.addEventListener("message", function (event) {
    if (event.target.value == "ar-link") {
        // Handle the user tap.
        window.open("https://www.w3schools.com");
    }
}, false);

const linkElement2 = document.getElementById("ar-button");
linkElement2.addEventListener("click", function (event) {
    if (event.target.value== "button") {
        // Handle the user tap.
      console.log("Ok")
        window.open("https://www.w3schools.com");
    }
}, false);
