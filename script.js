const tarefa = document.querySelector('#nome');
const btn = document.querySelector('#btn');
const tLista = document.querySelector('#lista');
const contadorDisplay = document.querySelector('#contador');
const themeToggleBtn = document.querySelector('#temaToggle');
const body = document.body;

let cont = 1

function addTarefa(texto) {
    event.preventDefault();
  const li = document.createElement('li')
  const hora = new Date().toLocaleTimeString()
  li.textContent = `${texto} - ${hora} - ${cont}`
  tLista.appendChild(li)

  if (tLista.children.length > 10) {
    tLista.removeChild(tLista.firstChild)
  }
}

btn.addEventListener('click', function() {
  addTarefa(tarefa.value)
  contadorDisplay.textContent = cont
  cont++
});

  themeToggleBtn.addEventListener('click', function() {
    event.preventDefault();
    body.classList.toggle('light-theme');
    body.classList.toggle('dark-theme');
  })