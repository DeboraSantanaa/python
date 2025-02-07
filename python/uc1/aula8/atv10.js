/* function contarLetra(txt){
    let texto = (txt.split(''));
    let cont=0
    for(let i=0; i<texto.length;i++){
        if(texto[i] == "a"){
            cont++
        }
    }
    return cont
}


alert(contarLetra('arara')) */


function contadorLetraA(texto) {
    let contador = 0;
for (let i=0; i<texto.length; i++){
    if(texto[i] === 'A' || texto[i] ==='a'){
contador ++
    }
}
return contador;

}

let palavra = prompt("digite uma palavra");
alert (contadorLetraA(palavra));