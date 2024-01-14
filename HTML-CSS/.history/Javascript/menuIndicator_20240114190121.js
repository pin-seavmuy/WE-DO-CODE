const $items = document.querySelectorAll('.list');

function activeLink(){
    $items.forEach(($items) => {
        $items.classList.remove('active');
    });
    this.classList.add('active');
}

$items.forEach