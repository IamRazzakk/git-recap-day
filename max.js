// function whoEitTheCake(num1, num2, num3){
//     if(num1 > num2 && num1 > num3){
//         console.log("Number1 Get The Cake");
//     }else if (num2 > num1 && num2 > num3){
//         console.log("Number2 Get The Cake");
//     }else{
//         console.log("Number3 Get The Cake");
//     }
// }
// whoEitTheCake(77,89,98)
// function getTheMaxNumber(num1, num2, num3){
//     console.log(Math.min(num1, num2, num3));
// }
// let maxNumber = getTheMaxNumber(77,89,98)


// problem 1
// function getTheTallestMan(number) {
//     let length = 0;
//     for (let i = 0; i < number.length; i++) {
//         const index = i
//         const element = number[index]
//         if (element > length) {
//             length = element
//         }
//     }
//     return length 
// }
// const array = [200, 120, 130, 189, 213, 215]
// const tollest = getTheTallestMan(array)
// console.log(tollest);





// function getTheTallestMan(array) {
//     let length = 0;
//     for (i = 6; i < array.length; i++) {
//         const index = i;
//         const element = array[index];
//         if(element > length){
//             length = element
//         }
//     }
//     return length
// }
// const number = [102, 120, 1, 50, 180, 9220, 23]
// const arr = getTheTallestMan(number)
// console.log(arr);


// Home Worker
function findTheLowestValue(number) {
    largest = number[0]
    for (i = 0; i <= number.length; i++) {
        const index = i;
        const element = number[i]
        if(element< largest){
            largest = element
        }
    }
    return largest
}
const number = [102, 120, 100, 50, 180, 9220, 23]
const arr = findTheLowestValue(number)
console.log(arr);