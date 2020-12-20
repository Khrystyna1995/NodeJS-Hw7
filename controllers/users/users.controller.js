const { OK, CREATED, DELETED } = require('../../configs/error-codes');
const { usersService } = require('../../services');
const { ErrorHandler, errors } = require('../../error');
const { hash } = require('../../helpers/password.helper');

module.exports = {
    getUsers: async (req, res, next) => {
        try {
            const users = await usersService.getUsers();

            res.status(OK).json(users);
        } catch (e) {
            next(e);
        }
    },
    getUserById: async (req, res, next) => {
        try {
            const { userId } = req.params;

            if (userId < 0) {
                throw new ErrorHandler(errors.NOT_VALID_ID.message, errors.NOT_VALID_ID.code);
            }

            const user = await usersService.getUserById(userId);

            res.json(user);
        } catch (e) {
            next(e);
        }
    },

    getUserByIdWithCar: async (req, res, next) => {
        try {
            const userWithCar = await usersService.getUserByIdWithCar(req.userId);

            res.status(OK).json(userWithCar);
        } catch (e) {
            next(e);
        }
    },

    getUsersWithCars: async (req, res, next) => {
        try {
            const usersWithCars = await usersService.getUsersWithCars();

            res.status(OK).json(usersWithCars);
        } catch (e) {
            next(e);
        }
    },

    createUser: async (req, res, next) => {
        try {
            const password = await hash(req.body.password);

            const { name, email } = req.body;
            const user = { ...req.body, password };

            await usersService.createUser(user);

            res.status(CREATED.code).json({ name, email });
        } catch (e) {
            next(e);
        }
    },

    updateUser: async (req, res, next) => {
        try {
            await usersService.updateUser(req.body, req.params.id);

            res.status(OK).json('User updated');
        } catch (e) {
            next(e);
        }
    },

    deleteUser: async (req, res, next) => {
        try {
            await usersService.deleteUser(req.user.id);

            res.status(DELETED.code).json(req.user);
        } catch (e) {
            next(e);
        }
    },
};
