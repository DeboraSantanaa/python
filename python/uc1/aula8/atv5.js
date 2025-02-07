/* 5 - Crie uma Função para Contar de 1 até um Número Informado */

function contar(numero) {
    for (i = 1; i <= numero; i++) {
        document.write(i + "<br>");
    }

}

contar(parseInt(prompt("insira um numero")));