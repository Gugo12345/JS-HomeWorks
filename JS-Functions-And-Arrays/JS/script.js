// Տրված է թվերի զանգված։ Ստեղծիր նոր զանգված՝ ամեն թիվը քառակուսի բարձրացրած։

// Անունների զանգվածից ստացիր դրանց երկարությունների զանգված։

// Ֆիլտրիր բոլոր բացասական թվերը։

// Ֆիլտրիր 5 տառից երկար բառերը։

// Հաշվիր զանգվածի բոլոր թվերի գումարը և միջինը՝ reduce-ով։

// Գտիր առաջին թիվը, որը 100-ից մեծ է։ Եթե չկա — տպիր «Չգտնվեց»։

// Ստուգիր՝ բոլո՞ր բառերն են սկսվում մեծատառով (every)։

// Դասավորիր թվերի զանգվածը նվազման կարգով՝ առանց բնօրինակը փոխելու։ Ապացուցիր՝ տպելով երկուսն էլ։

// Օգտագործիր դասարանական products զանգվածը․ գտիր չառկա ապրանքների անունները և դրանց ընդհանուր արժեքը։

// Մեկ շղթայով․ վերցրու գնահատականները, թող միայն 14-ից բարձրերը, ամեն մեկին ավելացրու 1, դասավորիր նվազման կարգով և վերածիր տողի՝ ", " բաժանարարով։

let numbers = [
    {num: 12},
    {num: 13},
    {num: 66},
    {num: 7},
    {num: 44},
    {num: 122},
    {num: -40},
    {num: -54},
    {num: -29},
];

let squaers = numbers.map(cube => cube.num ** 2);
console.log(squaers);


let names = [
    {name: "Gago"},
    {name: "Poxos"},
    {name: "Mardamek"},
    {name:"Petros"},
    {name: "Martiros"},
];

let length = names.map(name => name.name.length);
console.log(length);


let negative = numbers.filter(negativity => negativity.num < 0);
console.log(negative);

let letters = names.filter(letter => letter.name.length > 5);
console.log(letters);


let summary = numbers.reduce((sum, plus) => sum + plus.num, 0);
console.log(summary);
let avarage = summary / numbers.length;

let found = numbers.find(item => item.num > 100);
let first = found ? found.num : "Չգտնվեց";
console.log(first);

let capital = names.every(item => item.name.length > 0 && item.name[0] === item.name[0].toUpperCase());
console.log(capital);

let down = [...numbers].sort((a, b) => a.num - b.num);
let up = [...numbers].sort((a, b) => b.num - a.num);
console.log(down);
console.log(up);
console.log(numbers);


const products = [
  { name: "Նոութբուք",  price: 450000, inStock: true  },
  { name: "Մկնիկ",      price: 8000,   inStock: true  },
  { name: "Ստեղնաշար",  price: 25000,  inStock: false },
  { name: "Մոնիտոր",    price: 120000, inStock: true  },
  { name: "Ականջակալ",  price: 15000,  inStock: false }
];

const notInStock = products.filter(item => !item.inStock);
const unavailableNames = notInStock.map(item => item.name);
const total = notInStock.reduce((sum, item) => sum + item.price, 0);

console.log(unavailableNames);
console.log(total);

const grades = [
    {num: 10},
    {num: 13},
    {num: 14},
    {num: 15},
    {num: 20},
    {num: 19},
    {num: 17},

];

let chain = [...grades].filter(upper => upper.num > 14).map(plus => plus.num + 1).sort((a, b) => b - a).join(", ");
console.log(chain);



