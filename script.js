const deg = 6;

const hr = document.querySelector("#hr");
const mn = document.querySelector("#mm");
const sc = document.querySelector("#sc");

const btn = document.querySelector('.btn');
const stp = document.querySelector('.stp');


// console.log('');

btn.addEventListener('click',er,true);
 function er(){
    setInterval(() => {
        let day = new Date();
        // console.log(day);
      
        let ms = day.getMilliseconds() * deg;
        let hh = day.getHours() * 30;
        let mm = day.getMinutes() * deg;
        let ss = day.getSeconds() * deg + ms / 1000;
        hr.style.transform = `rotateZ(${hh + mm / 12}deg)`;
        mn.style.transform = `rotateZ(${mm}deg)`;
        sc.style.transform = `rotateZ(${ss}deg)`;
      
      
      }, 1);
    }

stp.removeEventListener('click',er,false)



