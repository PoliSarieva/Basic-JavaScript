function eggs (input) {
    let countEggs = input[0];
    let countRed = 0;
    let countOrange = 0;
    let countBlue = 0;
    let countGreen = 0;
    let maxEggs = 0;
    let color = "";

    for (let index = 1; index <= countEggs; index++) {
        let colorEgg = input[index];
 
        switch (colorEgg) {
            case "red":
                countRed++;
                break;
            case "orange":
                countOrange++;
                break;
            case "blue":
                countBlue++;
                break;
            case "green":
                countGreen++;
                break;
        }

        if (countRed > maxEggs) {
            maxEggs = countRed;
            color = "red";
        } else if (countOrange > maxEggs) {
            maxEggs = countOrange;
            color = "orange";
        } else if (countBlue > maxEggs) {
            maxEggs = countBlue;
            color = "blue";
        } else if (countGreen > maxEggs) {
            maxEggs = countGreen;
            color = "green";
        }
    }


        console.log(`Red eggs: ${countRed}`);
        console.log(`Orange eggs: ${countOrange}`);
        console.log(`Blue eggs: ${countBlue}`);
        console.log(`Green eggs: ${countGreen}`);
        console.log(`Max eggs: ${maxEggs} -> ${color}`);

}

eggs (["4","blue","red","blue","orange"]);