//1) 
var a = Number(prompt('Digite um valor: '))
var b = Number(prompt('Digite outro valor: '))
var c = Number(prompt('Digite o ultimo valor valor: '))
var soma = a + b
if (soma < c) {
    console.log(`A soma ${soma} é menor que ${c}`)
} else {
    console.log(`A soma ${soma} é maior que ${c}`)
}
//2)
var numero = Number(prompt('Escreva algum número: '))
if (numero % 2 == 0 && numero > 0) {
    console.log('O numero é par e positivo')
} else {
    console.log('O numero é impar e negativo')
}
//3)
var A = Number(prompt('Valor A: '))
var B = Number(prompt('Valor B: '))
if (A == B) {
    let C = A * B
    console.log(C)
} else {
    let C = A + B
    console.log(C)
}
//4)
var resposta = Number(prompt('Qual valor número pensou? '))
var ant = resposta - 1
var suc = resposta + 1
console.log(`Antecessor ${ant} e sucessor ${suc}`)
//5)
var salario_minimo = 1525
var salario_usuario = prompt('Qual o seu salário? ')
var divisao = parseFloat(salario_usuario / salario_minimo)
console.log(`Total de salarios minimos: ${divisao}`)
//6)
var valor = Number(prompt('Digite um valor: '))
var reajuste = parseFloat(valor * (5/100))
console.log(`Valor apos o ajuste é ${reajuste}`)
//7)
let valor_logico1 = true;
let valor_logico2 = false;
if (valor_logico1 === true && valor_logico2 === true) {
  console.log("Ambos são verdadeiros.");
}
else if (valor_logico1 === false && valor_logico2 === false) {
  console.log("Ambos são falsos.");
}
else {
  console.log("Os valores são diferentes.");
}