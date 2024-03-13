var textInput = document.querySelector("#textareaInput");
var outInput = document.querySelector("#sectionOutput");

function cryptography(){
    var texto = textInput.value;

    var resultCrypto = texto.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai")
    .replace(/o/g, "ober").replace(/u/g, "ufat");

    document.getElementById("sectionOutput").innerHTML = '<textarea readonly id="textareaInput">' + resultCrypto + 
    '</textarea>' + '<div class="divBttnCopy"><button class="bttnCopy" id="bttnCopyId" onclick="copyContent()">Copiar</button></div';
}


function decryptography(){
    var texto = textInput.value;

    var resultDecrypto = texto.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a")
    .replace(/ober/g, "o").replace(/ufat/g, "u");

    document.getElementById("sectionOutput").innerHTML = '<textarea readonly id="textareaInput">' + resultDecrypto + 
    '</textarea>' + '<div class="divBttnCopy"><button class="bttnCopy" id="bttnCopyId" onclick="copyContent()">Copiar</button></div>';
}

function copyContent() {
    var msgCopy = document.querySelector("#sectionOutput textarea");

    try {
        navigator.clipboard.writeText(msgCopy.value);
        alert("Texto copiado: " + msgCopy.value);
    } catch (err) {
        console.error('Erro ao copiar: ', err);
    }
}
