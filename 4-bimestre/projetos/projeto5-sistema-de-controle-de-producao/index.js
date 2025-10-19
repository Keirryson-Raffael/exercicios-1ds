// Antes de iniciar, instale o prompt-sync para entrada de dados e o jest para testar
const prompt = require("prompt-sync")()
// Comando: npm i prompt-sync; npm i -D jest
// CRIE UMA LÓGICA ABAIXO

let dias = 1
let continuar

do {
    let num = parseInt(prompt(`Quantas peças devem ser produzidas?: `))

    while (pecas < num) {
        pecas++
        console.log(`Peça ${pecas} produzida.`)
    }
    if (pecas == num) {
        console.log(`${pecas} peças produzidas`)
        console.log(`Meta alcançada!`)
    } else {
        console.log(`Meta não alcançada.`)
    }

    console.log(`resumo dos dias anteriores:`)
    for (let i = 1; i < dias; i++) {
        console.log(`Dia ${i}: ${pecas} peças produzidas`);
    }
    continuar = prompt(`Deseja simular outro turno? (S/N)`)

    dias++
} while (continuar == "S")

    console.log(`Encerrando o sistema de produção`)