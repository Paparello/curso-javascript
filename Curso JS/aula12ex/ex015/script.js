
function verificar() {
var data = new Date();
var atual = data.getFullYear();
var nasc = window.document.getElementById('anonasc');
var mensagem = window.document.getElementById('msg');
var res = window.document.querySelector('div#res');
var idade = atual-Number(nasc.value);
var foto = window.document.getElementById('imagem');
mensagem.innerHTML = `idade: ${idade}`;
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
    mensagem.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
    }
    
    if(idade<12){
        if(gênero == 'Homem'){
            foto.src='bebeM.png';
        }else{
            foto.src='bebeF.png';
        }   
    }
    if(idade>=12 && idade<21){
        if(gênero == 'Homem'){
            foto.src='jovemM.png';
        }else{
            foto.src='jovemF.png';
        }
    }
    if(idade>=21 && idade<=60){
        if(gênero == 'Homem'){
            foto.src='adultoM.png';
        }else{
            foto.src='adultoF.png';
        }
    } 
    if(idade>60){
        if(gênero == 'Homem'){
            foto.src='idosoM.png';
        }else{
            foto.src='idosoF.png';
        }
    }  
}


