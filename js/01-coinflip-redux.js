let coinFlip;
let count = parseInt(prompt('How many coin flips?'));
for(let i = 0; i < count; i++) {
    coinFlip = Math.round(Math.random());
    console.log(coinFlip ? "Tails" : "Heads");
}