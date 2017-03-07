import User from '../../models/user';

class UserMapper {
    fromJSON(json) {
        try {
            let user = new User();
            user.setUsername(json.name);
            user.setDisplayName(json.displayName);
            user.setEmailAddress(json.emailAddress);
            user.setAvatar(json.avatarUrls['48x48']);
            return user;
        } catch (e) {
            return null;
        }
    }
}

export default UserMapper;