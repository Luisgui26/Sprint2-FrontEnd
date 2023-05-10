
function calculaPontos(){
    pesoLixo = prompt("Digite o peso em quilogramas do lixo descartado(limite = 8KG): ")
    pontos = pesoLixo * 1000 
    if (pontos >= 8000 && pontos != 0){
        alert("Você depositou mais de 8kg, portanto os quilos que você depositou a mais não serão substituidos por pontos.")
        pontos = 8000
    } 
}

calculaPontos()

let resultado = document.getElementById('pontos')
resultado.innerHTML = `Você ganhou ${pontos} pontos!`

function verificaPontos1(){
    if (pontos >= 2000) {
     resp = confirm('Resgatar prêmio1?')
     if (resp){
        alert('Prêmio resgatado com sucesso!')
     } 
    } else{
        alert('Você ainda não possui pontos o suficiente para resgatar esse prêmio.')
        
    }

}

function verificaPontos2(){2
    if (pontos >= 3000) {
     resp = confirm('Resgatar prêmio2?')
     if (resp){
        alert('Prêmio resgatado com sucesso!')
     } 
    } else{
        alert('Você ainda não possui pontos o suficiente para resgatar esse prêmio.')
    }
}

function verificaPontos3(){
    if (pontos >= 4000) {
     resp = confirm('Resgatar prêmio3?')
     if (resp){
        alert('Prêmio resgatado com sucesso!')
     }
     
    } else{
        alert('Você ainda não possui pontos o suficiente para resgatar esse prêmio.')
    }
}
