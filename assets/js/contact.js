let form = document.getElementById("formulario");

form.addEventListener('submit' , e =>{
    e.preventDefault();
    let regexEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
    let nombre = document.querySelector('input[name=name')
    let email = document.querySelector('input[name=email')
    let parrafo = document.getElementById("warnings");
    let warnings =""
    let entrar = false
    parrafo.innerHTML =""

    
    if([nombre,email].includes("")){
        warnings += 'Debe ingresar nombre y email'
    }else if(nombre.value.length <5){
         warnings += `El nombre no es valido <br>`
         entrar = true
     }
     if(!regexEmail.test(email.value)){
         warnings += `El email no es valido <br>`
         entrar = true
     }
     if(entrar){
         parrafo.innerHTML = warnings
    }else{
        ejecutaWarning()
        form.reset()
    }
    
});

function ejecutaWarning() {
    let mensaje = document.getElementById('warnings');
    mensaje.innerText = 'Tu comentario fue enviado con exito!';
    /* Hacemos aparecer el mensaje */
    mensaje.style.visibility = 'visible';
    mensaje.style.opacity = 1;
    /* Esperamos 2 segundos (2000 milisegundos) antes de ocultar el mensaje */
    setTimeout(function() {
      /* Hacemos desaparecer el mensaje suavemente */
      mensaje.style.opacity = 0;
    }, 2000);
  }



