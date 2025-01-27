// um programa para receber um numero de 1 a 7 e informar qual é o dia da semana.

let day = 3

if (day == 1) {
    console.log('segunda')
} else if (day == 2) {
    console.log('terça')
}
else if (day == 3) {
    console.log('quarta')
}
else if (day == 4) {
    console.log('quinta')
}
else if (day == 5) {
    console.log('sexta')
}
else if (day == 6) {
    console.log('sabado')
} else if (day == 7) {
    console.log('domingo')
} else {
    console.log('Não encontrado')
}


let num = 5
let result = num % 2 == 0 ? "par" : "impar "
console.log(result)




let num1 = 8

if (num1 % 2 == 0) {
    console.log('par')
} else {
    console.log('impar')
}

let day1 = 1

switch (day1) {
    case 1:
        console.log('domingo')
        break;
    case 2:
        console.log('segunda')
        break;
    case 3:
        console.log('terça')
        break;
    case 4:
        console.log('quarta')
        break;
    case 5:
        console.log('quinta')
        break;
    case 6:
        console.log('sexta')
        break;
    case 7:
        console.log('sábado')
        break;
}

///////////////////////////////////////////////

let mes = 5

switch (mes) {
    case 1:
        console.log('janeiro')
        break;
    case 2:
        console.log('fevereiro')
        break;
    case 3:
        console.log('março')
        break;
    case 4:
        console.log('abril')
        break;
    case 5:
        console.log('maio')
        break;
    case 6:
        console.log('junho')
        break;
    case 7:
        console.log('julho')
        break;
    case 8:
        console.log('agosto')
        break;
    case 9:
        console.log('setembro')
        break;
    case 10:
        console.log('outubro')
        break;
    case 11:
        console.log('novembro')
        break;
    case 12:
        console.log('dezembro')
        break;
}


///////////////////////////////////////////////

let valor1 = 6
let valor2 = 5
let op = '*'


switch (op) {
    case '+':
        console.log('o resultado é ' + (valor1 + valor2))
        break;
    case '-':
        console.log('o resultado é ' + (valor1 - valor2))
        break;

    case '/':
        console.log('o resultado é ' + (valor1 / valor2))
        break;
    case '*':
        console.log('o resultado é ' + (valor1 * valor2))
        break;
}

///////////////////////////////////////////////

let idade = 65

if (idade >= 65) {
    console.log('idoso')
} else if (idade >= 18) {
    console.log('adulto')
} else if (idade >= 13) {
    console.log('adolescente')
} else {
    console.log('criança')
}

//////////////////////////////  

let idade1 = 65

if (idade1 >= 0 && idade1 <= 12) {

    console.log('criança')
} else if (idade1 >= 13 && idade1 <= 17) {

    console.log('adolescente')

} else if (idade1 >= 18 && idade1 <= 64) {
    console.log('adulto')

} else if (idade1 >= 65) {
    console.log('idoso')

} else {
    console.log('idade nao encontrada')


}

let idade3 = 21;

switch (true) {
    case (idade3 >= 0 && idade3 <= 12):
        console.log('criança')
        break;

    case (idade3 >= 13 && idade3 <= 17):
        console.log('adolescente')
        break;

    case (idade3 >= 18 && idade3 <= 64):
        console.log('adulto')
        break;

    case (idade3 >= 65):
        console.log('idoso')
        break;

}


////////////////////////////////////////////////


let produto = 4

switch (produto) {
    case 1:
        console.log('alimento perecivel')
        break;
    case 2:
        console.log('bebida')
        break;
    case 3:
        console.log('limpeza')
        break;
    case 4:
        console.log('higiene pessoal')
        break;

}

//////////////////////////////////////////////////

let numero = 200
if (numero >= 10 && numero <= 20) {
    console.log(`O ${numero} está dentro do  intervalo  de 10 e 20`)
} else {
    console.log(`o numero ${numero} não está dentro do intervalo `)
}

//////////////////////////////////////////////////////


let numero4 = 200
if ((numero4 >= 1 && numero4 <= 10) || (numero4 >= 50 && numero4 <= 100)) {
    console.log(`O ${numero4} está dentro do  intervalo  de 1 e 50`)
} else {
    console.log('numero invalido')
}

//////////////////////////////////////////////////////


let idade4 = 17
let acompanhado = 'não'

if (idade4 >= 18 || (idade4 >= 16 && acompanhado == 'sim')) {
    console.log('Pode comprar bebidas')
    
} else {
    console.log('Não Pode comprar bebidas')
}

//////////////////////////////////////////////////////

let servicotempo = 20
let cargo_atual = 6
let resultado = servicotempo / 12


if (resultado >= 1 && cargo_atual >= 6) {
    console.log('pode tirar ferias')
} else {
    console.log("Nao pode")
}


//////////////////////////////////////////////////////

let idade5 = 10

if (idade5 >= 18) {
    console.log('Pode dirigir e Pode votar')
} else if (idade5 >= 16) {
    console.log('Voto Opcional')
} else {
    console.log('Não pode nem dirigir nem votar')
}