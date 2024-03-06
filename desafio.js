// Questão 1
let indice = 13;
let soma = 0;
let k = 0;

while (k < indice) {
  k++;
  soma = soma + k;
}

console.log(soma);

// Questão 2

function fibonacciSequence(n) {
  let fibonacci = [0, 1];

  while (fibonacci[fibonacci.length - 1] < n) {
    fibonacci.push(
      fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2]
    );
  }

  if (fibonacci.includes(n)) {
    return `O número ${n} pertence à sequência de Fibonacci.`;
  } else {
    return `O número ${n} não pertence à sequência de Fibonacci.`;
  }
}

// Exemplo de uso
let numero = 21;
console.log(fibonacciSequence(numero));

// Questão 5
function inverterString(str) {
  let resultado = "";
  for (let i = str.length - 1; i >= 0; i--) {
    resultado += str[i];
  }
  return resultado;
}

// Exemplo de uso
let minhaString = "Hello World!";
console.log("String original:", minhaString);
console.log("String invertida:", inverterString(minhaString));
