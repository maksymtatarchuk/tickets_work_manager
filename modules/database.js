const Ticket = require('./Ticket');
const CONST = require('./constants');
const utils = require('./utils');
const fs = require('fs');

// External functions

function getTicketsDataBase() {
    let data;
    try {
        data = fs.readFileSync(CONST.url.ticketsDataBase, 'utf-8');
    } catch(err) {
        console.log('Data base file is not found. Creating new data base.');
        fs.writeFileSync(CONST.url.ticketsDataBase, JSON.stringify(data))
    }

    return  data ? JSON.parse(data) : [];
}

function findTicket(ticket) {
    return {
        alreadyExists: function() {
            let dataBase = getTicketsDataBase();
            let alreadyExists = false;
            if (dataBase) {
                dataBase.forEach(value => {
                    if (value['id'] === ticket['id']) {
                        alreadyExists = true;
                    }
                })
            }
            return alreadyExists
        }
    }
}

function writeInTheDataBase(data) {
    if (data.html) {
        let type = data.type;
        data = utils.parseHtmlName(data.html.name);
        data.type = type;
    }

    let ticket = new Ticket(data);
    let currentDataBase = getTicketsDataBase();
    let isAlreadyExists = findTicket(ticket).alreadyExists()

    if (isAlreadyExists) {
        alert('Ticket already exists.');
        return
    }

    currentDataBase.push(ticket);
    fs.writeFileSync(CONST.url.ticketsDataBase, JSON.stringify(currentDataBase));
}

module.exports = {
    writeTicket: writeInTheDataBase,
    getTicketDataBase: getTicketsDataBase,
    findTicket: findTicket
}