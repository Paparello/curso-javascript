let amigo = {
    nome:'Pingo', sexo:'M', peso:74.5, engordar(p=0){
    console.log(`${amigo.nome} Engordou!!!!`)
    this.peso += p}
}
console.log(`${amigo.nome} pesa ${amigo.peso} kg.`)
amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso} kg.`)
