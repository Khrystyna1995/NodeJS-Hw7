const { Router } = require('express');
const { validationMiddleware, usersMiddleware } = require('../../middlewares');
const { usersController } = require('../../controllers');

const usersRouter = Router();

usersRouter.get('/', usersController.getUsers);
usersRouter.get('/:userId', validationMiddleware.checkUserIdValid, usersController.getUserById);
usersRouter.get('/userCar', usersController.getUserByIdWithCar);
usersRouter.get('/usersCars', usersController.getUsersWithCars);

usersRouter.post('/', validationMiddleware.checkUserValid, usersMiddleware.checkIsUserRegistered, usersController.createUser);

usersRouter.put('/', usersMiddleware.checkUserIdExist, validationMiddleware.checkUserUpdateValid, usersController.updateUser);

usersRouter.delete('/:userId', usersMiddleware.checkUserIdExist, usersController.deleteUser);

module.exports = usersRouter;
