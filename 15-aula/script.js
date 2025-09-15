// Com array
var alunos = ["Pedro","Tiago","Barquinho"]
var media =  [7,8,4]

console.log("O aluno", alunos[0], "teve média de", media[2])

// criando um objeto
var aluno1 = {
    //chave : "Valor",
    nome : "Pedro",
    media : 7
}

var aluno2 = {
    nome : "Jonas",
    media : 9
}

// Acessa todo o objeto
console.log(aluno1)

// Acessa uma propriedade daquele objeto
console.log(aluno1.nome)
console.log(aluno2.media)

// Crie um objeto de escola, com 4 propriedades

var intervalo = {
    horaInicio : "20h00",
    horaFim : "21h00",
    duracao: "10 min",
    local: "Pátio"
}

console.log("O intervalo inicia às", intervalo.horaInicio, 
            "e finaliza às", intervalo.horaFim);

// Acessando um valor passando uma chave
console.log("Onde: ", intervalo["local"])


// Criando um objeto vazio
var garrafa = {}
console.log(garrafa);

// Adicionando uma propriedade em um objeto já existente
garrafa.cor = "Azul"
garrafa.preco = 600
garrafa.tamanho = "2L"
garrafa["marca"] = "StaNey"

console.log(garrafa);

// Alterar uma propriedade já existente
garrafa.cor = "Roxo"
garrafa["marca"] = "Topoué"
console.log(garrafa);

// Peça ao usuário, uma nova proprieade e um novo valor
// para ser adicionado na garrafa
// var novaPropriedade = prompt("Nova propriedade:")
// garrafa[novaPropriedade] = prompt("Digite um valor:")
// console.log(garrafa);
// console.log(garrafa.quantidade);

// Criar método
var animal1 = {
    nome : "Tom",
    especie : "Gato",
    raca : "Adidas",
    andar : function(){
        console.log("Estou andando, acredite");
    },
    falar: function(){
        console.log("MIAAAAAAAAUUU")
    }
}

console.log(animal1);
console.log(animal1.andar);
animal1.andar()