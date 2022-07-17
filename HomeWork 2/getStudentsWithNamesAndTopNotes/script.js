// debugger;
function getStudentsWithNamesAndTopNotes(person) {
   for (let i = 0; i < person.length; i++) {
      const max = Math.max(...person[i].notes);      
      person[i].notes = max;
   }
   return person;

}
console.log(getStudentsWithNamesAndTopNotes([{
    "name": "John",
    "notes": [3, 5, 4]
  },
  {
    "name": "Max",
    "notes": [1, 4, 6]
  },
  {
    "name": "Zygmund",
    "notes": [1, 2, 3]
  }
]))
