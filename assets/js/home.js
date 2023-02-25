let htmlEvents = "";
let cardEvent = document.getElementById("cardEvent");

let countEvents = 0;
htmlEvents = '<div class="row">';
for (let event of data.events) {
    countEvents++;
    if(countEvents==5){
        htmlEvents += '</div> <div class="row">';
        countEvents = 1;
    }
    htmlEvents += createCard(event);
};
htmlEvents += '</div>';
cardEvent.innerHTML = htmlEvents;
