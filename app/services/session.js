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

    setString(string) {
        if (typeof string === 'string') {
            if (string.indexOf(';') !== -1) {
                this.parseResponseHeader(string);
            } else {
                this.sessionString = string;
            }
        }
    }
}

let session = new Session();
export default session;