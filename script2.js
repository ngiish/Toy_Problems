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
}console.log(calculateSpeed(143));