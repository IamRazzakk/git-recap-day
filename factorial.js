// !4
// function facTorial(number){
//     sum = 4
//     for(let i = 1; i <= number; i++){
//        result = result * i
//     }
//     return result
// }
// const fact= facTorial(4)
// console.log(fact);
function factorial(number){
    result = 1
    for(let i = number; i>=1; i--){
        result = result * i;
    }
    return result
}
const fac = factorial(7)
console.log(fac);