// Criar um array com númmeros randomicos não repetidos

function generateRandomNuber(max) {
    return parseInt(Math.random() * max)

}

let arr = []

while(arr.length <= 20) {
    let randomNuber = generateRandomNuber(30)
    console.log(randomNuber)

    if(arr.indexOf(randomNuber) < 0) {
        arr.push(randomNuber)

    } else {

        console.log(randomNuber, "Já existe no array")
    }
}

console.log(arr)
