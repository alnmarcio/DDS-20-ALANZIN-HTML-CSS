// Criação do array
var array = ["Largartixa", 5, "dois", 8.7, true]

// Mostra todo o array
console.log(array)

// Mostra valor de posição espefícica do array
console.log(array[1])

// Substitui um valor 
array[2] = "Outro Valor"

console.log(array)


//Laço de repetição pra interagir com o array
var times = ["Real Madrid", "Liverpool", "Inter", "Chelsea","Manchester"]

// percorrendo o array com final definido
for (var i = 0; i < 4; i++){
    console.log(times[i])
}
console.log("----------------")
// percorrendo o array descobrindo o tamanho dele
for (var i = 0; i < times.length; i++){
    console.log(times[i])
}
console.log("----------------")

for(var index in times){
    console.log(times[index])
}

// Manipulação de arrays
var frutas = ["Maçã", "Uva", "Pêra"]

console.log(frutas);

// push - Adiciona no fim do array 
frutas.push("Laranja")
console.log(frutas);

// pop - retira o último valor, e te retorna
var frutaTirada = frutas.pop()
console.log("Fruta tirada:", frutaTirada);
console.log(frutas);

// shift - retira o primeiro valor, e te retorna
var exPrimeiraFruta = frutas.shift()
console.log("Ex:", exPrimeiraFruta)

// unshift - adiciona no inicio do array
frutas.unshift("Tomate")
console.log(frutas);