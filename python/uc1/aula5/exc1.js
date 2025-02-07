/* let valor1 = parseFloat(prompt("digite 1 numero").trim());
let valor2 = parseFloat(prompt("digite 2 numero").trim());

let op = prompt('digite o operador')

if (isNaN(valor1) || isNaN(valor2) || op ==='') {
    document.write('digite um valor válido')
} else {
    switch (op) {
        case '+':
            document.write(valor1 + valor2);

            break;
        case '-':
            document.write(valor1 - valor2);

            break;
        case '*':
            document.write(valor1 * valor2);

            break;
        case '/':
            document.write(valor1 / valor2);

            break;

        default:
            break;
    }

}
 */

////// IMC /////////////////////////////////// 

/* let altura = parseFloat(prompt('Digite sua altura'));
let peso = parseFloat(prompt('Digite seu peso'));


let imc = peso / (altura ** 2)

if (isNaN(peso) || isNaN(altura)) {
    document.write('Digite um valor válido')
} else {
    if (imc < 18.5) {
        document.write(`Baixo Peso`)
    } else if (imc >= 18.5 && imc <= 24.99) {
        document.write(`Seu imc é ${imc.toFixed(2)} e a classificação é Normal`)
    } else if (imc >= 25 && imc <= 29.99) {
        document.write(`Seu imc é ${imc.toFixed(2)} e a classificação é Sobrepeso`)
    } else if (imc >= 30 && imc <= 34.99) {
        document.write(`Seu imc é ${imc.toFixed(2)}  e a classificação é Obesidade I`)
    } else if (imc >= 30 && imc <= 34.99) {
        document.write(`Seu imc é ${imc.toFixed(2)} e a classificação é Obesidade I`)

    } else if (imc >= 35 && imc <= 39.99) {
        document.write(`Seu imc é ${imc.toFixed(2)} e a classificação é Obesidade II`)
    }
    else {
        document.write(`Seu imc é ${imc.toFixed(2)}  e a classificação é Obesidade III`)
    }
}  */


////////////////////////////////////////


//////////////IDADE 3 //////////////////////
/* let idade = parseInt(prompt('Digite sua idade'));
if (isNaN(idade)) {
    document.write('Digite um valor válido')
} else {

    if(idade >= 18){
        document.write("Maior de idade")
    } else if (idade > 0){
        document.write('Menor de idade')
    } else{
        document.write('Digite uma idade válida')
    }
} */



////////////////////// 4 /////////////////////////////////

/* let valor = parseFloat(prompt('digite um valor'))
let desconto = parseInt(prompt('Informe o desconto'))

if (isNaN(valor) || isNaN(desconto)) {
    document.write("valor invalido")
} else {
    let percentual = valor * (desconto/100);
    document.write (" o valor do produto é "+ valor+ " e o valor do desconto é " +percentual)
    document.write (`o valor do produto é ${valor - percentual}`)
}
 */


////// IMPAR OU PAR 5////////////////////////////////////

/* let numero = parseInt(prompt("digite 1 numero"));

if (isNaN(numero) ){
    document.write(`Digite um numero válido`)

} else if(numero % 2 === 0 ){
   document.write (`O ${numero} é par`)
} else{
   document.write ( `O ${numero} é impar`)
} */
////////////////////////////////////////////////////





//////////////////NUMEROS - 6 //////////////////////

/* let numero1 = parseInt(prompt('digite um numero'));
let numero2 = parseInt(prompt('digite um numero'));
if (isNaN(numero1) || isNaN(numero2)) {
    document.write('Digite um número válido')
} else {
    if (numero1 > numero2) {
        document.write(`o ${numero1} é maior que ${numero2}`)
    } else{
        document.write(`O ${numero2} é maior que o ${numero1}`)
    }
}
  */

////////////////// EXERCICIO 7 /////////////////////

/* let num1 = parseFloat(prompt('Digite um numero'));
let num2 = parseFloat(prompt('Digite um numero'));
let num3 = parseFloat(prompt('Digite um numero'));
let media = (num1 + num2 + num3 )/ 3

if (isNaN(num1) || isNaN(num2) || isNaN(num3)){
    document.write('Digite um valor válido')
} else{
    document.write(media)
}
  */


////////////////// EXERCICIO 8 /////////////////////

/* let idade = parseFloat(prompt('Digite sua idade'));

if (isNaN(idade)){
    document.write('Digite uma idade válida')
} else if (idade >= 18){
    document.write("Pode dirigir")
} else{
    document.write("Não pode dirigir")
} */

//////////////////////////////////////////////////




/* Let valor1 = parseFloat(prompt("digite 1 numero"));
let valor2 = parseFloat(prompt("digite 2 numero"));

let soma = valor1 + valor2;

//testas se os valores são nulos
if (isNaN(valor1) || isNaN(valor2))  {
    alert('digite um valor')
} else {

    document.write(`A soma é ${soma}`)

    if (soma > 20) {
        document.write(`o numero é maior que 20`)
    } else if (soma < 20) {
        document.write(`o numero é menor que 20`)
    } else {
        document.write(` O número é igual a 20`)
    }

}  */