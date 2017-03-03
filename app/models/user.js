class User {
    constructor() {
        this.displayName = null;
        this.username = null;
        this.avatar = null;
        this.emailAddress = null;
    }

    getAvatar() {
        return this.avatar;
    }

    getDisplayName() {
        return this.displayName;
    }

    getEmailAddress() {
        return this.emailAddress;
    }

    setAvatar(avatar) {
        this.avatar = avatar;
    }

    setDisplayName(name) {
        this.displayName = name;
    }

    setEmailAddress(emailAddress) {
        this.emailAddress = emailAddress;
    }

    setUsername(username) {
        this.username = username;
    }
}

export default User;