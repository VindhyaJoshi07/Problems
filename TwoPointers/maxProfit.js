// O(n) | O(1)

const maxProfit = (prices) => {
    let buy = prices[0];
    prices[0] = 0;
    let profit = 0;


    for(let i = 1; i< prices.length; i++) {
        if(buy > prices[i]) {
            buy = prices[i];
            prices[i] = 0;
        }
        else {
            profit = Math.max(prices[i] - buy, profit);
        }
    }
    return profit;
}

// ---------------------- Approach - 2 --------------------------
// O(n2) | O(n)

const maxProfit1 = (prices) => {
    //difference between max from left and min from right
    let mxprof = 0;
    for(let i = 0; i < prices.length; i++) {
        for(let j = i+1; j < prices.length; j++) {
            mxprof = Math.max(mxprof, prices[j] - prices[i]);
        }
    }
    return mxprof;
}

// ------------------------ Approach - 3 ---------------------------
// O(n) | O(1)

const maxProfit2 = (prices) => {
    let maxProf = 0;
    let minVal = Infinity;
    for(let i = 0; i < prices.length; i++) {
        minVal = Math.min(minVal, prices[i]);
        maxProf = Math.max(mxprof, prices[i] - minVal);
    }

    return maxProf;
}