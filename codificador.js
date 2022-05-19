var texto1 = document.querySelector("#texto1");
var texto2 = document.querySelector("#texto2");
var botonCodificar = document.querySelector("#botonCodificar");
var botonDecodificar = document.querySelector("#botonDecodificar");
var botonCopiar = document.querySelector("#botonCopiar");
          
function codificar() {
  let textoCodificado = "";
  let textoUno = texto1.value; 
  for (let i = 0; i < textoUno.length; i++ ) {
    let letra = textoUno[i];
    if (letra == "e") {
    textoCodificado += "enter";   
    } else if (letra == "i") {
    textoCodificado += "imes";    
    } else if (letra == "a") {
    textoCodificado += "ai";
    } else if (letra == "o") {
    textoCodificado += "ober";
    } else if (letra == "u") {
    textoCodificado += "ufat";    
    } else {
    textoCodificado += letra;
    }
  }
  texto1.value = "";
  texto1.focus();
  return texto2.value  = textoCodificado;
}

botonCodificar.onclick = codificar;

function decodificar() {  
  let textoDevuelto = texto1.value.toLowerCase();
  let textoDecodificado = textoDevuelto
  .replaceAll("imes","i")
  .replaceAll("ai","a")
  .replaceAll("enter","e")
  .replaceAll("ober","o")
  .replaceAll("ufat","u");
  texto1.value = "";
  texto1.focus();
  return texto2.value  = textoDecodificado;  
}

botonDecodificar.onclick = decodificar;

function copiar() {
  let textoCopiado = document.querySelector("#texto2");
  textoCopiado.select();
  document.execCommand("copy");
  // location.reload();
  
  alert("Su texto ha sido copiado.");
}

botonCopiar.onclick = copiar;