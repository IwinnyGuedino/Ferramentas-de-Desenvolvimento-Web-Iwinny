document.addEventListener("DOMContentLoaded", function () {
  const linkContato = document.getElementById('mostrarContato');
  const div4 = document.getElementById('div4');
  const escondido = document.getElementById('escondido');

  linkContato.addEventListener('click', function (event) {
    event.preventDefault(); // Impede que o link recarregue a página
    div4.classList.add('clicked');
    escondido.style.display = 'block';
  });
});