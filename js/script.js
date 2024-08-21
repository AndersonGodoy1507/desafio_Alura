var textInput = document.querySelector("#input-texto");
var outInput = document.querySelector("#saida");

function criptografar(){

    var texto = textInput.value;
  
    var resultadoCripto = texto.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat")
  
    
    document.getElementById("saida").innerHTML = '<textarea readonly id="input-texto">' + resultadoCripto + 
    '</textarea>' + '<button class="botao-copiar" id="copiar" onclick="copiar()">Copiar</button>'
}

function descriptografar(){

    var texto = textInput.value;

    var resultadoDescrip = texto.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
  
    document.getElementById("saida").innerHTML = '<textarea readonly id="input-texto">' + resultadoDescrip + 
    '</textarea>' + '<button class="botao-copiar" id="copiar" onclick="copiar()">Copiar</button>'
}


function copiar(){
    var textoCop = document.getElementById('input-texto');
    textoCop.select();
    document.execCommand('copy');
    alert("Copiado");
}