const database = require('../../database').getInstance();

module.exports = {
    findUserByParams: (findObj) => {
        const UserModel = database.getModel('User');

        return UserModel.findOne({
            where: findObj
        });
    },

    createTokenPair: (tokenPair) => {
        const AuthModel = database.getModel('O_Auth');

        return AuthModel.create(tokenPair);
    },

    getTokenWithUserByParams: (findObject) => {
        const AuthModel = database.getModel('O_Auth');
        const UserModel = database.getModel('User');

        return UserModel.findOne({
            include: {
                model: AuthModel,
                where: findObject
            }
        });
    },

    deleteToken: (access_token) => {
        const AuthModel = database.getModel('O_Auth');

        return AuthModel.destroy({
            where:
                { access_token }
        });
    }

};
