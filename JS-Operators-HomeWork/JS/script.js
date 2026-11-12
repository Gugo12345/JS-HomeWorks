// const input = prompt("Choose your number");



// if (input === "" || input === null) {
//     console.log("You didn't write anything!");
// } else {

//     const number = Number(input);

//     if (number > 0) {
//         console.log("That number is positive");
//     } else if (number < 0) {
//         console.log("That number is negative");
//     } else if (number === 0){
//         console.log("That number is zero");
//     }else {
//         console.log("That's not a number")
//     };

//     if (number % 2 === 0 && number % 2 != 0) {
//         console.log("That number is Even");
//     } else if(number % 2 != 0 && number > 0){
//         console.log("That number is Odd")
//     }else if(number === 0 && number != NaN){
//         console.log("That is even")
//     }else{
//         console.log("That isn't a number")
//     };
// };


// else if(firstNumber % 2 !=0){
//     console.log("That number is Odd")
//  }


// -------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------




const a = 10;
const b = 5;
const c = 19;

if(a > b && a > c) {
    console.log("A is the biggest number")
    console.log(`${a}`)
}else if(a < b && c < b) {
    console.log("B is the biggest number")
    console.log(`${b}`)
}else{
    console.log("C is the biggest number")
    console.log(`${c}`)
};



// -------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------




// const degressWater = prompt("What temperature your water?")

// if(degressWater < 0) {
//     console.log("Your water is under 0 so it is ICE!")
// }else if(degressWater > 0 && degressWater <= 99){
//     console.log("Your water is in normal temperature so it is liquid!")
// }else{
//     console.log("Your watter is over 100 degress so it is GAZ!")
// };


// -------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------




const telephoneCost = 159990;
const bagCost = 29990;

// const tenProcent = 10;
// const twentyProcent = 20;

const tenProcent = bagCost - (bagCost * 10) / 100;
const twentyProcent = telephoneCost - (telephoneCost * 20) / 100;

if(bagCost >= 20000 && bagCost < 50000){
    // console.log(`Your bag cost is ${bagCost} so we do 10% discount! Yow will pay ${bagCost - (bagCost * tenProcent) / 100}`)
    console.log(`Your bag cost is ${bagCost} so we do 10% discount! Yow will pay ${tenProcent}`)
}else{
    console.log("Error");
};

if(telephoneCost > 2000 && telephoneCost >= 50000){
    console.log(`Your telephone cost is ${telephoneCost} so we do 20% discount! You will pay ${twentyProcent}`)
}else{
    console.log("Error")
};

// const bank = prompt("What do you like to buy? Bag costs 29990, telephone costs 159990,if you buy only bag, we will do 10% discount, if you buy telephone or telephone and bag we will do 20% discount, please write a product name like `telephone` or `bag`");

// if(bank === "bag"){
//     console.log(`You will pay ${bagCost - 2990}before cost ${bagCost}`);
// }else if(bank === "telephone"){
//     console.log(`You will pay ${telephoneCost - 30980} before cost ${telephoneCost}`)
// }else if(bank === "bag and telephone" || bank === "telephone and bag" || bank === "telephone bag" || bank === "bag telephone"){
//     const Summary = telephoneCost + bagCost;
//     console.log(`You choose telephone that cost is ${telephoneCost} and bag that cost is ${bagCost} summary is ${Summary}, but we will do a 20% discount! so you have to pay ${Summary - 37,996}`)
// };




// -------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------


// const weekDay = Number(prompt("Choose your WEEK day! `like 1 to 7`"))

// switch(weekDay){
//     case 1:
//     console.log("That is the first day of week, it's called MONDAY!")
//     break;

//     case 2:
//     console.log("That is the second day of week, it's called TUESDAY!")
//     break;

//     case 3:
//     console.log("That is the third day of week, it's called WEDNESDAY!")
//     break;

//     case 4:
//     console.log("That is the fourth day of week, it's called THURSDAY!")
//     break;

//     case 5:
//     console.log("That is the fifth day of week, it's called FRIDAY!")
//     break;

//     case 6 :
//     console.log("That is the sixth day of week, it's called SATURDAY!")
//     break;

//     case 7:
//     console.log("That is the seventh day of week, it's called SUNDAY!")
//     break;

//     default:
//         console.log("You write something wrong!")
//         break;
// };



// -------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------

// const login = "Admin"
// const password = "1234";

// const loginEnter = prompt("Write your login!");
// const passwordEnter = prompt("Write your password!");

// if(loginEnter === login && passwordEnter === password){
//     console.log("Welcome back Admin!")
// }else{
//     console.log("Wrong login or password!")
// };

// -------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------

const age = prompt("Write your age!")

if(Number(age) >= 18){
    console.log("Welcome to the Club buddy!")
}else {
    console.log("You arn't adult yet, please come back when you will 18!")
};

// 0 || "պահեստային"-ը տալիս «պահեստային» vorovhetev || - y yntrum e arajin chshmarit/chshtot trutly arjeqy aysinqn qani vor 0-n false e vercnum e erkrord arjeqy

// 0 ?? "պահեստային"-ը՝ 0 vorovhetev ?? - operatory aveli xist e ev nayum e araji arjeqy null e te undefined, qani vor 0-n voch enie vochel myusy ev parzapes goyutyun uni i tarberutyun myusnerin, mez cuc e talis 0n!

