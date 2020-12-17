const { usersService } = require('../../services');
const { EXIST_USER } = require('../../error/Errors');
const { ErrorHandler } = require('../../error');

module.exports = {
    checkIsUserRegistered: async (req, res, next) => {
        try {
            const { email } = req.body;
            const [user] = await usersService.getUsers({ email });

            if (user) {
                throw new ErrorHandler(EXIST_USER.message, EXIST_USER.code);
            }

            next();
        } catch (e) {
            next(e);
        }
    },
};
