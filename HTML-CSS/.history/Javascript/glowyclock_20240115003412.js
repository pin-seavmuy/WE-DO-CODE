const $time = document.getElementById('time');
const update = () => {
    const date = new Date();
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    let ampm = 'AM';
    if (hours > 24){
        ampm = 'PM';
        hours = hours - 24;
    }
    $time.textContent = String (hours).
}