const $items = document.querySelectorAll('.menu li');

$items.forEach(($item) => {
    $item.addEventListener(
        'click',
        () => {
            $items.forEach((otherItem) => {
                otherItem.classList.remove
            })
        }
    )
})