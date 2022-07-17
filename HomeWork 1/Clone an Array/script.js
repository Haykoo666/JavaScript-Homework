
function clone(arr) {
   let x = arr;
   x.push([...arr]);
   return x;
}
console.log(clone(["x", "y"])); 