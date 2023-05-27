function mergeArrays(firstArrey, secondArrey){
    
    resultArrey= [];

    for(let index = 0; index < firstArrey.length; index++){

        if(index % 2 === 0){
            resultArrey[index] = Number(firstArrey[index]) + Number(secondArrey[index]);
        }else{
            resultArrey[index] = firstArrey[index] + secondArrey[index];
        }
    }
    console.log(resultArrey.join(" - "));
}

mergeArrays(['5', '15', '23', '56', '35'], ['17', '22', '87', '36', '11'])