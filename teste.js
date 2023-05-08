
function calculaPontos(){
    pesoLixo = prompt("Digite o peso em quilogramas do lixo descartado(limite = 8KG): ")
    pontos = pesoLixo * 1000 
    if (pontos >= 8000){
        alert("Você depositou mais de 8kg, portanto os quilos que você depositou a mais não serão substituidos por pontos.")
        pontos = 8000
    }
}

calculaPontos()


let resultado = document.getElementById('pontos')
resultado.innerHTML = `Você ganhou ${pontos} pontos!`