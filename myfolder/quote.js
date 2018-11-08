function getMostProfitFromStockQuotes(quotes) {
  let expense = 0;
  let profit = [];

  for (let day = 0; day < quotes.length; day++) {
    if (day === 0) {
      profit.push(0);
      continue;
    }

    expense += quotes[day - 1];
    const income = (day) * quotes[day];
    const currentProfit = income - expense;

    profit.push(currentProfit);
  }
  return profit
  // return profit.sort((a,b)=>b-a)[0];
}

const quote = [1, 6, 5, 10, 8, 7];
console.log(getMostProfitFromStockQuotes(quote))
