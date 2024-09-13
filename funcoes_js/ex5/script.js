let notas = [];
let soma = 0;
let mensagem = "";
for (let i = 0; i < 4; i++) {
    notas[i] = prompt("informe a nota");
    soma += parseFloat(notas[i]);
}
for (let j = 0; j < 4; j += 1) {
    mensagem += notas[j] + "\n";
}
media = soma / 4;
alert("As notas são:\n" + mensagem + "media é " + media);