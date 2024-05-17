
let myHeader = `
<div id="logo">
<img class="logo" src="/static/img/Background-Parthenon.png" alt="Background-Parthenon">
<div class="logoGradiente"></div>
<img src="../static/img/#Recio.jpeg" alt="">
</div>
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

let myFooter = `

`
document.querySelector("footer").innerHTML = myFooter

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
