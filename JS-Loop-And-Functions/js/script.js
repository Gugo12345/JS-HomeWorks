//ANCAC TNAYIN

//---------------------------------------------

//EXC 1.

// for(let i = 1; i <= 20; i++){
//     console.log(i);
// }

//---------------------------------------------

//EXC 2.

// let a = 5;

// for(let i = 100; i >= 0; i--){
//     if(i === 5 || i % 5 === 0 || i === 0){
//         console.log(i);
        
//     }
    
// }

//---------------------------------------------

// EXC 3.

// let number1 = Number(prompt("Choose the number!"));

// let sum = 1;
// for(let i = number1; i > 0; i--){
//     sum*=i;
// }
// console.log(sum);

//---------------------------------------------

//EXC 4. 

// let temp = "";

// for(let i = 1; i <= 5; i++){

//     temp+="*";
//     console.log(temp);
    
// }

//---------------------------------------------

//EXC 5.

// for(i = 2; i <=50; i++){
//     let isPrime = true;
//     for(let j = 2; j < i; j++){
//         if(i % j === 0){
//             isPrime = false;
//             break;
//         }
//     }

//     if(isPrime){
//         console.log(i);

//     }else{
//         console.log(`${i} not Prime`);
//     }
// }

//---------------------------------------------

//EXC 6.

// let num = Number(prompt("Choose your number"));
// let count = 0;

// if (num === 0) {
//     count = 1;
// } else {
//     while (num > 0) {
//         num = Math.floor(num / 10); 
//         count++; 
//     }
// }

// console.log(count);

//---------------------------------------------

//EXC 7.

// let temp = "■ ";
// let temp2 = "";

// for(let i = 1; i <= 25; i++){
//     temp2+=temp;

//     if(i % 5 === 0){
//         temp2 += "\n"
        
//     }

// }console.log(temp2);

//---------------------------------------------

//EXC 8.

// let randomNumber = Number(prompt("Find my number 1 - 100!"));

// let secretNumber = 13;

// while(randomNumber != secretNumber){
    
//     if(randomNumber < 13 && randomNumber > 1){
//     console.log("Its Hot!");
//     randomNumber = Number(prompt("ANOTHER CHANCE ITS HOT!")); 
//     }else if(randomNumber > 13 && randomNumber < 23){
//         console.log("Its Hot!");
//         randomNumber = Number(prompt("ANOTHER CHANCE ITS HOT!"));  
//     }else{
//         console.log("Its Cold!");
//         randomNumber = Number(prompt("ANOTHER CHANCE ITS COLD"));
//     }
// }

// console.log(`You Win it's actually ${secretNumber}!`);

//---------------------------------------------
//---------------------------------------------
//---------------------------------------------
//

// esorva HOMWORK 2

// function getSum(a, b){
//     let result = a + b;
//     console.log(result);
    
// }

// getSum(5, 7);

//---------------------------------------------


// function getRectangleArea(w, h){
//     let result = w * h;
//     console.log(result);
//     if(w === null && h === null || w === null || h === null){
//         console.log("erorr!")
//     }
    
// }

// getRectangleArea(2);

//---------------------------------------------


// let n = prompt("Choose a number!")

// function isPositive(n){
//     if(n % 2 === 0){
//         n = true;
//     }else{
//         n = false;
//     }

//     console.log(n);
// }

// isPositive(n);

//---------------------------------------------


// function maxOfThree(a, b, c){
//     if(a > b && a > c){
//         console.log(`${a} the First is the bigest!`)
//     }else if(b > a && b > c){
//         console.log(`${b} the Second is the bigest!`)
//     }else{
//         console.log(`${c} the Third is the bigest!`)
//     }
// }

// maxOfThree(6,7,67);

//---------------------------------------------


// function celsiusToFahrenheit(c){
//     faringate = (c * 9) / (5 + 32)
//     console.log(faringate);
// }

// let faringate = prompt("Choose your Celsius and I change it to fahrenheit!");

// celsiusToFahrenheit(faringate);


//---------------------------------------------


// function getGrade(mark){
//     if(mark === 1 || mark === 0 || mark === 2){
//         console.log("Its Bad Its F!");
//     }else if(mark === 3){
//         console.log("Not so bad like F its about C!")
//     }else if(mark === 4){
//         console.log("Its good it is B@")
//     }else if(mark === 5){
//         console.log("Its awesome! it is A!")
//     }return;
// }

// getGrade(5);

//---------------------------------------------


// let number1 = prompt("Choose the number!");

// let currentNumber = Number(number1);


// function max(number){
//     let sum = 0;
//     for(let i = number; i > 0; i--){
//         sum+=i;
//     }
//     console.log(sum);
   
// }

// max(currentNumber);


//---------------------------------------------


// let num = Number(prompt("Choose your number"));

// function countDigits(n){
//     let count = 0;
//     if (n === 0) {
//     count = 1;
//     } else {
//         while (n > 0) {
//             n = Math.floor(n / 10); 
//             count++; 
//         }
//     }console.log(count);
// }

// countDigits(num);

//---------------------------------------------


// function isPrime(num) {
//     if (num <= 1) {
//         console.log("Its not a Prime number!");
//         return;
//     }

//     let isPrimeFlag = true;

//     for (let i = 2; i < num; i++) {
//         if (num % i === 0) {
//             isPrimeFlag = false;
//             break;
//         }
//     }

//     if (isPrimeFlag) {
//         console.log("Its a Prime number!");
//     }else {
//         console.log("Its not a Prime number!");
//     }
// }

// let number = Number(prompt("Is your number Prime or no?"));

// isPrime(number);

//---------------------------------------------


function getTicketPrice(age, isStudent = false){
    if(age >= 0 && age <= 6){
        console.log("You have to pay 0!");
    }else if((age > 6 && age < 65) && isStudent == false){
        console.log("You have to pay 2500!");
    }else if(age >= 65){
        console.log("You have to pay 1000!");
    }else if(isStudent = true){
        console.log("You are student so you have to pay 1000!")
    }else{
        console.log("Error!");
    }
}

getTicketPrice(2);
getTicketPrice(12);
getTicketPrice(67);
getTicketPrice(18, true);
getTicketPrice(1, true);