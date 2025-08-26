// function mostrarTexto(){
//     console.log("O texto apareceu");
// }
// var contagem = 0
// function mostrarContagem(){
//     contagem++
//     console.log(contagem);  
//     if(contagem > 10){
//         para()
//     }  
// }
// minhaContagem = setInterval(mostrarContagem, 1000)
// function para(){
//     clearInterval(minhaContagem)
// }

// meuTimeout = setTimeout(mostrarTexto, 5000)
// function paraTime(){
//     clearTimeout(meuTimeout)
// }


var horas = document.getElementById("horas")
var minutos = document.getElementById("minutos")
var segundos = document.getElementById("segundos")
var textoSaudacao = document.getElementById('saudacaoTexto')

var diasSemana = ['DOMINGO','SEGUNDA-FEIRA','TERÇA-FEIRA','QUARTA-FEIRA','QUINTA-FEIRA','SEXTA-FEIRA','SÁBADO']

var cumprimento = ''

var atualizaRelogio = setInterval(function (){
    var dataAtual = new Date()
    var horaAtual = dataAtual.getHours()
    var minutoAtual = dataAtual.getMinutes()
    var segundoAtual = dataAtual.getSeconds()
    var diaAtual = dataAtual.getDay() 

    if(horaAtual < 10)
        horaAtual = "0" + horaAtual

    if(minutoAtual < 10)
        minutoAtual = "0" + minutoAtual

    if(segundoAtual < 10)
        segundoAtual = "0" + segundoAtual

    cumprimento = trocaSaudacao(horaAtual)

    horas.textContent = horaAtual
    minutos.textContent = minutoAtual
    segundos.textContent = segundoAtual
    textoSaudacao.textContent = `${cumprimento} / ${diasSemana[diaAtual]} `
})

function trocaSaudacao(hora){
    if(hora < 6 )
        return 'Boa Madrugada'
    else if(hora < 12)
        return 'Bom Dia'
    else if (hora < 18)
        return 'Boa tarde'
    else 
        return 'Boa noite'
}