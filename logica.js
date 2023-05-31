const ingresoTexto = document.getElementById("IngresoTexto");
const botonencriptar = document.getElementById("botonencriptar");
const botondesencriptar = document.getElementById("botondesencriptar");
const botoncopiar = document.getElementById("botoncopiar");
const mensajeobtenido = document.getElementById("mensajeobtenido");
const muneco = document.getElementById("muneco");
const texto_informacion = document.getElementById("texto_informacion");
const Obtener_Mensaje = document.getElementById("Obtener_Mensaje");

botonencriptar.addEventListener("click", () =>{
    const textoMinusculas = ingresoTexto.value.toLowerCase();
    let txtEncriptado = textoMinusculas
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");

    if (document.getElementById("IngresoTexto").value.length != 0) {
        mensajeobtenido.innerHTML = txtEncriptado;
        muneco.style.display = "none";
        muneco.classList.add("ocultado");
        texto_informacion.style.display = "none";
        botoncopiar.style.display = "block";
        Obtener_Mensaje.classList.add("ajustando");
        mensajeobtenido.classList.add("ajustando");
        ingresoTexto.value = "";
    } else {
        alert("Por favor ingrese un texto");
    }
});

botondesencriptar.addEventListener("click", () =>{
    const textoMinusculas = ingresoTexto.value.toLowerCase();
    let txtDesencriptado = textoMinusculas
        .replace(/enter/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/ai/gi, "a")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u");
    if (document.getElementById("IngresoTexto").value.length != 0) {
        mensajeobtenido.innerHTML = txtDesencriptado;
        //muneco.style.display = "none";
        muneco.classList.add("ocultado");
        texto_informacion.style.display = "none";
        botoncopiar.style.display = "block";
        Obtener_Mensaje.classList.add("ajustando");
        mensajeobtenido.classList.add("ajustando");
        ingresoTexto.value = "";
    } else {
        alert("Por favor ingrese un texto");
    }
});

botoncopiar.addEventListener("click", () =>{
    let texto = mensajeobtenido;
    texto.select();
    document.execCommand('copy');
    //navigator.clipboard.writeText(texto.value);
    alert("Mensaje copiado.");

    //ingresoTexto.value = "";
    mensajeobtenido.innerHTML = "";
    muneco.classList.remove("ocultado");
    //muneco.style.display = "block";
    texto_informacion.style.display = "block";
    botoncopiar.style.display = "none";
    Obtener_Mensaje.classList.remove("ajustando");
    mensajeobtenido.classList.remove("ajustando");
    ingresoTexto.focus();
});