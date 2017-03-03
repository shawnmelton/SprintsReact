import appConfig from '../../config';
import GetAPIRequest from './getApiRequest';

import Base64 from '../../../node_modules/base-64';

class Authentication extends GetAPIRequest {
    constructor() {
        super(appConfig.jiraBaseAPIUrl + '/auth/1/session');

        this.username = null;
        this.password = null;
        this.basicAuthString = null;
    }

    getBasicAuthString() {
        return this.basicAuthString;
    }

    setBasicAuthString(username, password) {
        this.username = username;
        this.password = password;
        
        this.basicAuthString = Base64.encode(this.username +':'+ this.password);
        this.setAuthentication(this.basicAuthString);
        console.error(this.basicAuthString);
    }
}

export default Authentication;