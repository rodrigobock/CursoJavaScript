let num = [5,8,4]
num[3] = 6
num.push(7)

console.log(`valores do nosso vetor: ${num}`)
console.log(`Tamanho do array: ${num.length}`)
console.log(`Ordem crescente: ${num.sort()}`)


for(let pos in num){
    console.log(num[pos])
}

console.log('numero 7 está na posição: ' + num.indexOf(7))