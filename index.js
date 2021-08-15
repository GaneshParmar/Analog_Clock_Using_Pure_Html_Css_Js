setInterval(() => {
    var d=new Date();
    var h=d.getHours();
    var m=d.getMinutes();
    var s=d.getSeconds();

    // Rotation value for each hand
    var hour_hand=(30*h)+(m/2);
    var minute_hand=6*m;
    var second_hand=6*s;

    hour.style.transform=`rotate(${hour_hand}deg)`;
    min.style.transform=`rotate(${minute_hand}deg)`;
    sec.style.transform=`rotate(${second_hand}deg)`;
}, 1000);