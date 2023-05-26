function calculateSpice(startingYield) {
    const minimumYield = 100;
    let days = 0;
    let totalSpice = 0;
  
    while (startingYield >= minimumYield) {
      totalSpice += startingYield;
      totalSpice -= 26; 
  
      startingYield -= 10; 
      if (totalSpice < 0) {
        totalSpice = 0; 
      }
  
      days++;
    }
  
    if (totalSpice >= 26) {
      totalSpice -= 26; 
    }
  
    console.log(days);
    console.log(totalSpice);
  }
  
  calculateSpice(111)