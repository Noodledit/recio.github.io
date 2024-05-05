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