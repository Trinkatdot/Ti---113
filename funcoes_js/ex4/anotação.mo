confirm () é usado para mostrar uma caixa de 
confirmação, com uma mensagem especificada, e
botões OK e Cancelar. Retorna True se o usuário
clicar em OK, e False se clicar em Cancelar


function cadastro() {
    let pessoas = [];
    let continuar = true;

    // Captura nome e salário até 50 pessoas
    while (continuar && pessoas.length < 50) {
        // Captura o nome
        let nome = prompt("Informe o nome: ");
        // Captura o salário e converte para número decimal
        let salarioBruto = parseFloat(prompt("Informe o salário bruto:"));

        // Insere na lista (vetor)
        pessoas.push({ nome: nome, salarioBruto: salarioBruto });

        // Pergunta se deseja cadastrar outra pessoa
        continuar = confirm("Deseja cadastrar outra pessoa? OK = para continuar cadastrando CANCELAR = Para parar de cadastrar");
    }

    // Exibe os resultados finais
    let mensagem = "Cadastro finalizado. Dados das pessoas cadastradas:\n";
    pessoas.forEach(pessoa => {
        let salarioLiquido = pessoa.salarioBruto * 0.9; // Desconto de 10% de INSS
        mensagem += `Nome: ${pessoa.nome}, Salário Bruto: R$${pessoa.salarioBruto.toFixed(2)}, Salário Líquido: R$${salarioLiquido.toFixed(2)}\n`;
    });

    // Mostra a mensagem com os dados finais
    alert(mensagem);
}

// Chama a função de cadastro
cadastro();