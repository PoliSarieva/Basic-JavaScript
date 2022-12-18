function playDartc (input) {
    let name = input[0];
    let n = 1;
    let field = input[n];

    let startPoint = 301;
    let currentPoint = 0;
    let successfulHit = 0;
    let unsuccessfulHit = 0;


    while (field !== "Retire") {
        let point = Number(input[n+1]);

        if (field === "Single") {
            currentPoint = point;
        } else if (field === "Double") {
            currentPoint = point * 2;
        } else if (field === "Triple") {
            currentPoint = point * 3;
        }

        startPoint = startPoint - currentPoint;
        
        if (startPoint === 0) {
            successfulHit++;
            break;
        } 
        if (startPoint < 0) {
            startPoint = startPoint + currentPoint;
            unsuccessfulHit ++;
        } else {
            successfulHit++;
        }

        n = n + 2;
        field = input[n];
    }
    if (startPoint === 0) {
    console.log(`${name} won the leg with ${successfulHit} shots.`);
    } else {
        console.log(`${name} retired after ${unsuccessfulHit} unsuccessful shots.`);
    }

}

playDartc (["Rob Cross",
"Triple",
"20",
"Triple",
"20",
"Triple",
"20",
"Triple",
"20",
"Double",
"20",
"Triple",
"20",
"Double",
"5",
"Triple",
"10",
"Double",
"6",
"Retire"]);