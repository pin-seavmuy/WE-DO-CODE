document.addEventListener('DOMContentLoaded', function () {
    const scrollLeftIcon = document.getElementById('scroll-left-icon');
    const scrollRightIcon = document.getElementById('scroll-right-icon');
    const clothesBox = document.querySelector('.clothes-box');

    let scrollAmount = 0;

    scrollLeftIcon.addEventListener('click', function () {
        // Scroll to the left
        scrollAmount -= 200; // You can adjust the scroll amount as needed
        clothesBox.scrollTo({
            top: 0,
            left: scrollAmount,
            behavior: 'smooth',
        });
    });

    scrollRightIcon.addEventListener('click', function () {
        // Scroll to the right
        scrollAmount += 200; // You can adjust the scroll amount as needed
        clothesBox.scrollTo({
            top: 0,
            left: scrollAmount,
            behavior: 'smooth',
        });
    });
});
