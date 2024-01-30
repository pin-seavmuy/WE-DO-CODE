// $(document).ready(function() {
//     $('#autoWidth').lightSlider({
//         autoWidth:true,
//         loop:true,
//         onSliderLoad: function() {
//             $('#autoWidth').removeClass('cS-hidden');
//         } 
//     });  
//   });

document.addEventListener("DOMContentLoaded", function () {
    const clothesBox = document.querySelector(".clothes-box");
    const scrollLeftIcon = document.querySelector(".scroll-left");
    const scrollRightIcon = document.querySelector(".scroll-right");

    scrollLeftIcon.addEventListener("click", function () {
        clothesBox.scrollBy({
            left: -400, // Set the scroll distance as needed
            behavior: "smooth",
        });
    });

    scrollRightIcon.addEventListener("click", function () {
        clothesBox.scrollBy({
            left: 400, // Set the scroll distance as needed
            behavior: "smooth",
        });
    });
});
