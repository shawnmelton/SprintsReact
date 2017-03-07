import APIRequest from './apiRequest';

class GetAPIRequest extends APIRequest {
    constructor(url) {
        super(url);

        this.method = 'GET';
        this.params = [];
    }

    addParam(key, value) {
        this.params.push(key +'='+ value);
    }

    call(successCallback, errorCallback) {
        let concatStr = '?';
        while (this.params.length > 0) {
            this.url += concatStr + this.params.shift();
            concatStr = '&';
        }

        super.call(successCallback, errorCallback);
    }
}

export default GetAPIRequest;