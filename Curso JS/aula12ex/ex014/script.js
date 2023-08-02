function carregar(){
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('imagem');
    var data = new Date();
    var hora = data.getHours();
    msg.innerHTML = `Agora são ${hora} horas.`;
    if(hora>=0 && hora<12){
        img.src='foto-manha.png';
        msg.innerHTML += ' Bom Dia!';
        document.body.style.background = '#d99f70'
     } else if (hora<18){
            img.src='foto-tarde.png';
            msg.innerHTML += ' Boa Tarde!'
            document.body.style.background = '#f3a77d'
        }
        else {
            img.src='foto-noite.png';
            msg.innerHTML += ' Boa Noite!'
            document.body.style.background = '#204666'
        }
    }
