// 2 - Crie um programa que pergunte ao usuário 4 notas de uma disciplina escolar, armazene-as em um vetor, ao final exibas as notas armazenadas e informe ao usuário sua média.

let notas = [];
let n;
let somaNotas = 0;
let mediaNotas = 0;

for (let index = 0; index < 4; index++) {
n = parseFloat(prompt(`Digite a nota:`))

notas[index] = n;

}

console.log(notas);

for (let index = 0; index < notas.length; index++) {
   somaNotas += notas[index]    
}

mediaNotas = somaNotas / notas.length

console.log(`a é soma ${somaNotas}`);
console.log(`a média é ${mediaNotas}`);


