const IMAGE_WIDTH = 500;
const DELAY = 3000;
const $prev = document.querySelector('.prev');
const $next = document.querySelector('next');
const $imageContainer = document.querySelector('image-container');
const $images = document.querySelector('img');
let currentImg = 1;
let timeout;

function updateImg(){
    if (currentImg > $images.length){
        currentImg = 1;
    }else if (currentImg < 1){
        currentImg = $images.length;
    }
    $imageContainer.style.transform = translateX(-$)
}