const iday = document.getElementById('iday');
const hours = document.getElementById('ihours');
const minutes = document.getElementById('iminutes');
const segunds = document.getElementById('isegunds');
const topColor = document.querySelectorAll('.top');
const bottonColor = document.querySelectorAll('.bottom');
const number =document.querySelectorAll('.reloStyle');
let segundTotal = 59;
let minutesTotal = 9;
let hoursTotal = 23;
let dayTotal = 8;
function cambioColor(nu){
    topColor[nu].style.cssText ='transform: translateY(100%);' + ' transition: 1s all;'+'background-color: #34364F;';
    bottonColor[nu].style.cssText = 'transform: translateY(-100%);' + ' transition: 1s all;'+'background-color: #2C2C44;';
}
function origilColor(nu){
    topColor[nu].style.cssText = 'transform: translateY(0);' + ' transition: 0.8s all;'+'background-color: #2C2C44';
    bottonColor[nu].style.cssText = 'transform: translateY(0);' + ' transition: 0.8s all;'+'background-color: #34364F;';
}
const timeSegund = setInterval(()=>{
    cambioColor(3)
},1000)
const timeSegund1 = setInterval(()=>{
    origilColor(3)
},2000)
const timeId = setInterval(()=>{
    if(segundTotal == 0 && dayTotal == 0 && minutesTotal == 0 && hoursTotal == 0){
        clearInterval(timeId)
    }
    origilColor(2);
    origilColor(1);
    origilColor(0);
    segunds.innerHTML = segundTotal;
    segundTotal--;
    if(segundTotal < 0){
        cambioColor(2)
        segundTotal = 59;
        minutes.innerHTML = minutesTotal;
        minutesTotal--;
        if(minutesTotal < 0){
            cambioColor(1);
            minutesTotal = 59;
            hours.innerHTML = hoursTotal;
            hoursTotal--;
            if(hoursTotal < 0){
                cambioColor(0)
                hoursTotal = 23;
                iday.innerHTML = dayTotal;
                dayTotal--;
                
            }
        }
    }
},1000)
