function isLeafYear(year){
    const remainder = year % 4;
    if(remainder===0){
        return true
    }else{
        return false
    }
}
const isYear = isLeafYear(2022)
console.log(isYear);
const isYears = isLeafYear(1952)
console.log(isYears);