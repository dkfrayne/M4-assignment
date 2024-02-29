let mp = (x) => {
    if(x % 3 && x % 5) {
        return x;
    }
    return ((x % 3) ? "":"Marco! ") + ((x % 5) ? "":"Polo! ");
    
}
for(let i = 1; i <= 100; i++) {
    console.log(mp(i));
}