const posicaoSuperiorInicial = 50,
      posicaoEsquerdaInicial = 50,
      posicaoSuperiorFinal = 500,
      posicaoEsquerdaFinal = 500,

imgAvatar = document.getElementById('avatar'),
styleAvatar = window.getComputedStyle(avatar);

var posicaoSuperior = 50,
posicaoEsquerda = 50,
topAvatar,
leftAvatar;

imgAvatar.style.position = "absolute";
imgAvatar.style.top = posicaoSuperior + "px";
imgAvatar.style.left = posicaoEsquerda + "px";
m 
function getTopStyle(elementToGet) {
let styleElement = window.getComputedStyle(elementToGet); return parseInt(styleElement.getPropertyValue('top').replace("px", ''));
}
function getLeftStyle(elementToGet) {
let styleElement = window.getComputedStyle(elementToGet);
return parseInt(styleElement.getPropertyValue('left').replace("px", ""));

}

function moverParaEsquerda() {
    console.clear();
    topAvatar = getTopStyle(imgAvatar);
    leftAvatar = getLeftStyle(imgAvatar);
    if (leftAvatar >  posicaoEsquerdaFinal) {
        posicaoEsquerda -= 1;
        imgAvatar.style.left = posicaoEsquerda + "px";
    } else {
        console.error("ops! chegou no limite nao e possivel mover. Tente novamente");
    }
    console.log("posicao do avatar a esquerda", imgAvatar.style.left);
}