function decoration (input) {
    let countClient = input[0];
    
    let price = 0;
    let totalPrice = 0;
    let client = 1;
    let index = 0;

    while (client <= countClient) {
        index += 1;
        let purchase = input[index];
        let currentPrice = 0;
        let countProduct = 0;

        
        while (purchase !== "Finish") {
            countProduct ++;
            switch (purchase) {
                case "basket":
                    price = 1.50;
                    break;
                case "wreath":
                    price = 3.80;
                    break;
                case "chocolate bunny":
                    price = 7;
                    break;
            }

            currentPrice += price;

            index++;
            purchase = input[index]; 
        }

        if (countProduct % 2 === 0) {
            currentPrice = currentPrice - (currentPrice * 0.2);
        }

        totalPrice += currentPrice;
        console.log(`You purchased ${countProduct} items for ${currentPrice.toFixed(2)} leva.`);

        client++;
    }

    totalPrice = totalPrice / countClient;
    console.log(`Average bill per client is: ${totalPrice.toFixed(2)} leva.`);

}

decoration (["2","basket","wreath","chocolate bunny","Finish","wreath","chocolate bunny","Finish"]);