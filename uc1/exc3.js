let valor1 = 10
let valor2 = 8
let valor3 = 1

if (valor1 == valor2 && valor2 == valor3) {
    console.log(`os numeros são iguais `)
} else if (valor1 > valor2 && valor1 > valor3) {
    console.log(`O ${valor1} é maior que o ${valor2} e que o${valor3}`)
} else if (valor2 > valor3 && valor1 > valor3) {
    console.log(`O ${valor2} é maior que o ${valor1} e  que o ${valor3}`)
} else {
    console.log(`O ${valor3} é maior que o ${valor1} e  que o ${valor2}`)
}


