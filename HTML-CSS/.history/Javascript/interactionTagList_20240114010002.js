const tags = ['optimus prime', 'bumblebee', 'megatron', 'ironhide'];
const $taglist = document.querySelector('ul');
const $input = document.querySelector('input');
const render = () => {
    $taglist.innerText = tags
        .map(
            (tag, index) => {
                return `<li>${tag}<span
                data-index="${index}">&times;</span></li>`;
            },
    )
    .join('');
};

render();
$input.addEventListener(
  'keyup',
  (event) => {
    if (event.keyCode !== 13){
        return;
    }
    const newTag = $input.value.replace(/\s/g, '');
    if (newTag !==)
  },
);