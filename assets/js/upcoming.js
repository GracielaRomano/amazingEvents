let htmlEvents = "";
let cardEvent = document.getElementById("cardEvent");
let currentDate = new Date(data.currentDate);

let countEvents = 0;
htmlEvents = '<div class="row">';
for (let event of data.events) {
    let eventDate = new Date(event.date);
    if (eventDate > currentDate) {
        countEvents++;
        if(countEvents==5){
            htmlEvents += '</div> <div class="row">';
            countEvents = 1;
        }
        htmlEvents += createCard(event);
    }
}
htmlEvents += '</div>';
cardEvent.innerHTML = htmlEvents;

