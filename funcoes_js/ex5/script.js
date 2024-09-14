/*Crie um algoritmo usando funções que leia até 50 números inteiros e armazene-os numa lista 
de números, considere as premissas abaixo:

• Não pode informar letras, palavras ou vazio. Alerte-o do erro e repita a leitura.
• Não pode informar números negativos. Alerte-o do erro e repita a leitura.
• Crie um menu que o usuário escolha cadastrar 5, 15, 25 ou 50.
• Ao final do cadastro ele tem um outro menu pra escolher exibir:  
1 - A lista cadastrada, 2- somente os pares, 3- somente os impares.*/

function menuquantos() {
    let numeros = [];
    let pares = [];
    let impares = [];
    continuar = true;

    let quantosNumeros = parseInt(prompt("Quantos números deseja cadastrar? Escolha entre 5, 15, 25, ou 50:"));
    // Validar a escolha do usuário
    if (![5, 15, 25, 50].includes(quantosNumeros)) {
        alert("Escolha inválida. Por favor, selecione 5, 15, 25, ou 50.");
        return; // Sai da função se a entrada for inválida
    }

    // Captura os números com base na escolha
    for (let i = 0; i < quantosNumeros; i++) {
        while (true) {
            let numero = prompt(`Insira o número ${i + 1}:`);

            // Verifica se está vazio ou não é número ou negativo
            if (numero.trim() === "") {
                alert("Número não pode estar em branco. Tente novamente.");
                continue;
            }

            numero = parseInt(numero);

            if (isNaN(numero) || numero < 0) {
                alert("Número inválido. Insira um número inteiro positivo.");
                continue;
            }
            // Guarda o número
            numeros.push(numero);
            break;
        }
    }

    // Separa os números em pares e ímpares
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 === 0) {
            pares.push(numeros[i]);
        } else {
            impares.push(numeros[i]);
        }
    }

    // Menu para exibir os números
    do {
        // Menu para exibir os números
        let opcao = parseInt(prompt("Escolha uma opção para exibir:\n1 - A lista cadastrada\n2 - Somente os pares\n3 - Somente os ímpares"));

        switch (opcao) {
            case 1:
                alert(`Lista cadastrada: ${numeros.join(", ")}`);
                break;
            case 2:
                alert(`Números pares: ${pares.join(", ")}`);
                break;
            case 3:
                alert(`Números ímpares: ${impares.join(", ")}`);
                break;
            default:
                alert("Opção inválida.");
                break;
        }

        // Pergunta se deseja verificar outra lista
        continuar = confirm("Deseja verificar outra opção? OK para continuar, Cancelar para sair.");

    } while (continuar);
}
menuquantos();