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
    for (let i = 0; i <= 5; i++) {
        //captura o nome
        let nome = prompt("Informe o nome: ");
        pessoas.push(nome);
        //captura o salario e converte (número decimal)
        let salarioBruto = parseFloat(prompt("Informe o salário bruto:"));
        salarioBruto.push(salarioBruto);
        //pergunta se deseja continuar cadastrando
        continuar = confirm("Deseja cadastrar outra pessoa? OK = para continuar cadastrando CANCELAR = Para parar de cadastrar")
        if (!continuar) {
            break;
        }
    }
    let mensagem = "Cadastro finalizado. Dados das pessoas cadastradas:\n";
    let salarioLiquido = salarioBruto * 0.9;
    mensagem += `Nome: ${pessoas}, Salário Bruto: R$${salarioBruto.toFixed(2)}, Salário Líquido: R$${salarioLiquido.toFixed(2)}\n`;
    alert(mensagem);
}

cadastro();