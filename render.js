var render = require('./modules/render');

render.createLeftMenuLi();

document.getElementById('add-ticket-file').onchange = (e) => {
    e.preventDefault();
    document.getElementById('add-ticket-form').onsubmit();
}