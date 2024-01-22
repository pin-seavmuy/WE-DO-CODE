function updateTime(){
    const clock = document.querySelector('.clock');
    const now = new Date();
    const hours = now.getHours()
                    .toString()
                    .padStart(2, '0');
    const minutes = now.getMinutes()
                    .toString

}