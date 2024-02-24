function addElemento() {
  //Inserindo o elemento 0
  //1. Criar o elemento que sesejamos colocar
  const novoItem0 = document.createElement("li");
  //2. Criar o conteúdo que vamos colocar
  const novoConteudo0 = document.createTextNode("Item 0");
  //3. Adicionar o conteúdo ao elemento
  novoItem0.appendChild(novoConteudo0);
  //4. Identifica onde vamos inserir
  const listaAtual = document.getElementById("lista");
  //5. Inserir o conteúdo e o elemento onde desejamos escolhendo a posição referenciada
  listaAtual.insertAdjacentElement("afterbegin", novoItem0);

  //Inserindo o elemento 5
  const novoItem5 = document.createElement("li");
  const novoConteudo5 = document.createTextNode("Item 5");
  novoItem5.appendChild(novoConteudo5);
  listaAtual.insertAdjacentElement("beforeend", novoItem5);
}

addElemento();
