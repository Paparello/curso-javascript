function gerar(){
    var numero = window.document.getElementById('txtnum');
    let tab = window.document.getElementById('seltab');
    if (numero.value.length==0){
        window.alert('[ERRO] Digite um número');
    } else {
        var n = Number(numero.value);
        tab.innerHTML = ''
        for(cont=1; cont<=10; cont++){
            let item = document.createElement('option');
            item.text= `${n} x ${cont} = ${cont*n}`
            item.value = `tab${cont}`;
            tab.appendChild(item)
        }
    }
}
