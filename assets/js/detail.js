const queryString = location.search;
const params = new URLSearchParams(queryString);
const queryID = params.get("id");
console.log(data)
const evento = data.events.find(event => event._id==queryID);

const card = document.querySelector("#contenedor")
card.innerHTML = `
    <div class="card mb-3 card-event">
        <div class="row g-0">
        <div class="col-md-4">
            <img src="${evento.image}" class="img-fluid rounded-start img-event img-thumbnail" alt="museum">
        </div>
        <div class="col-md-8">
                <div class="card-body card-bodyEvent">
                    <h5 class="card-title title-event">${evento.name}</h5>
                    <p class="card-text">${evento.description}</p>
                    <p class="card-text text">Date: ${evento.date}</p>
                    <p class="card-text text">Place: ${evento.place}</p>
                    <p class="card-text text">Capacity: ${evento.capacity}</p>
                    <p class="card-text price-event">Price: $${evento.price}</p>
                    <div class="card-footer">
                        <small class="text-muted">Última actualización hace 3 minutos</small>
                    </div>
                </div>
            </div>
        </div>
    </div>`;