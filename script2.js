function calculateSpeed(Speed){
    let maxSpeed=150;
    let speedLimit = 70;
    let demeritPoints=0;

    if(Speed<speedLimit){
        console.log("Ok");
    }else{
        demeritPoints=Math.floor((Speed-speedLimit)/5);
        console.log(`Points: ${demeritPoints}`);

    }if(demeritPoints>12){
        console.log("License Suspended!");
    }
}console.log(calculateSpeed(143));