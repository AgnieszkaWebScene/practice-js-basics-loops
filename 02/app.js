const x = 5;

const sumOfNumbers = (x) => {
    let result = 0;
    for (let i = 1; i <= x; i++) {
        result = result + i;
    }
    return result;
} 

const sumOfNumbersWhile = (x) => {
    let result = 0;
    let j = 1;
    while (j <= x) {
        result = result + j;
        j++;
    }
    return result;
} 

console.log(sumOfNumbersWhile(x));