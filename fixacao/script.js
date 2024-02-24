const insereItem = (event) => {
  const novoItem = document.createElement("li");
  const textoInput = document.getElementById("meu-input").value;
  const novoConteudo = document.createTextNode(textoInput);
  novoItem.appendChild(novoConteudo);
  const listaAtual = document.getElementById("lista");
  listaAtual.insertAdjacentElement("beforeend", novoItem);
};
