// variables and data types in javascript
// let const var
// number string boolean undefined null symbol
// let name = 'john';
// let score = 100;
// let bonus = 20;
// let total = score + bonus;
// console.log(total);
// boolean
// let paidUser = true;
//undefined
// let name;
// console.log(name);
// null
// let name = null;
// console.log(name);
// Array
// let names = ['john', 'bob', 'alice'];
// console.log(names);
//object
// let person = {
//     name: 'john',
//     age: 30
// }
// console.log(person);

//Operators in javascript
// Arrthimetic operators
// let a = 100;
// let b = 20;
// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);
// console.log(a%b);
// console.log(a**b);
// console.log(a++);
// console.log(a--);
//assignment operators
// let a = 100;
// let b = 20;
// a += b;
// console.log(a);
// a -= b;
// console.log(a);
//logical operators
// let x = true;
// let y = false;
// console.log(x && y);
// console.log(x || y);
// console.log(!x);
//comparison operators
// let a = 100;
// let b = 20;
// console.log(a == b);
// console.log(a != b);
// console.log(a > b);
// console.log(a < b);
// console.log(a >= b);
// console.log(a <= b);
//console.log(a === b);
//logical operators
// let x = true;
// let y = false;
// console.log(x && y);
// console.log(x || y);
// console.log(!x);
//String
// let name = 'john';
// let age = 30;
// console.log('my name is '+name+' and my age is '+age);
// console.log(`my name is ${name} and my age is ${age}`);
//String methods
// let name = 'john';
// console.log(name.length);
// console.log(name.toLowerCase());
// console.log(name.toUpperCase());
// console.log(name.charAt(2));
// console.log(name.indexOf('o'));
// console.log(name.lastIndexOf('o'));
// console.log(name.startsWith('j'));
// console.log(name.endsWith('n'));
// console.log(name.includes('o'));
// console.log(name.substring(0,2));
// console.log(name.slice(0,2));
// console.log(name.split('o'));
// console.log(name.replace('j','m'));
//Array
// let names = ['john', 'bob', 'alice'];
// console.log(names);
// console.log(names.length);
// console.log(names[0]);
// console.log(names.indexOf('bob'));
// console.log(names.includes('bob'));
// console.log(names.push('mike'));
// console.log(names.pop());
// console.log(names.shift());
// console.log(names.unshift('mike'));
// console.log(names.slice(0,2));
// console.log(names.splice(0,2));
// console.log(names.reverse());
// console.log(names.concat(['jane','mary']));
// Functions in javascript
// function sayHello(){
//     console.log('hello');
// }
// sayHello();
// function sayHello(name){
//     console.log('hello '+name);  
// }
// sayHello('john');
// function sayHello(name='john'){
//     console.log('hello '+name);
// }
// sayHello();
// function add(a,b){
//     return a+b;
// }
// console.log(add(10,20));
// Anonymous function - function without name (Es6)
// let add = function(a,b){
//     return a+b;
// }
// console.log(add(10,20));
// Arrow function (Es6)
// let add = (a,b)=>{
//     return a+b;
// }
// console.log(add(10,20));
// Arrow function (Es6) - single line
// let add = (a,b)=>a+b;
// console.log(add(10,20));
//object
// let person = {
//     name: 'john',
//     age: 30
// }
// console.log(person);
// console.log(person.name);
// console.log(person.age);
// console.log(person['name']);
// console.log(person['age']);
// person.name = 'bob';
// console.log(person);
// object methods
// let person = {
//     name: 'john',
//     age: 30,
//     greet: function(){
//         console.log('hello');
//     }
// }
// person.greet();
// Conditional statements
//if and else
// let age = 30;
// if(age>18){
//     console.log('you can vote');
// }
// else{
//     console.log('you cannot vote');
// }
//if else if
// let age = 30;
// if(age>18){
//     console.log('you can vote');
// }
// else if(age==18){
//     console.log('you are 18');
// }
// else{
//     console.log('you cannot vote');
// }
//Ternary operator
// let age = 30;
// let canVote = age>18 ? 'yes' : 'no';
// console.log(canVote);
//Switch
// let age = 30;
// switch(age){
//     case 18:
//         console.log('you are 18');
//         break;
//     case 30:
//         console.log('you are 30');
//         break;
//     default:
//         console.log('you are unknown');
// }
// Loops
// for loop
// for(let i=0;i<5;i++){
//     console.log(i);
// }
// for-loop with array
// let names = ['john', 'bob', 'alice'];
// for(let i=0;i<names.length;i++){
//     console.log(names[i]);
// }
// while loop
// let i=0;
// while(i<5){
//     console.log(i);
//     i++;
// }
// do while loop
// let i=0;
// do{
//     console.log(i);
//     i++;
// }while(i<5);
//Break and continue
// for(let i=0;i<5;i++){
//     if(i==3){
//         break;
//     }
//     console.log(i);
// }
// for(let i=0;i<5;i++){
//     if(i==3){
//         continue;
//     }
//     console.log(i);
// }
//Map 
//let numbers = [1, 2, 3, 4];
//let squared = numbers.map(num => num * num);
// Result: [1, 4, 9, 16]
//Filter
//let numbers = [1, 2, 3, 4];
//let evens = numbers.filter(num => num % 2 == 0);
// Result: [2, 4]
//Reduce
//let numbers = [1, 2, 3, 4];
//let sum = numbers.reduce((acc, num) => acc + num, 0);
// Result: 10
//Callbacks
// function greet(name, callback) {
//     console.log('Hello ' + name);
//     callback();  
// }
// function callMe() {
//     console.log('I am callback function');
// }
// greet('John', callMe);









