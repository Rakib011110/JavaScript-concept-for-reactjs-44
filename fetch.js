
//  JSON 

const student = {
    name: 'Salib Khan',
    age: 32,
    movies: ['king khan', 'Dhakar Mastan']
}


const studentJson = JSON.stringify(student)
// console.log(studentJson);
const studentObject = JSON.parse(studentJson)
// console.log(studentObject);

// 2. fetch
// fetch('url')
//     .then(res => res.json())
//     .then(data => console.log(data));


const keys = Object.keys(student);
const values = Object.values(student);
console.log(keys, values);


// for 
const numbers = [23, 54, 67, 87, 23, 78];
numbers.forEach(num => console.log(num));
numbers.map(num => num * 2);

// for of on array like object
// loop on an object using for in  


// add or remove from an array
const products = [
    { name: 'laptop', price: 3200, brand: 'len', color: 'silver' },
    { name: 'phone', price: 7000, brand: 'HTC', color: 'golden' },
    { name: 'watch', price: 3000, brand: 'casio', color: 'yellow' },
    { name: 'sungalss', price: 300, brand: 'ray', color: 'black' },
    { name: 'camera', price: 9000, brand: 'canon', color: 'gray' }
];


const newProduct = { name: 'webcam', price: 700, brand: 'Lal' };

// copy products array and then add newProduct 

const newProducts = [...products, newProduct]

// create a new array without one specific item 
// remove phone means create a new array without the phone 

const remaining = products.filter(p => p.name !== "phone")