// // !4
// function factoriAL(){
//     sum = 1
//     for(let i = 1; i <= 7; i--){
//         result = result * i
//     }
//     return sum
// }
// const result = factoriAL(7);
// console.log(result);

function calculateFactorial(number) {
    const num = number;
    let factorial = 1;

    for (let i = 1; i <= num; i++) {
        factorial *= i;
    }

    return factorial;
}

const inputNumber = 5;
const result = calculateFactorial(inputNumber);

console.log(`${inputNumber}! = ${result}`);
