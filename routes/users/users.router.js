const { usersController }  = require("../../controllers");
const { Router } = require('express');

const usersRouter = Router();

usersRouter.get('/', usersController.getUsers);


module.exports = usersRouter;
