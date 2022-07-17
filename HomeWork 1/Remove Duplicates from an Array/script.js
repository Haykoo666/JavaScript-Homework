function removeDups(arr){
   let i = 0,
       j = 1;
   while (i < arr.length) {
      while (j < arr.length) {
         if (arr[i] === arr[j]) {
            arr.splice(j, 1);
            j--;
         }   
         j++
      }  
      i++;
      j = i+1;
   }
   return arr;       

}
console.log(removeDups([1, 0, 1, 0]));