var num = window.document.getElementById('fnum');
let lista = window.document.getElementById('flista');
var res = window.document.getElementById('res');
let vetor = [];

function eNumero(n){
    if(Number(n)>=1 && Number(n)<=100){
        return true
    } else{
        return false
    }
}

function estaNaLista(n, li){
    if(li.indexOf(Number(n)) != -1){
        return true
    } else{
        return false
    }
}

function adicionar(){
    if (eNumero(Number(num.value)) && !estaNaLista(Number(num.value), vetor)){
        vetor.push(Number(num.value));
        let item = document.createElement('option');
        item.text=`Valor ${Number(num.value)} adicionado.`;
        lista.appendChild(item);
        res.innerHTML = ''
    }else {
        window.alert('Valor inválido ou já encontrado na lista');
    }
    num.value = '';
    num.focus();
}

function finalizar(){
    if(vetor.length == 0){
        window.alert('Adicione valores antes de finalizar')
    } else {
        var maior = vetor[0];
        var menor = vetor[0];
        var soma = 0;
        var media = 0;
        for(var pos=0; pos<vetor.length; pos++){
            if(vetor[pos] > maior){
                maior = vetor[pos];
            }
            if(vetor[pos] < menor){
                menor = vetor[pos]
            }
            soma = soma + vetor[pos];
            media = soma / vetor.length;
        }
        res.innerHTML = ''
        res.innerHTML += `<p>Foram adicionados ${vetor.length} valores ==> [${vetor}].<br>  
        O maior valor é ${maior}.<br>
        O menor valor é ${menor}.<br>
        A soma dos valores é ${soma}.<br>
        A média entre eles é ${media}.</p>`
    }
}