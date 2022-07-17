function countTrue(arr){
   let i = 0,
       isTrue = 0,
       isFalse = 0;
   while(i < arr.length){
      if (arr[i] === true) {
         isTrue++;
      }else{
         isFalse++;
      }
      i++;
      if (arr.length === 0 || isFalse === arr.length) {
         return 0;
      }
   }
   return isTrue;

}

console.log(countTrue([false, false, false,true,true]));
