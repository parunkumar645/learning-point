//Map 
let numbers = [1, 2, 3, 4];
let squared = numbers.map(num => num * num);
// Result: [1, 4, 9, 16]
//Filter
let newNumber = [1, 2, 3, 4];
let evens = newNumber.filter(num => num % 2 == 0);
// Result: [2, 4]
//Reduce
let myNum = [1, 2, 3, 4];
let sum = myNum.reduce((acc, num) => acc + num, 0);
// Result: 10