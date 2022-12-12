function reading (input) {
    let i = 0;
    let word = input[i];
    

    while (word !== "Stop") {
        console.log(input[i]);


        i++;
        word = input[i];
    }

}

reading(["Nakov","SoftUni","Sofia","Bulgaria","SomeText","Stop","AfterStop","Europe","HelloWorld"])