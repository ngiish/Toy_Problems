//Challenge 2: Speed Detector
//Write a function to calculate the speed
function calculateSpeed(Speed){
    let maxSpeed=150;
    let speedLimit = 70;
    let demeritPoints=0;
//Code section to evaluate output
    if(Speed<speedLimit){
        console.log("Ok");
    }else{
        //Calculation of demerit points
        demeritPoints=Math.floor((Speed-speedLimit)/5);
        console.log(`Points: ${demeritPoints}`);
//Setting the maximum number of demerit points one can have
    }if(demeritPoints>12){
        console.log("License Suspended!");
    }
}
//Take a random speed above the speed limit
//Result will be the number of demerit points and status of licence if max allowable demerit points are exceeded
console.log(calculateSpeed(143));