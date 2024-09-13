/*Crie uma função que lê uma lista de 4 notas, mostre-as junto com a média no alerta, 
considerando que o usuário não pode informar letras, palavras ou vazio. 
Alerte-o do erro e repita a leitura das notas caso ocorra.*/

function contarNota() { 
    let listNotas = [];

    // Captura as notas
    for (let i = 0; i < 4; i++) {
        while (true) { // Inicia o loop
            let contagem = (i + 1);
            let infoNota = prompt(`Informe a ${contagem}ª nota do Aluno:`);

            // Verifica se é vazio
            if (infoNota.trim() === "") {
                alert("Entrada em branco, insira apenas uma nota!");
            } else {
                let infonotaNumero = parseFloat(infoNota);

                // Verifica se é uma letraa
                if (isNaN(infonotaNumero)) {
                    alert("Você inseriu uma letra, insira apenas uma nota!");
                } else {
                    listNotas.push(infonotaNumero); // Adiciona o número à lista
                    break; // Termina o loop
                }
            }
        }
    }
      // Calcula a soma e a média
    let quantidadeNotas = listNotas.length;
    let soma = 0;
    for (let i = 0; i < quantidadeNotas; i++) {
        soma += listNotas[i];
    }
    let media = soma / quantidadeNotas; 

    // Constrói a mensagem das notas
    let notasMsg = listNotas.join(", ");

    // Exibe o alerta com as notas e a média
    alert(`As notas informadas foram: ${notasMsg}\nMédia dessas notas é: ${media.toFixed(2)}`);
}
 
contarNota();