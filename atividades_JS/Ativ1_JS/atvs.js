const prompt = require('prompt-sync')();

// Atividade 1 - Par ou ímpar
let number = parseInt(prompt("Digite um número e verifique se é ímpar ou par: "));

if (isNaN(number)) {
    console.log("O valor inserido não é um número.");
    return
}
if (number % 2 === 0) {
    console.log("O número é par!");
} 
if (number % 2 !== 0) {
    console.log("O número é ímpar!");
}


// Atividade 2 - Classificando a idade
let age = parseInt(prompt("Digite um número e verifique a sua classificação (se é criança, adolescente, adulto, idoso): "));

if (isNaN(age)) {
    console.log("Idade inválida");
} else {
    if (age <= 12) {
        console.log("Criança");
    } if (age >= 13 && age <= 17) {
        console.log("Adolescente");
    } if (age >= 18 && age <= 64) {
        console.log("Adulto");
    } else {
        console.log("Idoso");
    } 
};


// Atividade 3 - Uma nota
const grade = parseFloat(prompt("Digite a nota (de 0 a 10): "));

if (grade >= 7 && grade <= 10) {
    console.log("Aprovado");
} else if (grade >= 5 && grade < 7) {
    console.log("Recuperação");
} else if (grade >= 0 && grade < 5) {
    console.log("Reprovado");
} else if (grade < 0 || grade > 10 ) {
    console.log("Nota inválida");
} else if (isNaN(grade))  {
    console.log("Nota inválida");
}


// Atividade 4 - Usando switch-case
console.log("Escolha uma das opções abaixo:");
console.log("1. Cortina com Suporte");
console.log("2. Cortina sem Suporte");
console.log("3. Cortina com Argolas e Suportes");
console.log("4. Sair");

const option = parseInt(prompt("Digite o número da opção desejada: "));

switch(option) {
    case 1:
        console.log("Você escolheu 'Cortina com Suporte'.");
        break;
    case 2:
        console.log("Você escolheu 'Cortina sem Suporte'.");
        break;
    case 3:
        console.log("Você escolheu 'Cortina com Argolas e Suportes'.");
        break;
    case 4:
        console.log("Saindo...");
        break;
    default:
        console.log("Opção inválida. Tente novamente.");
        break;
}


// Atividade 5 - IMC
const weight = parseFloat(prompt("Digite seu peso em quilos (kg): "));
const height = parseFloat(prompt("Digite sua altura em metros (m): "));

const imc = weight / (height * height);

console.log("Seu IMC é: " + imc.toFixed(2));

if (imc < 18.5) {
    console.log("Categoria: Baixo peso");
} else if (imc >= 18.5 && imc < 24.9) {
    console.log("Categoria: Peso normal");
} else if (imc >= 25 && imc < 29.9) {
    console.log("Categoria: Sobrepeso");
} else if (imc >= 30) {
    console.log("Categoria: Obesidade");
}


// Atividade 6 - Tipos de triângulos
const sideA = parseFloat(prompt("Digite o comprimento do lado A: "));
const sideB = parseFloat(prompt("Digite o comprimento do lado B: "));
const sideC = parseFloat(prompt("Digite o comprimento do lado C: "));

// Verificando se os lados formam um triângulo
if (sideA < sideB + sideC && sideB < sideA + sideC && sideC < sideA + sideB) {
    console.log("Os lados formam um triângulo.");

    // Vamos verificar o tipo de triângulo
    if (sideA === sideB && sideB === sideC) {
        console.log("Tipo de triângulo: Equilátero");
    } else if (sideA === sideB || sideA === sideC || sideB === sideC) {
        console.log("Tipo de triângulo: Isósceles");
    } else {
        console.log("Tipo de triângulo: Escaleno");
    }
} else {
    console.log("Os lados não formam um triângulo.");
}


// Atividade 7 - Comprando maças
const quantityApples = parseInt(prompt("Digite o número de maçãs compradas: "), 10);

let priceApples;

if (quantityApples < 12) {
    priceApples = 0.30;
} else {
    priceApples = 0.25; 
}

const valueTotal = quantityApples * priceApples;
console.log("O valor total da compra é: R$ " + valueTotal.toFixed(2));


// Atividade 8 - Ordem crescente
const value1 = parseFloat(prompt("Digite o primeiro valor: "));
const value2 = parseFloat(prompt("Digite o segundo valor: "));

if (value1 < value2) {
    console.log("Ordem crescente: " + value1 + ", " + value2);
} else {
    console.log("Ordem crescente: " + value2 + ", " + value1);
}
// Como temos só 2 valores para comparar, o resultado é mais simples!


// Atividade 9 - Contagem decrescente
for (let i = 10; i >= 1; i--) {
    console.log(i);
}


// Atividade 10 - 10 vezes
const number10 = parseInt(prompt("Digite um número inteiro: "), 10);

for (let i = 0; i < 10; i++) {
    console.log(number10);
}


// Atividade 11 - Somando os 5 números
let totalSum = 0;

// Solicitar ao usuário 5 números para calcular a soma
for (let i = 1; i <= 5; i++) {
    const numero = parseFloat(prompt(`Digite o ${i}º número: `));
    totalSum += numero;
}

console.log("A soma total dos números é: " + totalSum);


// Atividade 12 - Tabuada
const  tableNumber = parseInt(prompt("Digite um número para ver a tabuada: "), 10);

// Exibindo a tabuada do número
console.log(`Tabuada do ${ tableNumber}:`);
for (let i = 1; i <= 10; i++) {
    console.log(`${ tableNumber} x ${i} = ${ tableNumber * i}`);
}


// Atividade 13 - Zero para parar
let sum = 0;
let count = 0;
let numberCount;

// Recebe números decimais até que o usuário digite 0
do {
    numberCount = parseFloat(prompt("Digite um número decimal (ou 0 para finalizar): "));
    if (numberCount !== 0) {
         sum += numberCount;
         count++;
    }
} while (numberCount !== 0);

// Calcula e exibe a média, se houver números válidos
if ( count > 0) {
    const average = sum /  count;
    console.log("A média aritmética dos números é: " + average);
} else {
    console.log("Nenhum número válido foi digitado.");
}


// Atividade 14 - Calculando Fatorial
const factorialNumber = parseInt(prompt("Digite um número para calcular o fatorial: "), 10);

let factorial = 1;

// Calcula o fatorial usando um loop for
for (let i = 1; i <= factorialNumber; i++) {
    factorial *= i;
}

console.log(`O fatorial de ${factorialNumber} é: ${factorial}`);


// Atividade 15 - Sequência de Fibonacci
// Necessário iniciar o programa com os primeiros dois números da sequência de Fibonacci
let fib1 = 0;
let fib2 = 1;

// Imprimindo os primeiros 10 números da sequência de Fibonacci
console.log("Primeiros 10 números da sequência de Fibonacci:");

for (let i = 0; i < 10; i++) {
    console.log(fib1);
    
    // Calculando o próximo número na sequência
    let nextFib = fib1 + fib2;
    
    // Atualizando os números para a próxima iteração
    fib1 = fib2;
    fib2 = nextFib;
}