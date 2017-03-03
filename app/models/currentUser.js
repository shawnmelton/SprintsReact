import User from './user';

class CurrentUser extends User {
    constructor() {
        super();

        this.loggedIn = false;
        this.basicAuthString = null;
    }

    isLoggedIn() {
        return this.loggedIn;
    }

    logOut() {
        this.loggedIn = false;
        this.setUsername(null);
        this.basicAuthString = null;
    }

    setBasicAuthString(string) {
        this.basicAuthString = string;
    }

    setLogIn(basicAuthString) {
        this.loggedIn = true;
        this.setUsername(username);
        this.basicAuthString = basicAuthString;
    }
}

// Singleton
let user = new CurrentUser();
export default user;