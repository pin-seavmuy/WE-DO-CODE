function clock(){
    const $ = (id) => {
        return document.getElementById(id);
    };
    const $hours = $('hours');
    const $minutes = $('minutes');
    const $seconds = $('seconds');
    const $ampm = $('ampm');
    const date = new Date();
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const ampm = hours >= 12 ? 'PM' : 'AM';

    if (hours > 12)
}