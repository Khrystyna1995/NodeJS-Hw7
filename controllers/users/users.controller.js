const { usersService } = require('../../services');

module.exports = {
    getUsers: async (req, res, next) => {
        try {
            const users = await usersService.getUsers();

            res.json(users);
        } catch (e) {
            next(e);
        }
    },
};
