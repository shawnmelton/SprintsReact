import currentUser from '../../models/currentUser';
import logger from '../logger';

class APIRequest {
    constructor(url) {
        this.url = url;
        this.headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Basic'
        };
        this.body = '';
        this.headersCallback = null;

        if (currentUser.isLoggedIn()) {
            this.setAuthorization(currentUser.getBasicAuthString());
        }
    }

    call(successCallback, errorCallback) {
        logger.log([
            'Making Network Request', {
                URL: this.url,
                Headers: this.headers,
                Body: this.body
            }
        ]);

        fetch(this.url, {
            method: this.method,
            headers: this.headers,
            body: this.body
        })
            .then(response => {
                try {
                    if (typeof this.headersCallback === 'function') {
                        this.headersCallback(response.headers);
                    }
                } catch (error) { /* Attempt to run the callback */ }

                return response;
            })
            .then((response) => response.json())
            .then((json) => {
                logger.log(['Network Response', 'URL: '+ this.url, json]);

                successCallback(json);
            })
            .catch((error) => {
                logger.error(['Network Response Error', error.message]);

                if (typeof errorCallback === 'function') {
                    errorCallback(error);
                }
            });
    }

    setAuthorization(basicAuthString) {
        this.headers.Authorization = 'Basic '+ basicAuthString;
    }

    setBody(object) {
        this.body = JSON.stringify(object);
    }

    setHeadersCallback(callback) {
        this.headersCallback = callback;
    }
}


export default APIRequest;