/*const nomes = ["Daniel", "Maria", "João"]
const idades = [40, 28, 35]
console.log(nomes[0], idades[0])*/

//formal
// const pessoa = new Object()
// pessoa.nome = "Daniel"
// pessoa.idade = 40
// console.log(pessoa)
// let prop = "Nome"
// console.log(pessoa[prop])
// console.log(pessoa.idade)

const pessoa = {
    
    nome: "Daniel",
    idade: 40
}

pessoa.nome = "Daniel"
pessoa.idade = 40
console.log(pessoa)
let prop = "nome"
console.log(pessoa[prop])
console.log(pessoa["idade"])