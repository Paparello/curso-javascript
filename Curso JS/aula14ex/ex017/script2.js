function calcular(){
    var num = document.getElementById('txtn');
    var n = Number(num.value);
    var tab = document.getElementById('seltab');
    if(num.value.length == 0){
        alert('[ERRO!!! Digite um número')
    } else{
        tab.innerHTML = ''
        cont=1;
        while (cont<=10) {
            let item = document.createElement('option');
            item.text = `${n} x ${cont} = ${n*cont}`;
            tab.appendChild(item);
            cont++
        }
    }
}