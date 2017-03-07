class Session {
    constructor() {
        this.sessionString = '';
    }

    getString() {
        return this.sessionString;
    }

    parseResponseHeader(header) {
        var parts = header.split(';');
        for (let part of parts) {
            if (part.indexOf('JSESSION') !== -1) {
                this.sessionString = part;
            }
        }
    }

    setString(header) {
        if (typeof header === 'string' && header.indexOf(';') !== -1) {
            this.parseResponseHeader(header);
        }
    }
}

let session = new Session();
export default session;