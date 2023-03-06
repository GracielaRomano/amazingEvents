crearListaCategorias();
mostrarCardSeleccionadas('upcoming');

let listCategorias = document.querySelectorAll("#categorias input[type=checkbox]")
listCategorias.forEach (input =>{
    input.onclick = () =>{
        mostrarCardSeleccionadas('upcoming')
    }
})

document.querySelector("#search").onsubmit = (e) =>{
    e.preventDefault();
    mostrarCardSeleccionadas('upcoming')
};
