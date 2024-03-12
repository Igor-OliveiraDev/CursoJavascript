// const nomes = ["Daniel", "Maria", ""]
// const pessoa = { nome: "", idade: 10, email ""}
// const pessoa1 = ()

const pessoas = [ {
    nome: "Daniel",
    idade: 40
}, {
    nome: "Maria",
    idade: 28
}, {
    nome: "Helena",
    idade: 10
}, {
    nome: "João",
    idade: 15
}]

for(let i = 0; i < pessoas.length; i++) {
    console.log(`${pessoas[i].nome} possui ${pessoas[i].idade} anos`)
}