const hour = document.querySelector('.hour');
const min = document.querySelector('.min');
const sec = document.querySelector('.sec');

function clock() {
    const date = new Date();
    console.log(date);
    //The first method
    //setTimeout(clock, 1000)
    console.log(date);
    const h = date.getHours();
    //console.log(h);
    const hDe = (h / 12) * 360;
    hour.style.transform = `rotate(${hDe}deg)`;
    const m = date.getMinutes();
    //console.log(m);
    const mDe = (m / 60) * 360;
    min.style.transform = `rotate(${mDe}deg)`;
    const s = date.getSeconds();
    //console.log(s);
    const sDe = (s / 60) * 360;
    sec.style.transform =  `rotate(${sDe}deg)`;
    
}
//The first method
//clock();


//The Second method
setInterval(clock, 1000)