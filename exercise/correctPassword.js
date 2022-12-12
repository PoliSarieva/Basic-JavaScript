function inputPassword (input) {
    let username = input[0];
    let password = input[1];

    let data = input[2];
    let index = 3;
    

    while(password !== data) {
        index++;
        data = input[index];
    }

    console.log(`Welcome ${username}!`);
    console.log(kofk);
}

inputPassword(["Nakov","1234","Pass","1324","1234"]);