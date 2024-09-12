/*Crie uma função que lê um vetor de 5 números inteiros e mostre-os, 
considere que o usuário não pode informar letras, palavras ou vazio. 
Alerte-o do erro e repita a leitura caso ocorra.*/

function lernumeros() {
    //coletar 5 numeros (ok)
    let num = [];
    for (let i = 0; i < 5; i++) {
        while (true) {
            let infonumero = prompt("Informe um número:");

            if (infonumero.trim() === "") { //verificar se é vazio
                alert("entrada em branco, insira apenas um numero inteiro!");
            }
            else {
                let inteiro = parseInt(infonumero);
            }

            if (isNaN(infonumero)) { // verificar se é uma letra
                alert("Não é um numero, insira apenas um numero inteiro!");
            } else {
                num.push(parseInt(infonumero)); //adiciona o numero a lista
                break; //termina o loop
            }
        }
    }
    return alert(`numeros interiros:${num.join(",")}`);
}

lernumeros()
