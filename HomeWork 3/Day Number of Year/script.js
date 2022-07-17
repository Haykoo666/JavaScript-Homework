function dayOfYear(date) {
   let date_arr = date.split("/");
   if (date_arr[0] >12) {
      return false;
   }else if (date_arr[1] > 31) {
      return false;
   }else if(date_arr[2] > 2022){
      return false;
   }
   let result = 0;
   for (let i = 1; i < date_arr[0]; i++) {
      result += new Date(date_arr[2], i, 0).getDate()
   }
   result += Number(date_arr[1])
   return result
}
console.log(dayOfYear("3/1/2004"));