function secondLargest(arr){
   let i = 0,
      j = 0;
   while (i < arr.length) {
      while (j < arr.length) {
         if(arr[j] > arr[j + 1]){
            let temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
         }      
         j++;
      }
      i++;
      j = 0;
   }
   return arr[arr.length-2];

}

console.log(secondLargest([54, 23, 11, 17, 10]));