
 let myHeader = `
<div id="logoContenedor">
            <div id="logoGradiente">
                <span id="logo">
                <a id="letras"></a>
                </span>
            </div>
        </div>
        <a id="gato"></a>
        <nav id="menu">
            <div class=""><button data-target="#inicio" class="navegacion actual">Inicio</button></div>
            <div class=""><button data-target="#html" class="navegacion">HTML</button></div>
            <div class=""><button data-target="#css" class="navegacion">CSS</button></div>
            <div class=""><button data-target="#js" class="navegacion">JavaScript</button></div>
        </nav>
        <div class="button-container">
            <button class="butt-flex">
                <span></span>
                <span></span>
                <span></span>
            </button>
        </div>
 `
 document.querySelector("header").innerHTML = myHeader

// let myFooter = `
// <p>Soy un footer y agrego este texto para ver como queda al final por el asunto del desglose</p>
// `
// document.querySelector("footer").innerHTML = myFooter

const targets = document.querySelectorAll('[data-target]')
const content = document.querySelectorAll('[data-content]')
targets.forEach(target => {

    target.addEventListener('click', () => {
        targets.forEach(g => {
            g.classList.remove('actual')
        })
        content.forEach(c => {
            c.classList.remove('activo')
        })

        target.classList.add('actual')

        const t = document.querySelector(target.dataset.target)
        t.classList.add('activo')

    })
}
)

var contenedor = document.getElementById('logo');
var imagen = document.getElementById('letras');

function deslizarImagen() {
    var x = Math.random() * (contenedor.offsetWidth - imagen.offsetWidth);
    var y = Math.random() * (contenedor.offsetHeight - imagen.offsetHeight);

    imagen.style.left = x + 'px';
    imagen.style.top = y + 'px';
}

setInterval(deslizarImagen, 2000);  // Desliza la imagen cada 2 segundos

const botonFlotante = document.querySelector('.boton-flotante');
const menu = document.querySelector('.navbar');

botonFlotante.addEventListener('click', () => {
  menu.classList.toggle('mostrar-menu'); // Agrega o quita la clase 'mostrar-menu'
});
