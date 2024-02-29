let triangle = "";
for(let i = 0; i < 7; i++) {
    for(let j = 0; j <= i; j++) {
        triangle += "#";
    }
    triangle += "\n";
}
console.log(triangle);