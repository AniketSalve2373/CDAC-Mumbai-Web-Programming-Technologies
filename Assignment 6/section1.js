// 1. Shopping cart using let, const, var

var itemName = "Laptop";
let price = 50000;
const taxRate = 0.18;

let totalPrice = price + (price * taxRate);
console.log("Total Price:", totalPrice);


// 2. Area of rectangle

function areaRectangle(length, width) {
    return length * width;
}

const areaArrow = (length, width) => length * width;

console.log(areaRectangle(10, 5));
console.log(areaArrow(10, 5));


// 3. Object for book

const book = {
    title: "JavaScript Basics",
    author: "Aniket",
    year: 2026
};

function displayDetails() {
    console.log(book.title, book.author, book.year);
}

displayDetails();


// 4. Object destructuring

const car = {
    brand: "BMW",
    model: "X5",
    year: 2024
};

const { brand, model, year } = car;
console.log(brand, model, year);


// 5. Array destructuring

const numbers = [10, 20, 30, 40];
const [first, second] = numbers;
console.log(first, second);


// 6. map() lengths of names

const names = ["Aniket", "Rahul", "Om"];
const lengths = names.map(name => name.length);
console.log(lengths);


// 7. filter() even numbers

const nums = [1,2,3,4,5,6,7,8];
const evenNums = nums.filter(num => num % 2 === 0);
console.log(evenNums);


// 8. reduce() total price

const prices = [100, 200, 300];
const total = prices.reduce((sum, price) => sum + price, 0);
console.log(total);


// 9. Rest operator sum

function sum(...args) {
    return args.reduce((total, num) => total + num, 0);
}

console.log(sum(1,2,3,4,5));


// 10. Spread operator merge arrays

const fruits1 = ["Apple", "Banana"];
const fruits2 = ["Mango", "Orange"];

const allFruits = [...fruits1, ...fruits2];
console.log(allFruits);


// 11. Callback after delay

function executeAfterDelay(callback) {
    setTimeout(callback, 2000);
}

executeAfterDelay(() => {
    console.log("Executed after 2 sec");
});


// 12. Promise resolves after 3 sec

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise Resolved");
    }, 3000);
});

myPromise.then(result => console.log(result));


// 13. Closure example

function outer() {
    let count = 0;

    return function () {
        count++;
        console.log(count);
    };
}

const counter = outer();
counter();
counter();
counter();


// 14. Async/Await API fetch

async function fetchData() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const data = await response.json();
    console.log(data);
}

fetchData();


// 15. filter + map + reduce

const arr = [1,2,3,4,5,6];

const result = arr
.filter(num => num % 2 === 0)
.map(num => num * 2)
.reduce((sum, num) => sum + num, 0);

console.log(result);