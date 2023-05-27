function commonElements(firstArrey, secondArrey) {

    for (let i = 0; i < firstArrey.length; i++) {
        let currentNumber = firstArrey[i]

        if(secondArrey.includes(currentNumber)){
            console.log(currentNumber)
        }
        
    }

}

commonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'],
    ['Petar', 10, 'hey', 4, 'hello', '2'])
