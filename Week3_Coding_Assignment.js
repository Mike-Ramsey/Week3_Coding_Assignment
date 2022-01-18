// Week 3 Coding Assignment by Mike Ramsey

// 1: create array of ages

let ages = [3, 9, 23, 64, 2, 8, 28, 93];

// 1a: subtract value of first element from value of last element without using ages[7], print result

console.log(ages[0] - ages[ages.length-1]);

// 1b: add a new age to array and repeat step

ages.push(45);

console.log(ages[0] - ages[ages.length-1]);

// 1c: create loop to iterate array and calculate average age. print result to console

let agesSum = 0;
for (let i = 0; i < ages.length; i++) {
        agesSum += ages[i];
}
console.log(agesSum / ages.length);

// 2: create an array of names

let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

// 2a: using a for loop iterate through array and calculate average number of letter per name

let nameSum = 0;
for (let i = 0; i < names.length; i++) {
    nameSum += names[i].length;
}
console.log(nameSum / names.length);

// 2b: using a for loop concatenate names together seperated by spaces, print result to console

let joinedNames = '';
for (let i = 0; i < names.length; i++) {
    joinedNames += (names[i] + ' ');
}
console.log(joinedNames);

// 3: How do you access the last element of any array?

// To access the last element, subtract 1 from the length property of the array: array[array.length-1]

// 4. How do you access the first element of any array?

// To access the first element you would use: array[0]

// 5. Create a new array called nameLengths.
// Create a loop to iterate over names array and add lengths of each name to nameLengths array.

let nameLengths = [];
for (let i=0; i < names.length; i++) {
    nameLengths.push(names[i].length);
}
console.log(nameLengths);

// 6. Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. 
// Print the result to the console.

let nameLengthSum = 0;
for (let i = 0; i < nameLengths.length; i++) {
    nameLengthSum += nameLengths[i];
}
console.log(nameLengthSum);

// 7. Write a function that takes two parameters, word and n, as arguments 
// and returns the word concatenated to itself n number of times. 

function concatWord(word, n) {
    let joinedWords = '';
    for (let i = 0; i < n; i++) {
        joinedWords += word;
    }
    console.log(joinedWords);
}
concatWord('Mike', 6);

// 8. Write a function that takes two parameters, firstName and lastName, 
// and returns a full name (the full name should be the first and the last name separated by a space).

function fullName(firstName, lastName) {
    console.log(firstName + ' ' + lastName);
}

fullName('Mike', 'Ramsey');

// 9. Write a function that takes an array of numbers and returns true if the sum of all the numbers in 
// the array is greater than 100.

let numbers = [10, 40, 28, 234, 334, 1, -2334]

function arraySum(numbers) {
    let numberSum = 0;
    for (let i = 0; i < numbers.length; i++) {
        numberSum += numbers[i];
    }
    console.log(numberSum > 100);
}

arraySum(numbers);

// 10. Write a function that takes an array of numbers and returns the average of all the elements in the array.

function numbersAverage(numbers) {
    let numberSum = 0;
    for (let i = 0; i < numbers.length; i++) {
        numberSum += numbers[i];
    }
    console.log (numberSum / numbers.length);
}

numbersAverage(numbers);

// 11. Write a function that takes two arrays of numbers and returns true if the average of the elements in the 
// first array is greater than the average of the elements in the second array.

let numbers1 = [100,200,300,400,500];
let numbers2 = [10,20,30,40,50];

function greaterAverage(numbers1, numbers2) {
    let numberSum1 = 0;
    let numberSum2 = 0;
    let numberAvg1 = 0;
    let numberAvg2 = 0;
    for (let i = 0; i < numbers1.length; i++) {
        numberSum1 += numbers1[i];
    }
    numberAvg1 = numberSum1 / numbers1.length;
    for (let i = 0; i < numbers2.length; i++) {
        numberSum2 += numbers2[i];
    }
    numberAvg2 = numberSum2 / numbers2.length;
    console.log(numberAvg1 > numberAvg2);
}

greaterAverage(numbers1, numbers2);

// 12. Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, 
// and returns true if it is hot outside and if moneyInPocket is greater than 10.50.

let isHotOutside = true;
let moneyInPocket = 10.51;

function willBuyDrink() {
    if (isHotOutside === true && moneyInPocket > 10.50) {
        console.log(true);
    }
}

willBuyDrink();

// 13. Create a function of your own that solves a problem. 
// In comments, write what the function does and why you created it.

// This function evaluates whether or not a variable quantity of new fish would fit into an existing fish tank. It uses the 1" of fish per
// gallon of tank general rule to compare max length of the new fish against stock level for the tank. It also checks to see if the fully grown fish
// has enough room to turn around. If either of those conditions fail it advises not to purchase the fish.

let fishTank = {
    depth: 12,
    volume: 20,
    currentStock: 6,
    tankName: '20g tank'
}

function newFish(quantity, maxLength) {
    if ((quantity * maxLength) > (fishTank.volume - fishTank.currentStock) || maxLength > fishTank.depth) {
        console.log('Sorry, but the fish will not fit in your ' + fishTank.tankName + '.');
    } else {
        console.log('Congrats, the fish will safely fit in your ' + fishTank.tankName + '!');
    }
}

newFish(1,12.5);