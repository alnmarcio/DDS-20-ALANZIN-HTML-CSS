var produto1 = {
    nome: "Coca cola",
    categoria: "Bebidas",
    quantidade: 30,
    tamanhos: ["200ml", "Lata", "600ml", "2L"],
    // Criação de um método interno
    descricao: function(){
        // Uso do this como referencial
        console.log("O produto", this.nome, 
        "é da categoria", this.categoria)
    },
    // Criação de um método externo
    verTamanhos : opcoes
}
var produto2 = {
    nome: "Salgado",
    categoria: "Comida",
    quantidade: 10,
    tamanhos: ["Pequeno", "Médio", "Grande"],
    descricao: function(){
        console.log("O produto", this.nome, 
        "é da categoria", this.categoria)
    },
    verTamanhos : opcoes
}
function opcoes(){
    /*
    let tmhs = ""
    for(var i in this.tamanhos){
        tmhs += this.tamanhos[i] + ","
    }
    console.log("As opções são:", tmhs);
    */
    console.log("As opções são:", this.tamanhos.toString());
}

produto1.descricao()
produto1.verTamanhos()

produto2.descricao()
produto2.verTamanhos()

//Crie um terceiro produto, pedindo as informações do mesmo para o usuário através do prompt
var produto3 = {
    nome: prompt("nome:"),
    categoria: prompt("categoria"),
    quantidade: prompt("quantidade:"),
    tamanhos: prompt("tamanhos: (sepados por vírgula)").split(","),
    descricao: function(){
        console.log("O produto", this.nome, 
        "é da categoria", this.categoria)
    },
    verTamanhos : opcoes
}

produto3.descricao()
produto3.verTamanhos()