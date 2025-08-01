//break statement
for(let i=0; i <=10; i++){
    if(i === 6){
        break;
    } 
    console.log(`i : ${i}`)
}

//continue statement

for (let n = 0; n < 10; n++) {
    if (n % 2 === 0) {
        continue; // Skips even numbers
    }
    console.log(`n : ${n}`);
}
