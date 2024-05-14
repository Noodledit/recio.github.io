let myInicio = ``

for(let elemento of data){

//voy iterando y agregando los datos que quiero
miInicio = miInicio + `

        <article data-content id="inicio" class="activo">
            <h2>inicio</h2>
            <p>lo que vemos en la pestaña inicio</p>
        </article>

`

}

document.querySelector("miInicio").innerHTML = miInicio
