var texto1 = document.querySelector("#texto1");
var texto2 = document.querySelector("#texto2");
var botonCodificar = document.querySelector("#botonCodificar");
var botonDecodificar = document.querySelector("#botonDecodificar");

function codificar() {

  let textoCodificado = "";
  let textoUno = texto1.value.toLowerCase(); 

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

      texto1.value = "";
      texto1.focus();
      return texto2.value  = textoCodificado;
    }
}

botonCodificar.onclick = codificar;



function decodificar() {

  let textoDos = texto1.value.toLowerCase();

  for (let i = 0; i < textoDos.length; i++ ) {

    let letra2 = textoDos[i];

    if (letra2 == "enter") {
      textoDesencriptado +=  "e";   
    } else if (letra2 == "imes") {
      textoDesencriptado += "i";    
    } else if (letra2 == "ai") {
      textoDesencriptado += "a";
    } else if (letra2 == "ober") {
      textoDesencriptado += "o";
    } else if (letra2 == "ufat") {
      textoDesencriptado += "u";    
    } else {
      textoDesencriptado += letra2;
    }

  }    
  texto1.value = "";
  texto1.focus();  
  return texto2.value  = textoDesencriptado;
}

botonDecodificar.onclick = decodificar;