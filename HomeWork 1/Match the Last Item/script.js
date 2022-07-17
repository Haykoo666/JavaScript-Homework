function matchLastItem (arr){
   let result = "";
   let i = 0;
   while (i < arr.length-1) {
      result += arr[i];
      i++
   }
   console.log(result)
   if(arr[arr.length-1] === result){
      return true;
   }else
      return false;
}

console.log(matchLastItem([8, "thunder", true, "8thundertrue"]));
