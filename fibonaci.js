const num = prompt("enter a number");
let n1 = 0, n2 = 1, n3;
console.log(num+"the value given");
    for (i = 1; i <= num; i++) {
        console.log(n1);
        n3 = n1 + n2;
        n1 = n2;
        n2 = n3;
    }
