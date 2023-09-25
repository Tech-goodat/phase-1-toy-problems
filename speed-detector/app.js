//function declaration
function getCarSpeed(speed){
let speedLimit=70;
let demeritPoints=0;
//if speed is less than speed limit
if(speed<speedLimit){
    console.log("Ok");
    
}
// if speed is greater than speed limit
else{
    demeritpoints=Math.floor((speed-speedLimit) /5);
    console.log(`points: ${demeritPoints}`);
    if(demeritPoints>12){
        console.log("License suspended");
    }
}
}