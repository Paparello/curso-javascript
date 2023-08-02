function contar(){
var n1 = window.document.getElementById('idinicio');
var n2 = window.document.getElementById('idfim');
var pas = window.document.getElementById('idpasso');
var resultado = window.document.getElementById('res');

    if (n1.value.length==0 || n2.value.length==0 || pas. value.length==0){
        window.alert('[ERRO] Faltam dados');
    } else {
        res.innerHTML = 'Contando...<br>'
        var inicio = Number(n1.value);
        var fim = Number(n2.value);
        var passo = Number(pas.value);
        if(passo<=0){
            window.alert('Passo inválido! Considerar passo=1')
            passo = 1;
        }
        if(inicio < fim){
            for(cont=inicio; cont<=fim; cont+=passo){
                resultado.innerHTML += `${cont} \u{1F449}`;
            }
            
        } else {
            for(cont=inicio; cont>=fim; cont-=passo){
                resultado.innerHTML += `${cont} \u{1F449}`; 
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}