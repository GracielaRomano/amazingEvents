crearListaCategorias();
mostrarCardSeleccionadas('past');

let listCategorias = document.querySelectorAll("#categorias input[type=checkbox]")
listCategorias.forEach (input =>{
    input.onclick = () =>{
        mostrarCardSeleccionadas('past')
    }
})

document.querySelector("#search").onsubmit = (e) =>{
    e.preventDefault();
    mostrarCardSeleccionadas('past')
};
