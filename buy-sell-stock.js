// best time to buy and sell stock
let prices = [7,1,5,3,6,4]

let minny = 0; // Buy
let maxxy = 1; // sell
let maxProfit = 0;

//Sliding window technique, two pointers move based on buy/sell logic
while (maxxy < prices.length) {
  //If left-pointer element is less than the right-pointer element:
  if (prices[minny] < prices[maxxy]) {
    //Create variable 'profit' that equals the right-pointer element subtracting the left-pointer element
    let profit = prices[maxxy] - prices[minny]; // current profit
    //Continually update 'profit', if it's the highest numher it'll be stored as 'maxProfit'
    maxProfit = Math.max(maxProfit, profit);

  } else {
    minny = maxxy; //Move left-pointer to right-pointer number
  }
  maxxy++; //Iterate right-pointer to the next element by adding 1
}
console.log(maxProfit)
