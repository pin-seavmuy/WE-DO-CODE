document.addEventListener("DOMContentLoaded", function () {
    const clothesBox = document.querySelector(".clothes-box");
    const scrollLeftIcon = document.querySelector(".scroll-left");
    const scrollRightIcon = document.querySelector(".scroll-right");

    const scrollDistance = 200; // Adjust the scroll distance as needed

    scrollLeftIcon.addEventListener("click", function () {
        clothesBox.scrollBy({
            left: -scrollDistance,
            behavior: "smooth",
        });
    });

    scrollRightIcon.addEventListener("click", function () {
        clothesBox.scrollBy({
            left: scrollDistance,
            behavior: "smooth",
        });
    });
});
