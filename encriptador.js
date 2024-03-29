function encriptar(){
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementById("muñeco");
    let textoCifrado = texto

        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");

    if (texto.length != 0) {
        texto = textoCifrado;
        tituloMensaje.textContent = "Texto encriptado con éxito";
        parrafo.textContent = "";
        muñeco.src = "./images/encriptado.jpg";
        document.getElementById('texto').value = textoCifrado;
        
    } else{
        muñeco.src = "./images/muñeco.png";
        swal("Oooops!", "Debes ingresar u texto", "warning")
    }
}

function desencriptar(){
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementById("muñeco");
    let textoCifrado = texto
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");

if (texto.length != 0){
    document.getElementById('texto').value = textoCifrado;
    tituloMensaje.textContent = "Texto desencriptado con éxito";
    parrafo.textContent = "";
    muñeco.src = "./images/desencriptado.jpg";
    
    } else {
        muñeco.src = "./images/muñeco.png";
        tituloMensaje.textContent = "Ningun mensaje fue encontrado"
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar"
        swal("Oooops!", "Debes ingresar u texto", "warning")
    }
}
// Si le quito la funcion si me deja hacer la accion de refresh pero si dejo la funcion activa no hace la accion//

function refresh(){
let refresh = document.getElementById('refresh');
refresh.addEventListener('click', _ => {
            location.reload();
})
}

