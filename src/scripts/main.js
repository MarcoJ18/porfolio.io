import moment from "moment";
const currentTime = document.querySelector('.currentTime');

let time = moment().format('h:mm: A'); 
currentTime.innerHTML = time;

window.setInterval(() => {
    let time = moment().format('h:mm: A'); 
    currentTime.innerHTML = time;
}, 1000);
