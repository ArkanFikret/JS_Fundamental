function addAndSubtract(arr) {

    newArrey = [];
    sumOldArray = 0;
    sumNewArrey = 0;
    for (let index = 0; index < arr.length; index++) {

        let currentNumber = Number(arr[index]);
        sumOldArray += currentNumber;

        if (currentNumber % 2 === 0) {
            currentNumber += index;
        } else {
            currentNumber -= index;
        }
        
        sumNewArrey += currentNumber;
        newArrey.push(currentNumber);
       
    }

    console.log(newArrey);
    console.log(sumOldArray);
    console.log(sumNewArrey);
}

addAndSubtract([5, 15, 23, 56, 35])
