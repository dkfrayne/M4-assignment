let flip;
let count = parseInt(prompt('How many coin flips?'));
for(let i = 0; i < count; i++) {
    let flip = Math.round(Math.random());
    console.log(flip ? "Heads" : "Tails");
}