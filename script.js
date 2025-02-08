const myArray = ["Car", "Bike", "Bus", "Train", "Airplane"];
console.log("Initial array:", myArray);

const firstElement = myArray[0];
const lastElement = myArray[myArray.length - 1];
const middleElement = myArray[Math.floor(myArray.length / 2)];

console.log("First Element:", firstElement);
console.log("Last Element:", lastElement);
console.log("Middle Element:", middleElement);

console.log("Array Length:", myArray.length);

myArray.push("Boat");
console.log("After push:", myArray);

myArray.pop();
console.log("After pop:", myArray);

myArray.unshift("Scooter");
console.log("After unshift:", myArray);

myArray.shift();  
console.log("After shift:", myArray);

myArray.splice(2, 1, "Truck"); // Replace the third element
console.log("After splice:", myArray);


console.log("Using for loop:");
for (let i = 0; i < myArray.length; i++) {
  console.log(myArray[i]);
}

console.log("Using forEach:");
myArray.forEach(item => console.log(item));


const [first, second, ...rest] = myArray;
console.log("First:", first);
console.log("Second:", second);
console.log("Rest of the elements:", rest);
