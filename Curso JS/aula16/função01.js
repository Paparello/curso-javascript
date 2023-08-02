function parimp(n){
    if(n%2==0){
        return `${n} é par`
    } else {
        return `${n} é ímpar`
    }
}

var res = parimp(21);
console.log(res);

console.log(parimp(12));