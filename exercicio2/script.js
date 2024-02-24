//1. Criar uma função para reutilizar a lógica do código pois estamos fazendo uma ação
        
const mudarInputPassword = (event) => {
        //2. Anular o comportamento padrão da tag
    event.preventDefault()
        //3. Identificar e pegar o elemento cujo o id é o password 
        //(elemento que quer fazer a alteração)
    const meuInputDeSenha = document.getElementById("password")
        // 4. Alterou o atributo desse elemento 
        //(o que vou mudar, para o qual o atributo eu desejo mudar)
    meuInputDeSenha.setAttribute("type","password")
}

function alterarModoDeEstilo(event){
    event.preventDefault()
    const form = document.querySelector(".light")
    //form.classList.remove(".light")
    //form.classList.add(".dark")
    form.classList.toggle("dark")
}

