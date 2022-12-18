function dayLong (input) {
    let timePicture = input[0];
    let countScenes = input[1];
    let timeScene = input[2];

    let terrain = timePicture * 15 / 100;
    let timeTakePicture = countScenes * timeScene;
    let allTime = terrain + timeTakePicture;

    if (timePicture >= allTime) {
        let leftTime = (timePicture - allTime).toFixed(0);
        console.log(`You managed to finish the movie on time! You have ${leftTime} minutes left!`);
    } else {
        let enoughtTime = (allTime - timePicture).toFixed(0);
        console.log(`Time is up! To complete the movie you need ${enoughtTime} minutes.`);
    }

}

dayLong (["60", "15", "3"]);