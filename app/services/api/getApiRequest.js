import APIRequest from './apiRequest';

class GetAPIRequest extends APIRequest {
    constructor(url) {
        super(url);

        this.method = 'GET';
    }
}

export default GetAPIRequest;