// // Mostra uma mensagem no console
// console.log("Salve, rapaziadinha top")

// // Caixinha de alerta
// // alert("Testando aqui pra ver se vai")

// var nome = "Cristiano"
// var numero = 7
// var pulo = 2.10
// var theBest = true

// console.log("O nome:" + nome);
// console.log("De número:", numero);
// console.log(pulo);
// console.log(theBest);

// console.log(typeof(pulo))

// var nulo = null
// var indefinido = undefined

// console.log(typeof(nulo))
// console.log(typeof(indefinido))


// // OPERADORES ARITIMÉTICOS
// // +,-,*,/,%

// var a = 10, b = 5

// console.log("Soma:", a + b);
// console.log("Subtração:", a - b);
// console.log("Multi:", a * b);
// console.log("Div:", a / b);
// console.log("Módulo:", a % b);


// // OPERADORES LÓGICOS
// // E , OU, NÃO
// // &&, ||, !

// var verdade = true
// var mentira = false

// console.log(verdade && mentira);
// console.log(verdade || mentira);
// console.log(verdade && !mentira);
// console.log("FIM");

// // OPERADORES RELACIONAIS
// // >, <, >=, <=, ==, !=, ===, !==

// var x = 65, y = 32 , z = "65"

// console.log(x > y)
// console.log(x < y)
// console.log(x >= y)
// console.log(x <= y)
// console.log(x == y)
// console.log(x != y)

// console.log(x === z)
// console.log(x !== z)

// // Interagir com o usuário

// var time = prompt("Digite seu clube de coração")

// console.log("Seu time é o: ", time);


// DESVIOS CONDICIONAIS
// IF = SE 
var estaVivo = true

if(estaVivo == true){
    console.log("Você está vivo");
}else if(estaVivo == false){
    console.log("Estás muerto ☠");
}else{
    console.log("Você não tá nada")
}

// SWITCH = ESCOLHA
var camisa = "Laranja"

switch(camisa){
    case "Azul":
        console.log("Ganhou um voucher");
    break
    case "Branco":
        console.log("Ganhou playstation");
    break
    case "Vermelho":
        console.log("Ganhou uma ferrari");
    break
    default:
        console.log("Camisa inválida");
    break  
}


// LAÇOS DE REPETIÇÃO = LOOPS

// FOR = PARA

for(var i = 0; i < 5; i++){
    console.log("Estoy aquí");
}
console.log("Acabou o for");

// WHILE = ENQUANTO

var c = 1
while(c < 10){
    console.log("Entrei no loop")
    c++
}

// FUNÇÕES 
// SÓ EXECUÇÃO
function teste(){
    console.log("Funcionou sim o teste")
}
console.log(teste);
teste()

// COM PARÂMETROS
function teste2(parametro){
    console.log("O parametro é:", parametro)
}

teste2("arroz")

// COM RETORNO

function calculo(n1, n2){
    let resultado = n1 + n2
    return resultado
}

var final = calculo(3,5)

console.log("A conta deu:", final)


// EXERCÍCIO
var idade1 = prompt("Idade 1: ")
var idade2 = prompt("Idade 2: ")

var valorFinal = 0
// ingresso 1
if(idade1 < 18){
    valorFinal = valorFinal + 15
}else if(idade1 < 60){
    valorFinal = valorFinal + 30
}else{
    valorFinal = valorFinal + 20
}
// ingresso 2
if(idade2 < 18){
    valorFinal = valorFinal + 15
}else if(idade2 < 60){
    valorFinal = valorFinal + 30
}else{
    valorFinal = valorFinal + 20
}

console.log("Valor final: ", valorFinal)