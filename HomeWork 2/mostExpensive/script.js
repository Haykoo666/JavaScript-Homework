function mostExpensive(obj) {
   let jewelry = "",
     price = 0;
   for (let [key, value] of Object.entries(obj)) {
 
     if (value > price) {
       price = value;
       jewelry = key;
     }
   }
   return `the most expensive one is the ${jewelry}`;
 }
 
 console.log(mostExpensive({
   "Silver Bracelet": 9280,
   "Gemstone Earrings": 180,
   "Diamond Ring": 3500
 }))
 