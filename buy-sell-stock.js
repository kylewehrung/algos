// best time to buy and sell stock
let prices = [7,1,5,3,6,4]

let minny = 0; // Buy
let maxxy = 1; // sell
let maxProfit = 0;

while (maxxy < prices.length) {
  if (prices[minny] < prices[maxxy]) {
    let profit = prices[maxxy] - prices[minny]; // current profit

    maxProfit = Math.max(maxProfit, profit);
  } else {
    minny = maxxy;
  }
  maxxy++;
}
console.log(maxProfit)
