// CRIE UMA LÓGICA ABAIXO
const prompt = require("prompt-sync")()

let num = 1
let dias = parseInt(prompt(`Quantos dias serão registrados? `))
let pecas
let producao = []
while (num <= dias) {
    pecas = parseInt(prompt(`Quantas peças foram produzidas no dia ${num}? `))
    producao.push(pecas)
    num++
}

let total = 0
for (let i = 0; i < producao.length; i++){
    total += producao[i]
}


let media = total / producao.length

let maior = producao[0]
let menor = producao[0]
for(let i = 1; i < producao.length; i++){
    if(producao[i] > maior){
        maior = producao[i]
    }
    if(producao[i] < menor){
        menor = producao[i]
    }
}

console.log (`--- RELATÓRIO DE PRODUÇÃO ---
    Produções registradas: ${producao}
    Total produzido: ${total}
    Média diária: ${media}
    Maior produção: ${maior}
    Menor produção: ${menor}
    Ordem crescente: ${producao.sort((a,b) => b-a)}
    Ordem decrescente:${producao.sort((a,b) => a-b)}
    `)
    let metadeDoMaior = maior / 2

    if (media >= metadeDoMaior) {
        console.log("Produção estável!")
    } else{
        console.log("Produção abaixo do ideal.")
    } 