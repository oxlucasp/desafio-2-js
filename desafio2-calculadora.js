// Declaração de variáveis
const hero = "Perro en llamas";
let victory = 99;
let defeated = 30;
let level;
let calculation;

// Função para calcular o ranking
function ranking(victory, defeated) {
    calculation = victory - defeated;

    // Estrutura de decisão conforme a vitória
    if (victory < 10) {
        level = "Ferro";
        message = "Você está no nível FERRO";
    } else if (victory >= 11 && victory <= 20) {
        level = "Bronze";
        message = "Você está no nível BRONZE";
    } else if (victory >= 21 && victory <= 50) {
        level = "Prata";
        message = "Você está no nível PRATA";
    } else if (victory >= 51 && victory <= 80) {
        level = "Ouro";
        message = "Você está no nível OURO";
    } else if (victory >= 81 && victory <= 90) {
        level = "Diamante";
        message = "Você está no nível DIAMANTE";
    } else if (victory >= 91 && victory <= 100) {
        level = "Lendario";
        message = "Você está no nível LENDÁRIO";
    } else {
        level = "Imortal";
        message = "Você está no nível IMORTAL";
    }

    return {
        calculation,
        level,
    };
}

// Chamada da função
const result = ranking(victory, defeated);

// Mensagem de saída
console.log("O heroi " + hero + " tem o saldo de " + result.calculation + " e está no nível " + result.level);
