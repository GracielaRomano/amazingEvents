let mayorPorcentaje = 0;
let eventoMayorAsistencia;
let eventoMenorAsistencia;
let menorPorcentaje = 0 ;
let mayorCapacidad = 0;
let eventoMayorCapacidad;
let currentDate = new Date(data.currentDate);

// Iteramos por cada evento para encontrar el evento con mayor porcentaje de asistencia
for(let event of data.events){
    let eventDate = new Date(event.date);

    if (eventDate < currentDate){
        const porcentaje = Math.round((event.assistance / event.capacity) * 100);
        const capacidad = event.capacity
        
         // Evaluo para el mayor porcentaje de asistencia
        if (porcentaje > mayorPorcentaje) {
            mayorPorcentaje = porcentaje;
            eventoMayorAsistencia = event;
        }

        // Evaluo para el menor porcentaje de asistencia
        if (porcentaje < mayorPorcentaje) {
            menorPorcentaje = porcentaje;
            eventoMenorAsistencia = event;
        }
        // Evaluo para el de mayor capacidad
        if (capacidad > mayorCapacidad){
            mayorCapacidad = capacidad;
            eventoMayorCapacidad = event;
        }
    }
}

let estadisticaAsistencia =  document.getElementById("stast");
let htmlAsistencia= `<tr>
        <td>${eventoMayorAsistencia.name}</td>
        <td>${eventoMenorAsistencia.name}</td>
        <td>${eventoMayorCapacidad.name}</td>
        </tr> `;
   
estadisticaAsistencia.innerHTML = htmlAsistencia;

makeTableStatistics('upcoming');
makeTableStatistics('past');

function makeTableStatistics(typeEvent){
    let tableHTMLStatistics = "";
    // obtener las Categorias
    let AllCategories = extractCategories(typeEvent);

    AllCategories.forEach(category => {
        let filteredEvent = getEventsByCategory(data.events, category, typeEvent);
        let totalRevenues = getTotalRevenues(filteredEvent);
        let porcentageAttendace = getPorcentageAttendace(filteredEvent, typeEvent);
        tableHTMLStatistics += 
    `<tr>
        <td>${category}</td>
        <td>$ ${totalRevenues}</td>
        <td>${porcentageAttendace} %</td>
    </tr>`;
    });

    let tagResult = '';
    if (typeEvent==='past'){
        tagResult =  document.getElementById("tablePastStatistics")
    } else {
        tagResult =  document.getElementById("tableUpcomingStatistics")
    }

    tagResult.innerHTML = tableHTMLStatistics;    
}

function extractCategories(typeEvent){
    let categories = [];
    for(let event of data.events){
        let currentCategory = event.category;
        let eventDate = new Date(event.date);
        
        if (!categories.includes(currentCategory))  {
            if ((typeEvent==='past' && currentDate>eventDate) || (typeEvent==='upcoming' && currentDate<=eventDate)) {
                categories.push(currentCategory);
            }
        }
    }
    categories.sort();
    return categories;
}

function getEventsByCategory(events, category, typeEvent){
   return events.filter(event => {
        let eventCategory = event.category;
        let eventDate = new Date(event.date);

        if (eventCategory.includes(category)) {
            if ((typeEvent==='past' && currentDate>eventDate) || (typeEvent==='upcoming' && currentDate<=eventDate)) {
                return true;
            }
        } 
        return false;
    });
}

function getTotalRevenues(events){
    let sumaRevenues = 0;
    events.forEach(event => sumaRevenues += event.capacity * event.price);
    return sumaRevenues;
}

function getPorcentageAttendace(events, typeEvent){
    let sumaCapacity = 0;
    let sumaAsistencia = 0;
    events.forEach(event => {
        sumaCapacity += event.capacity;

        if (typeEvent==='past') {
            sumaAsistencia += event.assistance;
        } else {
            sumaAsistencia += event.estimate;
        }
    });

    return  Math.round((sumaAsistencia / sumaCapacity) * 100);
}

