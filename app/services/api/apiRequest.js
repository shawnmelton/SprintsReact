import currentUser from '../../models/currentUser';

class APIRequest {
    constructor(url) {
        this.url = url;
        this.headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Basic'
        };
        this.body = '';

        if (currentUser.isLoggedIn()) {
            this.setAuthorization(currentUser.getBasicAuthString());
        }
    }

    call(successCallback, errorCallback) {
        fetch(this.url, {
            method: this.method,
            headers: this.headers,
            body: this.body
        })
            .then((response) => response.json())
            .then((json) => {
                successCallback(json);
            })
            .catch((error) => {
                if (typeof errorCallback === 'function') {
                    errorCallback(error);
                }
            });
    }

    setAuthorization(basicAuthString) {
        this.headers.Authorization = 'Basic '+ basicAuthString);
    }

    setBody(object) {
        this.body = JSON.stringify(object);
    }
}


export default APIRequest;