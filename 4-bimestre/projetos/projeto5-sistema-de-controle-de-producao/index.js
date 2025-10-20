// Antes de iniciar, instale o prompt-sync para entrada de dados e o jest para testar
const prompt = require("prompt-sync")()
// Comando: npm i prompt-sync; npm i -D jest
// CRIE UMA LÓGICA ABAIXO

let dias = 1
let continuar
let totalGeral = 0
let resumo = ""

do {
    let num = parseInt(prompt("Quantas peças devem ser produzidas? "))
    let pecas = 0

    while (pecas < num) {
        pecas++
        console.log(`Peça ${pecas} produzida com sucesso.`)
    }

    totalGeral += pecas

    if (pecas == num) {
        console.log(`Meta alcançada!`)
    } else {
        console.log(`Meta não alcançada.`)
    }

    console.log(`Total Geral:${totalGeral}`)
    resumo += ` Resumo dos dias anteriores:
    Dia ${dias}: ${pecas} peças produzida(S) com sucesso \n`
    dias ++
    continuar = prompt(`Deseja simular outro turno? (S/N)`).toUpperCase()
} while (continuar == "S")
    console.log(resumo)
    console.log(`Total geral:${totalGeral}`)
    console.log("Encerrando sistema de produção...")