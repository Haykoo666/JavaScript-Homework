function threeDaysAgo(date) {
   let x = new Date(2000, 11, 4).getTime() - new Date(2000, 11, 1).getTime();
   return new Date(date.getTime() - x).toLocaleDateString();
}
console.log(threeDaysAgo(new Date(2018, 0, 1)));

