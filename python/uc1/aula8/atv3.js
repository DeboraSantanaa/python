
/* 3 - Crie uma função chamada verificarIdade(idade), 
que recebe a idade de uma pessoa e retorna "Maior de idade" se for 18 anos ou mais, e "Menor de idade" caso contrário. */

function verificarIdade(idade) {
    let result = ""

    if (idade >= 18) {
        result = "Maior de idade"
    } else {
        result = "Menor de idade"
    }
    return result
}

let idade = prompt("Digite sua idade")

document.write(verificarIdade(idade));