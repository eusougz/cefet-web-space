const botoes = document.querySelectorAll('.botao-expandir-retrair');
botoes.forEach(function (botaoEl) {
    botaoEl.addEventListener('click', expandirERetrair)
})

function expandirERetrair(e) {
    const botaoEl = e.currentTarget;
    const paragrafoEl = botaoEl.parentNode;
    paragrafoEl.classList.toggle('expandido');
    botaoEl.innerHTML = botaoEl.innerHTML === '+' ? '-' : '+';
}