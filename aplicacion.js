document.addEventListener("DOMContentLoaded", function () {
console.log("---inicio aplicacion");
  //--- .seccion1mensaje
const texto = document.querySelector(".seccion1mensaje");
  //--- .seccion2mensaje
const mensaje = document.querySelector(".seccion2mensaje");
  //--- .seccion2info
const info = document.querySelector(".seccion2info");
  //--- .botoncopiar
const copiarbtn = document.querySelector(".botoncopiar");
console.log("---se han declarado las variables");

texto.value = "";

mensaje.value = "";

  //funcion que encripta texto
function encriptar(textoEncriptado) {
    let llavesEncriptacion =[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    textoEncriptado = textoEncriptado.toLowerCase();
    for (let i = 0; i < llavesEncriptacion.length; i++) {
        if (textoEncriptado.includes(llavesEncriptacion[i][0])) {
        textoEncriptado = textoEncriptado.replaceAll(llavesEncriptacion[i][0],llavesEncriptacion[i][1]);
    }
    }
    return textoEncriptado;
}
console.log("---funcion encriptar");
  //--- funcion encriptar Btn
window.encriptarBtn = function () {
    const mensajeEncriptado = encriptar(texto.value);
    mensaje.value = mensajeEncriptado;
    mensaje.setAttribute("rows", "8");
    texto.value = "";
    mensaje.style.backgroudImage = "none";
    info.style.display = "none";
    copiarbtn.style.display = "flex";
    copiarbtn.focus();
    console.log("---boton encriptar presionado");
};

  //--- funcion desencriptar
function desencriptar(textoDesencriptado) {
    let llavesDesencriptacion = [["enter","e"],["imes","i"],["ai","a"],["ober","o"],["ufat","u"]];
    textoDesencriptado = textoDesencriptado.toLowerCase();
    for (let i = 0; i < llavesDesencriptacion.length; i++) {
    if (textoDesencriptado.includes(llavesDesencriptacion[i][0])) {
        textoDesencriptado = textoDesencriptado.replaceAll(llavesDesencriptacion[i][0],llavesDesencriptacion[i][1]);
    }
    }
    return textoDesencriptado;
}
console.log("---funcion desencriptacion");
  //funcion btn desencriptar
window.desencriptarBtn = function () {
    const mensajeDesencriptado = desencriptar(texto.value);
    mensaje.value = mensajeDesencriptado;
    mensaje.setAttribute("rows", "8");
    texto.value = "";
    mensaje.style.backgroudImage = "none";
    info.style.display = "none";
    copiarbtn.style.display = "flex";
    copiarbtn.focus();
    console.log("---boton desencriptar presionado");
};
window.copiar = async function () {
    try {
    await navigator.clipboard.writeText(mensaje.value);
    texto.value = mensaje.value;
    mensaje.value = "";
    info.style.display = "block";
    copiarbtn.style.display = "none";
    mensaje.style.backgroudImage = "";
    console.log("---boton copiar presionado");
    } catch (e) {
console.log(e);
    }
};
});
