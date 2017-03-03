import APIRequest from './apiRequest';

class PostAPIRequest extends APIRequest {
    constructor(url) {
        super(url);

        this.method = 'POST';
    }
}

export default PostAPIRequest;