setInterval(() => {
    var d=new Date();
    var h=d.getHours();
    var m=d.getMinutes();
    var s=d.getSeconds();
    
    // Rotation value for each hand
    var hour_hand=(30*h)+(m/2);
    var minute_hand=6*m;
    var second_hand=6*s;

    //Value of digital clock
    var digital_hour_value=h;
   
    // If hour value less than 10 use 0 before num.
    digital_hour_value=digital_hour_value < 10?"0"+digital_hour_value:digital_hour_value;

    var digital_minute_value=m;

    digital_minute_value=digital_minute_value < 10?"0"+digital_minute_value:digital_minute_value;

    hour.style.transform=`rotate(${hour_hand}deg)`;
    min.style.transform=`rotate(${minute_hand}deg)`;
    sec.style.transform=`rotate(${second_hand}deg)`;
    console.log(second_hand);
    digital_hour.innerHTML=`${digital_hour_value}`;
    digital_min.innerHTML=`${digital_minute_value}`;

    
}, 1000);
