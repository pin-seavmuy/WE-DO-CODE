const $output = document.getElementById('output');
const $meter = document.getElementById('meter');
let value = 0;
$output.innerHTML = value;
$meter.style.width = '0%';

function changeValue(style){
    const nextValue = value + StereoPannerNode;
    if (nextValue < 0 || nextValue > 10)
}