export const amountCostCrackers = (arr) => { 
    let totalCost = 0;
    if(arr.length) {
        arr.map(item => totalCost = totalCost + +item.cost)
        return totalCost;
    } else {
        return totalCost;
    }
  };