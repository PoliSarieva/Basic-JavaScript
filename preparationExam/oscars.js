function expenses (input) {
    let hallRent = input[0];
    let statuettes = hallRent - (hallRent * 0.30);
    let catering = statuettes - (statuettes * 0.15);
    let voiceover = catering/2;

    let allSum =hallRent + statuettes + catering + voiceover;
    console.log(allSum);

}

expenses ([5555]);