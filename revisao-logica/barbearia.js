const barbeiros = [{
    responsavel: "Carlos", 
    idade: 18,
    anosExperiencia: 2,
}, {
    responsavel: "Henrique",
    idade: 42,
    anosExperiencia: 12,
}, {
    responsavel: "José", 
    idade: 32,
    anosExperiencia: 8,
}]

    for(let barbearia = 0; barbearia < barbeiros.length; barbearia++) {
        console.log(`O barbeiro: ${barbeiros[barbearia].responsavel} tem ${barbeiros[barbearia].anosExperiencia} anos de experiencia`)
    }

let itensBarbearia = {
    maquinaCorte: {
        marca: "michiggan",
        quantidade: 18,
        Durabilidade: 3,
    },
    tesoura: {
        marca: "Anhembi",
        quantidade: 9,
        durabilidade: "2 meses"

    } ,
    shampoo: {
        marca:"loreal",
        quantidade: 22,
        durabilidade: "1 Semana"
    },
}

//let barbeirosDisponiveis = [barbeiro01, barbeiro02, barbeiro03]  

//console.log()