function getSum(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        const index = i;
        const element =arr[index]
        sum = sum + element
        console.log(index, element,sum);
    }
    return sum
}
const myNumber = [12,65,45,78,32,45,91]
getSum(myNumber)
// function getSum(array){
//     let sum = 0;
//     for(let i = 0; i < array.length; i++){
//         const index = i;
//         const element = array[i]
//         sum += element
//         console.log(index,element,sum);
//     }
// }
// const myNumber = [10,20,31,50,26]
// getSum (myNumber)