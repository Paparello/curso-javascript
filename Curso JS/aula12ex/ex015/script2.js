
function verificar() {
var data = new Date();
var atual = data.getFullYear();
var nasc = window.document.getElementById('anonasc');
var mensagem = window.document.getElementById('msg');
var res = window.document.querySelector('div#res');
var idade = atual-Number(nasc.value);
var foto = window.document.getElementById('imagem');
//mensagem.innerHTML = `idade: ${idade}`;
if(nasc.value.length == 0 || nasc.value>=atual){
    window.alert('ERRO! Verifique os dados e tente novamente')
}   else {
    var sex = window.document.getElementsByName('sexo');
    var gênero = '';
    if(sex[0].checked) {
        gênero = 'Homem';
    } else if(sex[1].checked) {
        gênero = 'Mulher';
    }
    res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
    }
    
    if(idade>60){
       idoso();   
    } else if(idade>=21){
        adulto();
    } else if(idade>=12){
        jovem();
    } else {
        bebe();
    }
    function idoso(){
        if(gênero == 'Homem'){
            foto.src='idosoM.png';
        }else{
        foto.src='idosoF.png';
        }
    }
    function adulto(){
        if(gênero == 'Homem'){
            foto.src='adultoM.png';
        }else{
        foto.src='adultoF.png';
        }
    }
    function jovem(){
        if(gênero == 'Homem'){
            foto.src='jovemM.png';
        }else{
        foto.src='jovemF.png';
        }
    }
    function bebe(){
        if(gênero == 'Homem'){
            foto.src='bebeM.png';
        }else{
        foto.src='bebeF.png';
        }
    }
}

