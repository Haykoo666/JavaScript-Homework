function sumTwoSmallestNums(arr) {
   let i = 0,
      j = 0;
   while (i < arr.length) {
      while (j < arr.length) {
         if (arr[j] > arr[j + 1]) {
            let temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
         }
         j++;
      }
      i++;
      j = 0;
   }
      while (j < arr.length) {
         if (arr[j] <= -1) {
            j++;
         } else {
            return arr[j] + arr[j + 1];
         }
      }
      
}

console.log(sumTwoSmallestNums([3683, 2902, 3951, -475, 1617, -2385]));
