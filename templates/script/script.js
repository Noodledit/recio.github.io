
let myHeader = `
    <div id="Logo" class="grid-item">
        <h1><span>#</span>Recio</h1>
    </div>
    <!-- <img src="/static/img/traced-parthenon-facts-5.png" alt=""> -->
    <nav id="menu" class="grid-item">
        <div class=""><button data-target="#inicio" class="flex-item button navegacion actual">Inicio</button></div>
        <div class=""><button data-target="#html" class="flex-item button navegacion">HTML</button></div>
        <div class=""><button data-target="#css" class="flex-item button navegacion">CSS</button></div>
        <div class=""><button data-target="#js" class="flex-item button navegacion">JavaScript</button></div>
    </nav>
    <div class="grid-item button-container">
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
