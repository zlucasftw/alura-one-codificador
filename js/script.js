const texto = document.querySelector(".criptografar__texto");
/* const mensagem = document.querySelector() */
const resultado = document.querySelector(".criptografado__resultado");
const botaoCriptografar = document.querySelector(".criptografar__botao");
const botaoDescriptografar = document.querySelector(".descriptografar__botao");
const imagem = document.querySelector(".criptografado__imagem");
const mensagemPrincipal = document.querySelector(".criptografado__mensagem__principal");
const mensagemSecundaria = document.querySelector(".criptografado__mensagem__secundaria");
const botaoCopiar = document.querySelector(".criptografado__botao")

function buttonDescriptografar() {
    if (texto.value === '' || texto.value === ' ') {
        return;
    }

    const textoDescriptografado = descriptografarTexto(texto.value);
    resultado.innerText = textoDescriptografado;
    texto.value = "";
    imagem.hidden = true;
    mensagemPrincipal.hidden = true;
    mensagemSecundaria.hidden = true;
    resultado.hidden = false;
    botaoCopiar.hidden = false;
}

function buttonCriptografar() {
    if (texto.value === '' || texto.value === ' ') {
        return;
    }

    const textoCriptografado = criptografarTexto(texto.value);
    resultado.innerText = textoCriptografado;
    texto.value = "";
    imagem.hidden = true;
    mensagemPrincipal.hidden = true;
    mensagemSecundaria.hidden = true;
    resultado.hidden = false;
    botaoCopiar.hidden = false;
}

function criptografarTexto(textoNormal) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    textoNormal = textoNormal.toLowerCase();
    
    for (let i = 0; i < matrizCodigo.length; i++) {
        if (textoNormal.includes(matrizCodigo[i][0])){
            textoNormal = textoNormal.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return textoNormal;
}

function descriptografarTexto(textoCriptografado) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    textoCriptografado = textoCriptografado.toLowerCase();
    
    for (let i = 0; i < matrizCodigo.length; i++) {
        if (textoCriptografado.includes(matrizCodigo[i][0])){
            textoCriptografado = textoCriptografado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return textoCriptografado;
}

/* botaoCriptografar.addEventListener("submit", (event) => {
    event.preventDefault();
    const textoEncriptado = encriptar(texto.value);
    resultado.innerText = textoEncriptado;
    texto.value = "";
    imagem.hidden = true;
    mensagemPrincipal.hidden = true;
    mensagemSecundaria.hidden = true;
});
 */

/* function criptografar(string) {
    
    const criptografia = [
        {"e": "enter",
        "i": "imes",
        "a": "ai",
        "o": "ober",
        "u": "ufar"}];
        
    string = textoEncriptografado.toLowerCase();
    console.log(string)
    criptografia.forEach(letra => {
        if (string.contains(letra)) {
            string = string.replaceAll(letra, palavra);
            console.log(string)
        }
    })
}

botaoCriptografar.addEventListener("submit", (event) => {
    event.preventDefault();
    criptografar(texto)

}) */


