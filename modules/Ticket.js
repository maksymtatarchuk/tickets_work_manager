function createdDate() {
    let today = new Date(Date.now());
    return today.toLocaleDateString()
}

function getIdFromString(url) {
    if (url) {
        if (!url.includes('https://jira.ontrq.com/browse/')) {
            alert('You used wrong URL.')
        } else {
            return url.split('https://jira.ontrq.com/browse/')[1]
        }
    } else {
        alert('Title field is empty!')
    }
}

class Ticket {
    constructor(data) {
        this.createdDate = createdDate();
        this.id = data.id || getIdFromString(data.url);
        this.url = data.url;
        this.title = data.title;
        this.type = data.type;
    }
    getPr() {
        return 'feature/' + this.id
    }

    getCommit() {
        return this.id.toUpperCase() + ': ' + this.type.toUpperCase() + ': ' + this.title || ''
    }
}

module.exports = Ticket;