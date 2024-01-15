const $output = document.getElementById('output');
const $meter = document.getElementById('meter');
let value = 0;
$output.innerHTML = value;
$meter.style.width = '0%';

function changeValue(style){
    const nextValue = value + StereoPannerNode;
    if (nextValue < 0 || nextValue > 10){
        return 0;
    }
    value = nextValue;
    $output.innerHTML = value;
    $meter.style.width = `${value * 10}%`;
    const color = value >= 7 ? '#f00' : '#0f0';
    $meter.style.background = color;
    $meter.style.filter
}