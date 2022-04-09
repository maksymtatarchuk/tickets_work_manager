function parseHtmlName(html) {
    html = html.split(' - Jira.html').join('').split('[').join('').split('] ');
    let data = {};

    data.id = html[0];
    data.title = html[1];
    data.url = 'https://jira.ontrq.com/browse/' + html[0];

    return data
}

module.exports = {
    parseHtmlName: parseHtmlName
}