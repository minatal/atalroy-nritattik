function Digiclock() {
    let date = new Date();

   let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    let timeFormate = "AM";
  

    if (hour===0){
        hour = 12;
    }
    if(hour >12){
        hour = hour-12;
        timeFormate ='PM';
    }
    
    hour = hour<10 ? '0' + hour: hour;
    minute = minute<10 ? '0' + minute : minute;
    second = second <10 ? '0' + second: second;
   
    document.getElementById("Digihour").innerHTML = hour;
   document.getElementById("Digiminute").innerHTML = minute;
   document.getElementById("Digisecond").innerHTML = second;
   document.getElementById("time").innerText = timeFormate;
     

  }

  setInterval(Digiclock, 1000)
