//calculadora IA


//prev = n1, current = n2,


let input = document.getElementById("display");  // Armazena o número atual no visor
let previousInput = null; // Armazena o número anterior (para operações)
let operator = null;      // Armazena o operador selecionado
let op;

// Atualiza o display da calculadora
//function updateDisplay(){
//    document.getElementById("display").value = "0";
//}

// Função para adicionar números ao visor
function number(value) {

    input.value += value;
    /*if (currentInput === "") {
        currentInput = number.toString(); // Substitui o "0" inicial pelo número
    } else {
        currentInput += number.toString(); // Adiciona o número à string atual
    }
    updateDisplay();*/
}

// Função para limpar o visor
function clear() {
    input.value = ""; // Reseta o número atual
    /*previousInput = null; // Limpa o número anterior
    operator = null; // Limpa o operador
    updateDisplay();*/
}
// Função para selecionar o operador (+, -, *, /)
function op(value) {
    //let prev = parseInt(number(value));
    //input.value = "";
    input.value += value;
    //if (previousInput === null) {
    //    previousInput = input; // Armazena o número atual
    //    operator = op; // Define o operador
    //    input = "0"; // Reseta o visor para o próximo número
    //} else if (input !== "0") {
        //calculateResult(); // Se já houver uma operação, calcula o resultado
    //    previousInput = input; // Armazena o resultado
    //    operator = op; // Atualiza o operador
    //    input = "0"; // Reseta o visor para o próximo número
    //}
    //updateDisplay();
}
function number(value){
    input.value += value;
}

// Função para calcular o resultado
function calcular() {
    let result;
    //let prev = parseFloat(previousInput);
    let current = parseInt(input);

    //if (isNaN(prev) || isNaN(current)) return;

    switch (op) {
        case "+":
            result = prev + current;
            break;
        case "-":
            result = prev - current;
            break;
        case "*":
            result = prev * current;
            break;
        case "/":
            if (current === 0) {
                result = "Erro"; // Evita a divisão por zero
            } else {
                result = prev / current;
            }
            break;
        //default:
        //    return;
    }

    input.value = result; // Atualiza o visor com o resultado
    //operator = null; // Reseta o operador
    //previousInput = null; // Limpa o número anterior
    //updateDisplay();
}


// Função para inicializar a calculadora
/*function initializeCalculator() {
    updateDisplay();
}*/

// Chama a função de inicialização assim que o script for carregado
//initializeCalculator();
