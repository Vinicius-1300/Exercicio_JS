//Questões de 19 a 22

//19)
for (let x = 1; x < 11; x++) {
    let num = 1
    console.log(`${num} x ${x} = ${num * x}`)
}

//20)
var numero = Number(parseInt(prompt('Digite um número: ')))
for (let tab = 1; tab < 11; tab++) {
    console.log(`${numero} x ${tab} = ${numero * tab}`)
}

//21)
var numero_random = Math.random(0, 100)
console.log(numero_random)

//22)
var n = Number(parseInt(prompt('Qual o número? ')))
var divisao = Number(parseInt(prompt('Qual o número para a divisão? ')))
console.log(`Quociente da divião: ${n / divisao}`)
console.log(`Resto da divisão da divião: ${n % divisao}`)

