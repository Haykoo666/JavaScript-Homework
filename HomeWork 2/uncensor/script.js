function uncensor(text, part_of_text) {
   let x = text.split("")
     const arr = part_of_text.split("");
     for (let i = 0; i < x.length; i++) {
       if (x[i] === "*") {
         x[i] = arr.shift();
       }
     }
     return x.join("");
   
   }
   
   console.log(uncensor("*PP*RC*S*", "UEAE"));
   

   // function uncensor(text, part_of_text) {
   //    const arr = part_of_text.split("");
   //    for (let i = 0; i < text.length; i++) {
   //      if (text[i] === "*") {
   //        text[i] = arr.shift();
   //      }
   //    }
   //    return text;
    
   //  }
    
   //  console.log(uncensor("Wh*r* d*d my v*w*ls g*?", "eeioeo"));
    
