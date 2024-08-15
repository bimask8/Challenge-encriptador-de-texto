/*Variáveis*/

const textoElement = document.getElementById("texto");
let regex = /^[a-z ]+$/;

let encriptacao = {
    'e': 'enter',
    'i': 'imes',
    'a': 'ai',
    'o': 'ober',
    'u': 'ufat'
};

let desencriptacao = {};
for (let letra in encriptacao) {
    if (encriptacao.hasOwnProperty(letra)) {
        desencriptacao[encriptacao[letra]] = letra;
    }
};

/*Funções*/

function conferir(){

    let texto = textoElement.value;
    
    if (!regex.test(texto)) {
        alert("Entrada inválida. Use apenas letras minúsculas e sem acento.");
        return false;
    }

    return true;
}

function mudarAparencia(){
    document.getElementById("semtexto").style.display = "none";
    document.getElementById("comtexto").style.display = "inherit";
}

function cript(){

    if(!conferir()){
        return;
    }

    let texto = textoElement.value;

    for (let letra in encriptacao) {
        if (encriptacao.hasOwnProperty(letra)) {
            texto = texto.split(letra).join(encriptacao[letra]);
        }
    }

    document.getElementById("resultado").innerHTML = texto;

    mudarAparencia();
}

function decript(){

    if(!conferir()){
        return;
    }

    let texto = textoElement.value;

    for (let letra in desencriptacao) {
        if (desencriptacao.hasOwnProperty(letra)) {
            texto = texto.split(letra).join(desencriptacao[letra]);
        }
    }

    document.getElementById("resultado").innerHTML = texto;

    mudarAparencia();
}

function copy(){
    let copia = document.getElementById("resultado").innerHTML;
    navigator.clipboard.writeText(copia);

    alert("Texto copiado!")
}