let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let combinedArray=arr1.concat(arr2);
console.log(combinedArray);
ans:[1, 2, 3, 4, 5, 6]

2.
let names1 = ["Alice", "Bob"];
let names2 = ["Charlie", "David"];
let names3 = ["Eve", "Frank"];
let allNames = names1.concat(names2, names3);
console.log(allNames);
ans=["Alice", "Bob", "Charlie", "David", "Eve", "Frank"]

3.
let arr3 = [true, false].concat(["Yes", "No"], [1, 2, 3]);
console.log(arr3);
ans:[true, false, "Yes", "No", 1, 2, 3]

4.
let numbers = [10, 20, 30, 40, 50];
numbers.copyWithin(0, 3);
console.log(numbers);
ans:[40, 50, 30, 40, 50]

5.
let fruits = ["apple", "banana", "cherry", "date", "elderberry"];
fruits.copyWithin(1, 3, 5);
console.log(fruits);
ans=["apple", "date", "elderberry", "date", "elderberry"]

6.
let arr = [1, 2, 3, 4, 5, 6];
arr.copyWithin(0, 2);
console.log(arr);
ans:[3, 4, 5, 6, 5, 6]

7.
let numbers7 = [2, 4, 6, 8, 10];
let allEven = numbers7.every(num => num % 2 === 0);
console.log(allEven);
ans:true

8.
let words = ["apple", "banana", "avocado"];
let result = words.every(word => word.startsWith("a"));
console.log(result);
ans:true

9.
function allPositive(arr) {
  return arr.every(num => num > 0);
}
let positiveNumbers = [1, 2, 3, 4];
let negativeNumbers = [1, -2, 3];
console.log(allPositive(positiveNumbers));
console.log(allPositive(negativeNumbers));

10.
let arr = [1, 2, 3, 4, 5];
arr10.fill(0);
console.log(arr);
ans:[0, 0, 0, 0, 0]

11.
let arr = ["A", "B", "C", "D", "E"];
arr11.fill("X", 1, 4);
console.log(arr11);
ans:["A", "X", "X", "X", "E"]

12.
let status = ["pending", "pending", "pending", "pending", "pending"];
status.fill("done", status.length - 3);
console.log(status);
ans:["pending", "pending", "done", "done", "done"]