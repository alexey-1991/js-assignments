function getMostProfitFromStockQuotes(quotes) {
  let income = 0;
  let profit = [];

  for (let day = 0; day < quotes.length; day++) {
    if (day === 0) {
      profit.push(0);
      continue;
    }

    income += quotes[day - 1];
    const expense = (day) * quotes[day];
    const currentProfit = expense - income;

    profit.push(currentProfit);
  }
  return profit
  // return profit.sort((a,b)=>b-a)[0];
}

const quote = [1, 20, 1, 30, 1, 40, 1, 50, 1, 40, 1, 30, 1, 20, 1];
console.log(getMostProfitFromStockQuotes(quote))
