function verificarVogais() {
    let letras = [];
    let contadorVogais = 0;
    let consoantes = [];

    // Leitura de 10 letras no vetor de letras
    for (let i = 0; i < 10; i++) {
        let letra = prompt("Informe uma Letra: ");
        letras.push(letra);
    }

    // Verificação de vogais e consoantes
    for (let j = 0; j < letras.length; j++) {
        let letra = letras[j].toUpperCase();
        if (["A", "E", "I", "O", "U"].includes(letra)) {
            contadorVogais++;
        } else {
            consoantes.push(letra);
        }
    }

    alert("Foram lidas " + contadorVogais + " vogais!");
    alert("Consoantes: " + consoantes.join(", "));
}

verificarVogais();