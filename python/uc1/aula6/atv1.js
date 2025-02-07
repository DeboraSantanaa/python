/////////// 1 ////////////////
/* let contador = 0

while (contador <= 20) {
   document.write(contador + "<br>")
   contador ++
}   */




/////////////////////2////////////////


/* 
for (let numero = 0; numero <=15; numero++ ) {
   if (numero %2 != 0) {
     document.write(numero + "<br>")
   }
    
} */

///////////////3/////////////////////

/* let numero = 10

do {
    document.write(numero + "<br>")
 numero --

} while (numero >= 0); */


////////////////4/////////////////////

/* let soma = 0
let i = 0

while (i < 5) {
    numero = parseInt(prompt(' Informe um número'));
    soma += numero

    i++;

}
document.write(soma)
 */

/////////////////////5////////////////////

/*  let nome = prompt("Informe o seu nome.");
let qtd = parseInt(prompt("Informe o numero de vezes que o nome irá aparecer na tela."));
let i = 0;

while(i<qtd){
    document.write(nome+"<br>");
   qtd--;
} 
 */

///////////////6////////////////////

/* let i = 0
let num = parseInt(prompt("informe um número"));

while (i <=10 ) {
    document.write(`${num} x ${i} = ${num * i} <br>`)
i++
} */


//////////////////////7////////////////////


/*  let cont = 2


do {
    if (cont % 2 == 0) {
 

        document.write(cont + "<br>")
    } cont++


} while (cont <= 20)  */


///////////8///////////////////





//////////////9///////////////


/////////////10/////////////////////

//ex. 1
/* let nomes = []
let cidades = []

for (i = 0; i <= 10; i++) {
    nomes.push(prompt("Informe o nome"));
    cidades.push(prompt("Informe a cidade"));
}

for (const dados in nomes) {
    document.write(nomes [dados])
    document.write( cidades[dados] + "<br>")
} */


/* //ex2
let nomes = []
let cidades = []

for (i = 0; i <= 3; i++) {
    nomes.push(prompt("Informe o nome"));
    cidades.push(prompt("Informe a cidade"));
}

let indice;
let continua;

while (true) {
    indice = parseInt(prompt('informe o indice'))
    if (indice >= 0 && indice < 3) {
        document.write("Nome: " + nomes[indice] + "<br>")
        document.write("Cidade: " + cidades[indice] + "<br>")

    } else {
        alert("indice invalido");
    }
    if (continua = prompt("deseja ler outro indice? ").toLowerCase() != "s") {
        break;
    }
}
 */
/* 
//ex3
let pessoas = []
let nomes; 
let cidades;

for (i = 0; i <= 2; i++) {
    nomes = prompt("Informe o nome");
    cidades = prompt("Informe a cidade");
    pessoas.push({ 'nomes': nomes, 'cidades': cidades })
}

pessoas.forEach(p => {
    
    document.write(p.nomes + " " + p.cidades + " <br>")
});
 */



/* let indice;
let continua;

while (true) {
    indice = parseInt(prompt('informe o indice'))
    if (indice >= 0 && indice < 3) {
        document.write("Nome: " + nomes[indice] + "<br>")
        document.write("Cidade: " + cidades[indice] + "<br>")

    } else {
        alert("indice invalido");
    }
    if (continua = prompt("deseja ler outro indice? ").toLowerCase() != "s") {
        break;
    }
} */


