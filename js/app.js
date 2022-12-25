const mostrar = () => {
    document.getElementById('img-right').style.display = 'none';
    document.getElementById('text').style.display = 'none';
    document.getElementById('btnCopiar').style.display = 'show';
    document.getElementById('btnCopiar').style.display = 'inherit';
}

const encriptar = () => {
    var texto = document.getElementById('entrada_texto').value.toLowerCase();

    var textoCifrado = texto.replace(/e/img, 'enter');

    textoCifrado = textoCifrado.replace(/i/img,'imes');
    textoCifrado = textoCifrado.replace(/a/img, 'ai');
    textoCifrado = textoCifrado.replace(/o/img, 'ober');
    textoCifrado = textoCifrado.replace(/u/img, 'ufat');

    document.getElementById('textArea').innerHTML = textoCifrado;
    return mostrar();
}

const desencriptar = () => {
    var texto = document.getElementById('entrada_texto').value.toLowerCase();

    var textoCifrado = texto.replace(/enter/img, 'e');

    textoCifrado = textoCifrado.replace(/imes/img, 'i');
    textoCifrado = textoCifrado.replace(/ai/img, 'a');
    textoCifrado = textoCifrado.replace(/ober/img, 'o');
    textoCifrado = textoCifrado.replace(/ufat/img, 'u');

    document.getElementById('textArea').innerHTML = textoCifrado;
    return mostrar();
}

const copy = () => {
    var contenido = document.querySelector('#textArea');
    contenido.select();
    document.execCommand('copy');
    alert('¡Copiado correctamente!');
}