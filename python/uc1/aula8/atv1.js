/* 1 - Crie uma função chamada cumprimentar(nome), que recebe um nome via prompt como parâmetro e exibe a mensagem "Olá, [nome], tudo bem?". */

/* function cumprimentar(nome) {
   document.write("Olá, " +nome+ ", tudo bem?")
}

cumprimentar("Ana"); */


/* 2 - Crie uma função para cada uma das 4 operações aritméticas(soma, subtração, divisão 
e multiplicação).Depois crie um programa que leia dois números e de acordo com a 
operação solicitada, chame a função responsável pela operação. */


function multiplicacao(a, b) {
    multiplicacao = a * b
    document.write("O resultado da multiplicação é: " + multiplicacao)
}


function divisao(a, b) {
    divisao = a / b
    document.write("O resultado da divisão é: " + divisao)
}


function subtracao(a, b) {
    subtracao = a - b
    document.write("O resultado da subtração é: " + subtracao)
}

function soma(a, b) {
    soma = a + b
    document.write("O resultado da soma é: " + soma)
}



a = parseInt(prompt("digite um numero"))
b = parseInt(prompt("digite um numero"))
op = prompt("Escolha o operador")

if (op == "+") {
    soma(a, b);
} else if (op == "-") {
    subtracao(a, b);
} else if (op == "/") {
    divisao(a, b);
} else if (op == "*") {
    multiplicacao(a, b)
} else {
    document.write('invalido')

}