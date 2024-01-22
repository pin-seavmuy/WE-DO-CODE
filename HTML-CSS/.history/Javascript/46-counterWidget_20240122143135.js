const $counters = document.querySelectorAll('.counter');
$counters.forEach(($counters) => {
    $counters.innerText = '0';
    const updateCounter = () => {
        const target = Number(
            $counter.getAttribute('data-target'),
        );
        const count = Number($counter.innerText);
        const increment = target / 200;
        if (count < target){
            $counter.innerText = 
            `${Match.ceil(count + increment)}`;
            setTimeout(updateCounter)
        }
    };
});