var original = document.getElementById('original');
var modificado = document.getElementById('modificado');
var contador = document.getElementById("contador_de_caracteres");
var efeito = document.getElementById("efeito");

original.addEventListener('input', (event) => {
    var texto = event.target.value;

    contador.innerHTML = texto.length;

    if(efeito.value == 'uppercase') {
        modificado.innerHTML = texto.toUpperCase();
    } else if(efeito.value == 'lowercase') {
        modificado.innerHTML = texto.toLowerCase();
    }
});

efeito.addEventListener('change', () => {
    var texto = original.value;

    if(efeito.value == 'uppercase') {
        modificado.innerHTML = texto.toUpperCase();
    } else if(efeito.value == 'lowercase') {
        modificado.innerHTML = texto.toLowerCase();
    }
})
