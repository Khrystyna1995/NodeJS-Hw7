const { Router } = require('express');
const { usersController } = require('../../controllers');
const { usersMiddleware } = require('../../middlewares');

const usersRouter = Router();

usersRouter.get('/', usersMiddleware.checkIsUserRegistered, usersController.getUsers);

module.exports = usersRouter;
