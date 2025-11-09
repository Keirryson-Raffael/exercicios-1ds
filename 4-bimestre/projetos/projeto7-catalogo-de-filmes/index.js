// CRIE UMA LÓGICA ABAIXO
let prompt = require("prompt-sync")()

let filme1 = {}
let filme2 = {}
let filme3 = {}
let filme4 = {}
let filme5 = {}
let filme6 = {}
let filme7 = {}
let filme8 = {}
let filme9 = {}
let filme10 = {}

let titulo = ""
let genero = ""
let ano = 0
let avaliacao = 0

let filmes = [filme1, filme2, filme3, filme4, filme5, filme6, filme7, filme8, filme9, filme10]

for (let i = 0; i < filmes.length; i++) {
  let titulo = prompt("Digite o título do filme: ")
  let genero = prompt("Digite o gênero do filme: ")
  let ano = parseInt(prompt("Digite o ano em que o filme foi lançado: "))
  let avaliacao = parseFloat(prompt("Digite a avaliação do filme: "))
}

  while (avaliacao > 10 || avaliacao < 0) {
    console.log("A avaliação não pode ser maior que 10, coloque a avaliação novamente")
    avaliacao = parseFloat(prompt("Digite a avaliação do filme: "))
  }

  const avaliacoes = [filme1.avaliacao, filme2.avaliacao, filme3.avaliacao, filme4.avaliacao, filme5.avaliacao, filme6.avaliacao, filme7.avaliacao, filme8.avaliacao, filme9.avaliacao, filme10.avaliacao]
let maior = avaliacoes[0]
for(let i = 1; i < avaliacoes.length; i++){
    if(avaliacoes[i] > maior){
        maior = avaliacoes[i]
    }
}
let nomeMaisAvaliado = avaliacoes.indexOf(maior) + 1

let soma = filme1.avaliacao + filme2.avaliacao + filme3.avaliacao + filme4.avaliacao + filme5.avaliacao + filme6.avaliacao + filme7.avaliacao + filme8.avaliacao + filme9.avaliacao + filme10.avaliacao
let media = soma / 10

  console.log(`
   ${filme1.titulo} - ${filme1.genero}
   ${filme2.titulo} - ${filme2.genero}
   ${filme3.titulo} - ${filme3.genero}
   ${filme4.titulo} - ${filme4.genero}
   ${filme5.titulo} - ${filme5.genero}
   ${filme6.titulo} - ${filme6.genero}
   ${filme7.titulo} - ${filme7.genero}
   ${filme8.titulo} - ${filme8.genero}
   ${filme9.titulo} - ${filme9.genero}
   ${filme10.titulo} - ${filme10.genero}

   filme mais bem avaliado:
   ${nomeMaisAvaliado}: ${maior}/10

   média geral das avaliações: ${media}
    `)
// === NÃO MODIFIQUE OU ADICIONE NADA ABAIXO ============
module.exports = { filme1, filme2, filme3, filme4, filme5, filme6, filme7, filme8, filme9, filme10 }
