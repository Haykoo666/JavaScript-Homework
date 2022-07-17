function hackerSpeak(text) {
   let i = 0;
   const ARRAY = text.split("");
   while (i < ARRAY.length) {
      if (ARRAY[i] === "a") {
         ARRAY[i] = 4;
      }else if (ARRAY[i] === "e") {
         ARRAY[i] = 3;
      }else if (ARRAY[i] === "i") {
         ARRAY[i] = 1;
      }else if (ARRAY[i] === "o") {
         ARRAY[i] = 0;
      }else if (ARRAY[i] === "s") {
         ARRAY[i] = 5
      }
      
      i++;
   }
   return ARRAY.join("");
}


console.log(hackerSpeak("programming is fun"));
