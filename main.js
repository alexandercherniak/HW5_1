dataA = {
  x: 10,
  name: 'Name',
  age: 20,
  isEqual: false,
  surnames: ["Ivanov", "Petrov", "Sidorov"],
  list_1: [1, 2, 3, 86, 43, "sample", true],
  list_2: [4, 5, 6, "original", 54, 23],
  };

dataB = {
  x: 115,
  name: 'Alex',
  fruits: ["Apple", "Peach", "Grape", "Orange"],
  age: 30,
  isEqual: true,
  list_1: [7, 8, 9, 91, "next", true, 88],
  list_2: [89, "Alex", 12, false, "end"],
  };

console.log(dataA);
console.log(dataB);

allArrays = [];
for (let key in dataA) {
  if (Array.isArray(dataA[key])) {
    allArrays = allArrays.concat(dataA[key]); 
    } 
  } 

for (let key in dataB) {
  if (Array.isArray(dataB[key])) {
    allArrays = allArrays.concat(dataB[key]); 
  }
} 

console.log(allArrays);

sum = 0;
for (let key in allArrays) {
  if (typeof allArrays[key] == 'number') {
    sum += allArrays[key];
  }
}
console.log(sum);







// v_2
// arraysDataA = Object.values(dataA).filter(item => Array.isArray(item));
// arraysDataB = Object.values(dataB).filter(item => Array.isArray(item));
// arrays = arraysDataA.concat(arraysDataB); 
// allArrays = [].concat.apply([], arrays);
// console.log (allArrays);

// sum = 0;
// for (i = 0; i <= allArrays.length; i++) {
//   if (typeof allArrays[i] == "number") {
//   sum += allArrays[i];
//   }
// }
// console.log(sum)

