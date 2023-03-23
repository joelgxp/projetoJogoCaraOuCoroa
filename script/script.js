const radioOpcoes = document.getElementsByTagName("moeda") // nem usei
const btnJogar = document.getElementById("jogar")
const divResultado = document.getElementById("resultado")

btnJogar.addEventListener("click", () => {
    const resultadoAleatorio = Math.random().toPrecision(1)
    // const opcaoSelecionada = document.querySelectorAll('input[type="radio"]')
    const opcaoSelecionada = document.querySelector('input[type="radio"]:checked')
    let srcMoeda = ""

    if (opcaoSelecionada) {
        if (resultadoAleatorio < 0.5) {
            srcMoeda = "./img/cara.png"
        } else {
            srcMoeda = "./img/coroa.png"
        }

        const gif = document.createElement("img")
        gif.src = "https://www.gifs-animados.net/original/1real.gif"
        gif.id = "resultadoImagem"

        const moeda = document.createElement("img")
        moeda.src = srcMoeda
        moeda.style.height = "150px"
        moeda.style.width = "150px"
             
        divResultado.appendChild(gif)
        setTimeout(() => {
            divResultado.removeChild(gif)
            divResultado.appendChild(moeda)
        }, 3000)
        
    }

})