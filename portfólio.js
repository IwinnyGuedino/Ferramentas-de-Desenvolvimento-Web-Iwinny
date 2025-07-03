// Pegar o lin e a div das imagens
const imagensLink = document.getElementById("imagens");
const imagensDiv = document.getElementById("imagensEscondidas");

imagensLink.addEventListener("click", function(event){
  event.preventDefault(); //Impede que atualiza a página

  //Mostrar Imagens
  imagensDiv.classList.toggle("mostrar");
});

// Pegar o lin e a do contato
const contatoLink = document.getElementById("contato");
const contatoDiv = document.getElementById("contatoEscondido");

contatoLink.addEventListener("click", function(event){
  event.preventDefault(); //Impede que atualiza a página

  //Mostrar contato
  contatoDiv.classList.toggle("mostrar");
});