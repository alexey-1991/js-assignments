function getMostProfitFromStockQuotes(quotes) {
    let profit=0;

    while(quotes.length){

      const maxQuote=Math.max(...quotes);
      const maxQuoteIndex=quotes.indexOf(maxQuote);
      const income=maxQuote*maxQuoteIndex;
      const expense=quotes.slice(0,maxQuoteIndex).reduce((acc,elem)=>{
          return acc+elem;
      },0);
      profit+=income-expense;

      quotes=quotes.slice(maxQuoteIndex+1);
    }

    return profit;
}


const quote=[31, 312, 3, 35, 33, 3, 44, 123, 126, 2, 4, 1];

console.log(getMostProfitFromStockQuotes(quote))
