function findNaN(arr) {
   let i = 0;
   while (i < arr.length) {
      if (arr.icludes(NaN)) {
         return i;
      }
      i++;
   }
   return -1;
}

console.log(findNaN([ 1, 2, 3, 4,NaN]));