let appConfig = {
    jiraBaseAPIUrl: 'https://forrent.atlassian.net/rest',
    logging: {
        showGeneric: true,
        showWarnings: true,
        showErrors: true
    },
    storageTokens: {
        currentUser: 'FR_CURRENT_USER',
        sessionCookie: 'FR_COOKIE_SESSION'
    }
};

module.exports = appConfig;