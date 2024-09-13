/* Crie um algoritmo usando funções que faça uma leitura de 10 letras em um 
vetor, e após verificar quantas vogais foram lidas e mostre somente 
consoantes no alerta.*/

/*includes determina se um conjunto de caracteres pode ser 
encontrado dentro de outra string*/

function verificarvogais() {
    let letras = [];
    let vogais = 0;
    let consoantes = 0;

    //leitura de letra no vetor de letras
    for (let i = 0; i < 5; i++) {
        let letra = prompt("Informe uma Letra: ");
        letras.push(letra);
    }

    for (let j = 0; j < letras.length; j++) {
        //converto o texto pra maiúsculo
        let letra = letras[j].toUpperCase();
        //Verifico se tem alguma vogal
        if (["A", "E", "I", "O", "U"].includes(letra)) {
            vogais++;
        } else {
            consoantes.push(letra);
        }
    }
    alert("Foram lidas " + Vogais + " vogais! e Consoantes: " + consoantes.join(", "));
    
}

verificarvogais();

