function sumDigits(number){
    let inputAsString = number.toString();
    let sumOfDigits = 0;

    for(let i = 0 ; i < inputAsString.length ; i++){
        let currentOfDigits = Number(inputAsString[i]);
        sumOfDigits += currentOfDigits; 
    }
    console.log(sumOfDigits)
}

sumDigits(245678)