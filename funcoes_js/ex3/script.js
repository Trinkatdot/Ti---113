/* Crie um algoritmo usando funções que faça uma leitura de 10 letras em um 
vetor, e após verificar quantas vogais foram lidas e mostre somente 
consoantes no alerta.*/

/*includes determina se um conjunto de caracteres pode ser 
encontrado dentro de outra string*/

function verificarvogais() {
    let letras = [];
    let vogais = 0;
    let consoantes = [];

    //leitura de letra no vetor de letras
    for (let i = 0; i < 10; i++) {
        let letra = prompt("Informe uma Letra: ");
        letras.push(letra);
    }

    for (let j = 0; j < letras.length; j++) {
        //converto o texto pra maiúsculo
        let letra = letras[j].toUpperCase();
        //Verifico se tem alguma vogal e guarda elas
        if (["A", "E", "I", "O", "U"].includes(letra)) {
            vogais++;
        } else { //adiciona oque não for vogal a lista de consoantes
            consoantes.push(letra);
        }
    }
    alert("Foram lidas " + vogais + " vogais! e as Consoantes São: " + consoantes.join(", "));
    
}

verificarvogais();

