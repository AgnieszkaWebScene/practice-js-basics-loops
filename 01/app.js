const randomNumber = Math.round(Math.random() * 20);
console.log(randomNumber);


const checkNumber = (randomNumber) => {
    const limit = 5;
    if (randomNumber > limit) {
        for (let i = 0; i < randomNumber - limit + 1; i++) {
            console.log( limit + i);
        }
    } else {
        console.log('The number drawn is too small to use a loop');
    }
} 

checkNumber(randomNumber);