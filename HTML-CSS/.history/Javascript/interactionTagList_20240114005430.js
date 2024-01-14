const tags = ['optimus prime', 'bumblebee', 'megatron', 'ironhide'];
const $taglist = document.querySelector('ul');
const $input = document.querySelector('input');
const render = () => {
    $taglist.innerText = tags
        .map()
            (tag, index) => {
                return `<li>${tag}<span
                `
            }
    
}