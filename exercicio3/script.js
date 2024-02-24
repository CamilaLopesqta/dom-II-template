//1. Fazer uma função reutilizar o codigo como manipulação evento
const verificarTecla = (event) => {
    //evento pega interação usuario, shiftkey para ver se usou o shift
    if (event.shiftKey){
        //pegou elemento cujo id ra mensagem, imprimi na tela (innerHTML = "mensagem desejada")
        document.getElementById("mensagem").innerHTML = "ATENÇAO: SEGURANDO O SHIFT."
        //4. caso negativo quando eu não clico com o shift
    } else {
        document.getElementById("mensagem").innerHTML = ""
    }
}