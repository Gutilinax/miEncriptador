

var botonEncriptar = document.querySelector("#btn-encriptar");
var botonDesencriptar = document.querySelector("#btn-desencriptar");
var botonCopiar = document.querySelector("#btn-copy");


botonEncriptar.addEventListener("click", function(event){

    event.preventDefault();
    
    var cadena = document.querySelector("#input-texto").value;
    var vocales = ["e", "i", "a", "o", "u"];
    var reemplazos = ["enter", "imes", "ai", "ober", "ufat"];


        for(var i = 0; i < vocales.length; i++){

        cadena = cadena.replaceAll(vocales[i], reemplazos[i]);

    }

    document.querySelector("#msg").value= cadena;

})

botonDesencriptar.addEventListener("click", function(event){

    event.preventDefault();
    
    var cadena = document.querySelector("#input-texto").value;
    var vocales = ["e", "i", "a", "o", "u"];
    var reemplazos = ["enter", "imes", "ai", "ober", "ufat"];


        for(var i = 0; i < vocales.length; i++){

        cadena = cadena.replaceAll(reemplazos[i], vocales[i]);

    }

    document.querySelector("#msg").value= cadena;

})

botonCopiar.addEventListener("click", function(event){

event.preventDefault;

var textoCopiado = document.querySelector("#msg").value;

document.querySelector("#input-texto").value = textoCopiado;


})