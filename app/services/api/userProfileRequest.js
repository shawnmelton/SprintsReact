import appConfig from '../../config';
import GetAPIRequest from './getApiRequest';

class UserProfileRequest extends GetRequest {
    constructor(username) {
        super(appConfig.jiraBaseAPIUrl + '/api/2/user');
    }
}