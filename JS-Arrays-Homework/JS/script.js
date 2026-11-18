// let array = [45, 87, 56, 14, 20, 90, 13];

// console.log(array[0]);
// console.log(array.at(-1));
// console.log(array.length);

// let sum = 0;

// for(let i = 0; i < array.length; i++){
//     sum+=array[i];
// }

// let res = sum / array.length;

// console.log(res);

// function getSum(array) {
//     let res = 0;
//     for(let i = 0; i < array.length; i++){
//         res += array[i];
//     }

//     return res;
// }

// console.log(getSum(array));

let grades = [9, 14, 12, 17, 19, 20, 5, 15, 7];

let maxGrade = [];

for(let i = 0; i < grades.length; i++){
    if(grades[i] >= 14){
        maxGrade.push(grades[i]);
    }else{
        continue;
    }
}

console.log(maxGrade);


function countEvens(array) {
    let count = [];
    for(let i = 0; i < array.length; i++){
        if(array[i] % 2 === 0){
            count.push(array[i]);
        }else{
            continue;
        }
    }
    return count;
}                                                            

console.log(countEvens(maxGrade));


let names = ["Fialka", "Aliya", "Magamed", "Arthur", "David"];


let temp = "";
for(let i = 0; i < names.length; i++){
    temp+=`${i+1}.  ${names[i]} \n`;
}

console.log(temp);


function reverseArray(array) {
    return[...array].reverse();
}

console.log(reverseArray(names));

let colors = "կարմիր,կանաչ,կապույտ,դեղին";

let arrayColors = colors.split(",");

console.log(arrayColors);

arrayColors.push("Սև");

console.log(arrayColors);

let stringColors = arrayColors.join(" | ");

console.log(stringColors);

function removeItem(array, item){
    let index = array.indexOf(item)

    if(index === -1){
        return "Not Find!";
    }

    array.splice(index, 1);

    return array;
}


console.log(removeItem(names, "Magamed"));


let array1 = [13, "gang", 89, "big", "MardaMek"];

let array2 = ["gjanoc", "dproc", 13, "gang",];

let array3 = [];

for(let i = 0; i < array1.length; i++){
    if(array2.includes(array1[i]) && !array3.includes(array1[i])){
        array3.push(array1[i]);
    }
}

console.log(array3);










