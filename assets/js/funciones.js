function createCard(event){
    let eventCard= `
    <div class="card col-ms-12 col-md-6 col-lg-3 card-home">
        <img src="${event.image}" class="card-image img-thumbnail" alt="">
        <div class="card-body">
            <h5 class="card-title">${event.name}</h5>
            <p class="card-textFinal">${event.description}</p>
            <span class="price">$ ${event.price}</span>
            <a href="details.html?id=${event._id}" class="btn button">see more</a>
        </div>
    </div>`;
    return eventCard;
  }

/* Funcion que crea la lista de los checkBox de cada categoria */
function crearListaCategorias(){
    let AllCategories = [];

    for(let event of data.events){
      let currentCategory = event.category;

      if (AllCategories.indexOf(currentCategory)<0){
        AllCategories.push(currentCategory)
      }
    }
    AllCategories.sort()

    let categoriasTag = document.getElementById("categorias");
    let htmlCategories = ''

    AllCategories.forEach(category =>{
        htmlCategories += `
        <input class="form-check-input" type="checkbox" name="category" id="${category}" value="${category}">
        <label class="category" for="${category}">${category}</label>`
    })
    categoriasTag.innerHTML = htmlCategories;
  }

  /** Funcion que muestra las tarjetas de la categoria seleccionada */

function mostrarCardSeleccionadas(tipo){
  let cardEvent = document.getElementById("cardEvent");
  let currentDate = new Date(data.currentDate);
  let countEvents = 0;
  /** Texto ingresado en la casilla de buscar */
  let textSearch = document.getElementById("textSearch").value.toLowerCase();

  htmlCardResultado = '<div class="row">';
  let checked = [];

  /* Array de las categorias seleccionadas */
  checked = Array.from(document.querySelectorAll('input[name=category]:checked')).map(function (input) {
      return input.value;
  });
  
  for(let event of data.events){
      if (condicion(event, currentDate, tipo)) {
          let currentName = event.name.toLowerCase();
          let currentDescription = event.description.toLowerCase();
          if (checked.includes(event.category) || checked.length==0){
                      
              if (textSearch.length==0 || currentName.includes(textSearch) || currentDescription.includes(textSearch)){
                  countEvents++;
                  if(countEvents==5){
                      htmlCardResultado += '</div> <div class="row">';
                      countEvents = 1;
                  }
                  htmlCardResultado += createCard(event);
              }
          }
      }
  }
  
  if (countEvents==0) {
      document.getElementById("NotFound").style.display='block';
  } else {
      document.getElementById("NotFound").style.display='none';
  }
  
  htmlCardResultado += '</div>';
  cardEvent.innerHTML = htmlCardResultado;
}

/** Devuelve True or False, dependiendo de la pagina que se este navegando */
function condicion(event, currentDate, tipo){
  let eventDate = new Date(event.date);
  let seDebeMostrar = true;

  if(tipo==='upcoming'){
      seDebeMostrar = (eventDate > currentDate);
  } else if (tipo==='past') {
      seDebeMostrar = (eventDate < currentDate);
  } else {
      seDebeMostrar = true;
  }
  return seDebeMostrar;
}