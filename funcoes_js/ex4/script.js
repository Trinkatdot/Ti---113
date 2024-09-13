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
    //captura nome e slario até 50 pessoas
    for (let i = 0; i <= 3; i++) {
        //captura o nome
        let nome = prompt("Informe o nome: ");
        //captura o salario e converte (número decimal)
        let salarioBruto = parseFloat(prompt("Informe o salário bruto:"));

        //insere na lista (vetor)
        pessoas.push({ nome: nome, salarioBruto: salarioBruto });

        continuar = confirm("Deseja cadastrar outra pessoa? OK = para continuar cadastrando CANCELAR = Para parar de cadastrar")
        if (!continuar) {
            break;
            }
        
        }
    }
cadastro();

function calculoliquido(){
    let desconto = 0.10;
    return slarioliquido = salarioBruto * (1 - desconto);
    
}

function 