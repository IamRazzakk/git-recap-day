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
function getTheMaxNumber(num1, num2, num3){
    console.log(Math.min(num1, num2, num3));
}
let maxNumber = getTheMaxNumber(77,89,98)