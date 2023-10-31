function makeChange(coins, amount) {
    // Sort coins in descending order
    coins.sort((a, b) => b - a); 
  
    let coinCount = 0;
    let remainingAmount = amount;
  
    for (const coin of coins) {
      while (remainingAmount >= coin) {
        remainingAmount -= coin;
        coinCount++;
      }
    }
  
    if (remainingAmount === 0) {
      return coinCount;
    } else {
      return -1; // Change can't be made with the given coins
    }
  }
  
  const availableCoins = [25, 10, 5, 1]; // Coin denominations (quarters, dimes, nickels, pennies)
  const amountToChange = 66; // Change amount in cents
  
  const minimumCoins = makeChange(availableCoins, amountToChange);
  
  if (minimumCoins !== -1) {
    console.log(`Minimum coins needed to make ${amountToChange} cents: ${minimumCoins}`);
  } else {
    console.log(`Can't make change for ${amountToChange} cents with the given coins.`);
  }
  