function getDays(date_1, date_2) {
   let convert = date_1.getTime() - date_2.getTime();
   let diference = String(Math.ceil(convert / (1000 * 3600 * 24)));

   return diference.includes("-") ? diference.slice(1) : diference;
}
console.log(getDays(
   new Date("July 20, 2019"),
   new Date("July 30, 2019")
 ));