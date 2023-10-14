var setaDireita = window.document.getElementById("seta-direita")
var Leonardo = window.document.getElementById("Leonardo")
var Samantha = window.document.getElementById("Samantha")
var Bruna = window.document.getElementById("Bruna")
var setaEsquerda = window.document.getElementById("seta-esquerda")

function RolarParaDireita() {
    Bruna.style ="display:none"
    Samantha.style ="display:flex"
    setaEsquerda.style ="display:flex"
    setaDireita.style ="display:none"
}

function RolarParaEsquerda() {
    Samantha.style ="display:none"
    Bruna.style ="display:flex"
    setaDireita.style ="display:flex"
    setaEsquerda.style ="display:none"
}