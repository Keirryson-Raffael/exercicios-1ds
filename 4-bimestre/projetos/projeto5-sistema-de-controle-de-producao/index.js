// Antes de iniciar, instale o prompt-sync para entrada de dados e o jest para testar
const prompt = require("prompt-sync")()
// Comando: npm i prompt-sync; npm i -D jest
// CRIE UMA LÓGICA ABAIXO
let pecas = 1
let num = prompt(`Quantas peças devem ser produzidas?: `)

while (pecas <= num ) {
    console.log(`Peça ${pecas} produzida.`)
    pecas ++
}

if (pecas = num) {
    console.log(`Meta alcançada!`)
} else {
    console.log(`Meta não alcançada.`)
}

do {
    let continuar = prompt(`Deseja simular outro turno? (S/N)`)
} while