let speed=80;
//fuction to check if speed is within limit
function checkForSpeedLimit(speed){
    if (speed<70){
        console.log("OK");
    }
    else{
        let points=Math.floor((speed-70)/5);
        if (points>=12){
            console.log("Liesence suspended");

        }
        //1 point for every 5km/h above the speed limit

    }
}