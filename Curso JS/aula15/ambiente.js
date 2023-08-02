let num = [4 , 15, 12, 29];
console.log(num);
console.log(`Nosso vetor é ${num}`);
num[4]=1;
console.log(num);
num[2]=7;
console.log(num);
num.push(8);
console.log(num);
console.log(`Nosso vetor tem agora ${num.length} elementos`);
num.sort();
console.log(num);
for(var pos=0;pos<num.length;pos++){
    console.log(num[pos]);
}

console.log(num);
for(var pos in num) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}

console.log(`O valor 7 está na posição ${num.indexOf(7)}`);

console.log(`O valor 6 está na posição ${num.indexOf(6)}`);
