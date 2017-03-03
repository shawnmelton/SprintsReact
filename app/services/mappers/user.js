class UserMapper {
    constructor(user) {
        this.user = user;
    }

    fromJSON(json) {
        try {
            this.user.setUsername(json.name);
            this.user.setDisplayName(json.displayName);
            this.user.setEmailAddress(json.emailAddress);
            this.user.setAvatar(json.avatarUrls['48x48']);

        } catch (e) {}

        return this.user;
    }
}

default export UserMapper;