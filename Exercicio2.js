//Questões de 8 a 12

//8)
var val1 = Number(prompt('1° valor: '));
var val2 = Number(prompt('2° valor: '));
var val3 = Number(prompt('3° valor: '));
ordem.sort(val1, val2, val3);

//9)
var peso =  Number(prompt('Qual o seu peso? '));
var altura = Number(prompt('Qual a sua altura? '));
var imc = parseFloat(peso/altura).toFixed(2);

if (imc < 18.5) {
    console.log('Abaixo do peso')
}
else if (imc >= 18.6 && imc <= 24.5) {
    console.log('Peso ideal (parabéns)')
}
else if (imc >= 25 && imc <= 29.9) {
    console.log('Levemente acima do peso')
}
else if (imc >= 30 && imc <= 34.9) {
   console.log('Obesidade grau 1')
}
else if (imc >= 35 && imc <= 39.9) {
    console.log('Obesidade grau 2 (severa)')
}
else if (imc >= 40) {
    console.log('Obesidade grau 3 (morbida)')
}

//10)
var nota1 = Number(prompt('1° Nota: '));
var nota2 = Number(prompt('2° Nota: '));
var nota3 = Number(prompt('3° Nota: '));

var media = parseFloat((nota1 + nota2 + nota3) / 3).toFixed(2)
console.log(`Media do aluno  foi ${media}`)

//11)
var nome_aluno = String(prompt('Qual o seu nome? ')).toUpperCase[0]
var nota1 = Number(prompt('1° Nota: '));
var nota2 = Number(prompt('2° Nota: '));
var nota3 = Number(prompt('3° Nota: '));
var nota4 = Number(prompt('4° Nota: '))

var media = parseFloat((nota1 + nota2 + nota3 + nota4) / 4).toFixed(2)
console.log(`Aluno: ${nome_aluno}`)

if (media >= 7) {
    console.log('Aprovado')
} else {
    console.log('Reprovado')
}

//12)
var produto_valor = parseFloat(prompt('Valor do produto: ')).toFixed(2)
var opcoes = Number(prompt(`Escolha entre as opções: 
                    1 - A vista mo em dinheiro ou pix (15% de desconto)
                    2 - A vista no cartão de credito (10% de deconto)
                    3 - Parcelar no cartão em duas vezes sem juros
                    4 - Parcelar no cartão em 3 vezes com juros (10%)`))
if (opcoes == 1) {
    preco_final = produto_valor * (15/100)
    console.log(preco_final)
}
else if (opcoes == 2) {
    preco_final = produto_valor * (10/100)
    console.log(preco_final)
}
else if (opcoes == 3) {
    parcelado = produto_valor / 2
    console.log(parcelado)
}
else {
    parcelado_juros = (((produto_valor / 3) * (10/100)) + produto_valor / 3)
    console.log(parcelado_juros)
}

