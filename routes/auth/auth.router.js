const { Router } = require('express');
const { authController } = require('../../controllers');
const { authMiddleware } = require('../../middlewares');

const authRouter = Router();

authRouter.post('/', authMiddleware.checkUserValid,
    authMiddleware.checkUserExist, authMiddleware.checkPasswordHash,
    authController.authUser);
authRouter.post('/logout', authController.logoutUser);
authRouter.post('/refresh', authMiddleware.checkRefreshToken, authController.refreshToken);

module.exports = authRouter;
