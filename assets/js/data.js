const urlApi = "https://mindhub-xj03.onrender.com/api/amazing";

async function dataApi(){
    try{
        let response = await fetch(urlApi);
        let data = await response.json();
        localStorage.setItem('dataLocal', JSON.stringify(data));
    }catch(error){
        alert('ocurrio un error' + error);
    }
}

document.getElementById("Loanding").style.display='block';
dataApi();
let data = JSON.parse(localStorage.getItem('dataLocal'));
document.getElementById("Loanding").style.display='none';