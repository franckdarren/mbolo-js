// Tableau des 10 premiers nombres entiers
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Faire la somme des 10 premiers nombres entiers
let initialValue = 0;
let sum = numbers.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue
);

console.log(sum);
