const render = require('../modules/render');
const dataBase = require('../modules/database');

let newTicketBtn = document.getElementById('add-new-ticket-btn');
let cancelBtn = document.getElementById('add-new-ticket-cancel-btn');
let addNewTicket = document.getElementById('add-ticket-form');

newTicketBtn.onclick = (e) => {
    let element = document.getElementById('new-ticket-pop-up');
    element.classList.remove('b-hidden');
}

cancelBtn.onclick = (e) => {
    let element = document.getElementById('new-ticket-pop-up');
    element.classList.add('b-hidden');
}

addNewTicket.onsubmit = (e) => {
    if (e) {
        e.preventDefault();
    }

    let form = new FormData(addNewTicket);
    let data = {};

    for (let val of form.entries()) {
        data[val[0]] = val[1];
    }

    dataBase.writeTicket(data);
    render.addTicketLeftMenu(data);
    cancelBtn.onclick();
}