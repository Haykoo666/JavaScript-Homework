function findBrokenKeys(phrase, typed_phrase) {
   let brokenkey = []
   for (let i = 0; i < phrase.length; i++) {
     if (phrase[i] != typed_phrase[i]) {
       if (brokenkey.includes(phrase[i])) {
         continue;
       } else {
         brokenkey.push(phrase[i]);
       }
     }
   }
   return brokenkey;
 
 }
 
 console.log(findBrokenKeys("beethoven", "affthoif5"));
 