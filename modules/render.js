const CONST = require('./constants');
const database = require('./database');
const utils = require('./utils');

let leftMenuList = document.getElementById('left-menu-list');
let tickets = database.getTicketDataBase();

async function createLeftMenuLi() {
    if (tickets.length > 0) {
        tickets.forEach(ticket => {
            let li = document.createElement('li');
            li.setAttribute('title', ticket.title);
            li.innerHTML = ticket.id;
            if (tickets.length === 0) {
                leftMenuList.appendChild(li);
            } else {
                leftMenuList.insertBefore(li, leftMenuList.firstElementChild);
            }
        })
    }
}

function addTicketLeftMenu(data) {
    if (!data.url && !data.title) {
        data = utils.parseHtmlName(data.html.name);
    }

    let li = document.createElement('li')
    li.setAttribute('title', data.title);
    li.innerHTML = data.id;

    if (tickets.length === 0) {
        leftMenuList.appendChild(li);
    } else {
        leftMenuList.insertBefore(li, leftMenuList.firstElementChild);
    }
}

module.exports = {
    createLeftMenuLi: createLeftMenuLi,
    addTicketLeftMenu: addTicketLeftMenu
}