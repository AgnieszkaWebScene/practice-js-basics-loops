const x = 10;
let randomNumber = -4;

const checkIteration = (x, randomNumber) => {
    let iteration = 0;

    while (randomNumber + iteration <= x) {
        randomNumber + iteration;
        iteration++;
    }
    return iteration;
} 

console.log(checkIteration(x, randomNumber));