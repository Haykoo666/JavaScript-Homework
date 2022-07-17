function makeBox(num) {
   if (num === 5) {
     console.log(` 
     '#####'
     '#   #'
     '#   #'
     '#   #'
     '#####' 
   `);
   } else if (num === 3) {
     console.log(` 
      '###'
      '# #'
      '###'
   `);
   } else if (num === 2) {
     console.log(` 
      '##'
      '##'
   `);
   } else if (num === 1) {
     console.log(` '#' `);
   } else {
     return false;
   }
 }
 console.log(makeBox(1));
 
