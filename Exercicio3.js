//Questões de 13 a 17

//13)
var nome = String(prompt('Qual o seu nome? '))
var idade = Number(prompt('Qual a sua idade? '))

if (idade >= 18) {
    console.log(`Olá ${nome}, você é maior de idade`)
} else {
    console.log(`Olá ${nome}, você é menor de idade`)
}

//14)
var A = 10
var B = 'Dez'
A = B
B = A
console.log('Valor de A ' + A)
console.log('Valor de B ' + B)

//15)
var ano_nascimento = Number(prompt('Seu ano de nascimneto: ')) 
var ano_atual = new Date
var anos_vividos = ano_atual.getFullYear - ano_nascimento
var meses_vividos = (ano_atual.getFullYear - ano_nascimento) * 12
var dias_vividos = (ano_atual.getFullYear - ano_nascimento) * 365
console.log(`${anos_vividos} anos ${meses_vividos} meses e ${dias_vividos} dias de vida`)
//16)
var lado1 = Number(prompt('1° valor: '))
var lado2 = Number(prompt('2° valor: '))
var lado3 = Number(prompt('3° valor: '))

if (lado1 == lado2 && lado1 == lado3 && lado2 == lado3) {
    console.log('Triangulo equilátero')
}
else if (lado1 == lado2 || lado1 == lado3 || lado2 == lado3) {
    console.log('Triangulo isóceles')
}
else {
    console.log('Triangulo escaleno')
}

//17)
var F = Number(prompt('Digite a temperatura: '))
var C = ((5 * (F - 32)) / 9)
console.log('Temperatura em fahrenheit: ' + F)
console.log('Conversão para celsius: ' + C)