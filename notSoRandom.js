function random(number){
    const decimal = Math.random() * number;
    const final = Math.floor(decimal);
    console.log(final);
}
random(20);

function randomLetter(letter){
    const number = Math.random() * letter;
    const final = Math.floor(number);
    console.log(final);
}
random("abcdefghijklmnopqrstuvwzyz");