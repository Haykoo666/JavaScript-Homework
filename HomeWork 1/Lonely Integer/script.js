function lonelyInteger(arr) {
   let i = 0;
   while(i < arr.length){
   let num = arr[i];
          i++;
   if(arr.includes(-arr[i])){
       continue;
   }
   else {
       return arr[i]
   }
}
}


console.log(lonelyInteger([-9, -105, -9, -9, -9, -9, 105]));