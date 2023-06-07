const iday = document.getElementById('iday');
const hours = document.getElementById('ihours');
const minutes = document.getElementById('iminutes');
const segunds = document.getElementById('isegunds');
let segundTotal = 59;
let minutesTotal = 59;
let hoursTotal = 24;
let dayTotal = 8;
const timeId = setInterval(()=>{
    if(segundTotal == 0 && dayTotal == 0 && minutesTotal == 0 && hoursTotal == 0){
        clearInterval(timeId)
    }
    segunds.innerHTML = segundTotal;
    segundTotal--;
    if(segundTotal < 0){
        segundTotal = 59;
        minutes.innerHTML = minutesTotal;
        minutesTotal--;
        if(minutesTotal < 0){
            minutesTotal = 59;
            hours.innerHTML = hoursTotal;
            hoursTotal--;
            if(hoursTotal < 0){
                hoursTotal = 23;
                iday.innerHTML = dayTotal;
                dayTotal--;
                
            }
        }
    }
},1000)