function itemsPurchased(price_tag, wallet) {
   let result = [];
   for (let [key, value] of Object.entries(price_tag)) {
     if (+wallet.slice(1) >= +value.slice(1)) {
       result.push(key)
     }
     if (result.length === 0) {
       return "nothing";
     }
   }
   return result;
 }
 console.log(itemsPurchased({
   Water: "$1",
   Bread: "$3",
   TV: "$1,000",
   Fertilizer: "$20"
 }, "$300"))
 
