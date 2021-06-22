const constanteGravitacional = document.querySelector('#constante').value
const massa1El = document.querySelector('#massa1')
const massa2El = document.querySelector('#massa2')
const distanciaEl = document.querySelector('#distancia')
const resultadoEl = document.querySelector('#resultado')

const calcularBtn = document.querySelector('#calcular')
calcularBtn.addEventListener('click', calcularForcaAtracao)

function calcularForcaAtracao() {
    const massa1 = massa1El.value
    const massa2 = massa2El.value
    const distancia = distanciaEl.value
    resultadoEl.value = (constanteGravitacional * massa1 * massa2)/(distancia * distancia)
}