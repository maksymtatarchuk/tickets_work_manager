const path = require('path');
const root = __dirname.split('\\modules')[0];

const url = {
    root: root,
    database: path.join(root, 'database'),
    html: path.join(root, 'html'),
    ticketsDataBase: path.join(root, 'database', 'ticketsList.json')
}

module.exports = {
    url: url
}