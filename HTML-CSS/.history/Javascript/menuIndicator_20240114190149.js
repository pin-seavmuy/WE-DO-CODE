const $items = document.querySelectorAll('.list');

function activeLink(){
    $items.forEach(($item) => {
        $items.classList.remove('active');
    });
    this.classList.add('active');
}

$items.forEach(($item) => )