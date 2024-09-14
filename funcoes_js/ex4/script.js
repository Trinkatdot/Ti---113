/*Crie um algoritmo usando funções que tenha um 
cadastro de nomes e salários bruto de até 50 
pessoas, há um menu de continuação ou parada do 
cadastro e na parada final, mostre os nomes, 
salários brutos e os salários líquidos de todos 
que foram lidos, considerando 10% de INSS a 
descontar.*/


function cadastro() {
    let pessoas = [];
    let continuar = true;
    let salarioBruto = [];
    let INSS = 0.9;
    //captura nome e slario até 50 pessoas
    while (continuar && pessoas.length < 50) {

        //captura o nome
        let nome = prompt("Informe o nome: ");
        if (nome.trim() === "") {
            alert("Nome não pode estar em branco. Tente novamente.");
            continue;
        }
        //guarda nome
        pessoas.push(nome);

        //captura o salario e converte (número decimal)
        let salario = parseFloat(prompt("Informe o salário bruto:"));
        if (isNaN(salario) || salario < 0) {
            alert("Salário inválido. Insira um número positivo.");
            pessoas.pop(); // Remove o nome se o salário for invlido
            continue;
        }
        //guarda o bruto
        salarioBruto.push(salario);

        //pergunta se deseja continuar cadastrando
        continuar = confirm("Deseja cadastrar outra pessoa? OK = para continuar cadastrando ou  CANCELAR = Para parar de cadastrar")
        if (!continuar) {
            break;
        }
    }
    let mensagem = "Cadastro finalizado. Dados das pessoas cadastradas:\n";
    for (let i = 0; i < pessoas.length; i++) {
        let salarioLiquido = salarioBruto[i] * INSS; //10% INSS
        mensagem += `Nome: ${pessoas[i]}, Salário Bruto: R$${salarioBruto[i].toFixed(2)}, Salário Líquido: R$${salarioLiquido.toFixed(2)}\n`;
    }

    alert(mensagem);
}

cadastro();