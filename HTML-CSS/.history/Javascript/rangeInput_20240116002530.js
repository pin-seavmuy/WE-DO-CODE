const $input = document.querySelector('input');
const $value = document.querySelector('.value div');

const start = parseFloat($input.min);
const end = parseFloat($input.max);
const step = parseFloat($input.step);

let spans = '';
for (let i = start; i<=end; i+= step){
    spans += `<span>${i}</span>`;
}
$value.innerHTML = spans;

$input.addEventListener()
    'input', () => {

    }
);