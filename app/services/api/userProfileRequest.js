import appConfig from '../../config';
import session from '../session';

import GetAPIRequest from './getApiRequest';

class UserProfileRequest extends GetAPIRequest {
    constructor(username) {
        super(appConfig.jiraBaseAPIUrl + '/api/2/user');
        this.addParam('username', username);
        this.headers.cookie = session.getString();
    }
}

export default UserProfileRequest;