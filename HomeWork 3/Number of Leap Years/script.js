function numLeapYears(years) {
	let date_arr = years.split("-").map(elem => Number(elem));
   let result = 0;

   for (let i = date_arr[0]; i <= date_arr[1]; i++) {
      const leap = new Date(i, 1, 29).getDate() === 29;
      if (leap) {
         console.log(i + ' is a leap year');
         result++;
      } else {
         console.log(i + ' is not a leap year');
      }       
   }
   return result;
}
console.log(numLeapYears("2000-2020"));  
