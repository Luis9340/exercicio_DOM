const form = document.getElementById('form-comparativo');

let formcomparative = false;

function validarNumero(primeiroNumero, SegundoNumero) {
    return SegundoNumero > primeiroNumero;
}
form.addEventListener('submit', function (e) {
    e.preventDefault();

    let primeiroNumero = parseFloat(document.getElementById('valor-a').value);
    let SegundoNumero = parseFloat(document.getElementById('valor-b').value);
    const mensagemSucesso = `O número <b>${SegundoNumero}</b> é válido, pois é maior que o número <b>${primeiroNumero}</b>.`
    const mensagemErro = `O número <b>${SegundoNumero}</b> não é válido, pois ele precisa ser menor que o número <b>${primeiroNumero}</b>.`

    if (validarNumero(primeiroNumero, SegundoNumero)){
        const containerMensagemSucesso = document.querySelector('.success-message');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';
        document.querySelector('.error-message').style.display = 'none';
        document.querySelector('.success-message').style.display = 'block';
        primeiroNumero.value = '';
        SegundoNumero.value = '';
    } 
    else {
        const containerMensagemErro = document.querySelector('.error-message');
        containerMensagemErro.innerHTML = mensagemErro;
        containerMensagemErro.style.display = 'block';
        document.querySelector('.error-message').style.display = 'block';
        document.querySelector('.success-message').style.display = 'none';
        
    }
});