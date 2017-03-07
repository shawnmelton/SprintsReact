import appConfig from '../../config';
import GetAPIRequest from './getApiRequest';

import logger from '../logger';
import session from '../session';

class Authentication extends GetAPIRequest {
    constructor() {
        super(appConfig.jiraBaseAPIUrl + '/auth/1/session');

        this.username = null;
        this.password = null;

        this.setHeadersCallback((headers) => {
            try {
                session.setString(headers.map['set-cookie'][0]);
            } catch (error) {
                logger.error('Failed Parsing Response Headers', error.message);
            }
        });
    }
}

export default Authentication;