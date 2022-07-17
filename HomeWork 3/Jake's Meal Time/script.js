function timeToEat(time) {
   let date_arr = time.split(" ");
   let arr = date_arr[0].split(":").map(elem => Number(elem));
   return check_time(arr);
}

function check_time (arr_time) {
   let result = [];
   if (arr_time[0] < 12) {
      if (arr_time[0] >= 7) {
         if (arr_time[1] > 0) {
            result.push(12 - arr_time[0] - 1);
            result.push(60 - arr_time[1]);
            return result;
         } else {
            result.push(12 - arr_time[0]);
            result.push(arr_time[1]);
            return result;
         }
      }else if (arr_time[1] > 0) {
         result.push(7 - arr_time[0] - 1)
         result.push(60 - arr_time[1]);
         return result;
      } else {
         result.push(7 - arr_time[0])
         result.push(arr_time[1]);
         return result;
      }
   }
}

console.log(timeToEat("2:00 p.m."));
