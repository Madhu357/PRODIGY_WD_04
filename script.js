window.addEventListener("scroll", function () {

    let header = document.querySelector("header");

    if (window.scrollY > 50) {

        header.style.background = "#00ffff";

    }
    else {

        header.style.background = "#06131f";

    }

});