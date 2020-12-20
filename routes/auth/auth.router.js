const { Router } = require('express');
const { authController } = require('../../controllers');
const { authMiddleware, tokenMiddleware } = require('../../middlewares');

const authRouter = Router();

authRouter.post('/', authMiddleware.checkUserValid,
    authMiddleware.checkUserExist, authMiddleware.checkPasswordHash,
    authController.authUser);
authRouter.post('/refresh', tokenMiddleware.checkRefreshToken, authController.refreshToken);

module.exports = authRouter;
