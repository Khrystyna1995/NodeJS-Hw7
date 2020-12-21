const { authService } = require('../../services');
const tokenizer = require('../../helpers');
const { OK, NO_CONTENT } = require('../../configs/error-codes');

module.exports = {
    authUser: async (req, res, next) => {
        try {
            const token_pair = tokenizer();
            const { id } = req.user;

            await authService.createTokenPair({ userId: id, ...token_pair });

            res.status(OK).json(token_pair);
        } catch (e) {
            next(e);
        }
    },

    logoutUser: async (req, res, next) => {
        try {
            const { access_token } = req;

            await authService.deleteToken(access_token);

            res.status(NO_CONTENT);
        } catch (e) {
            next(e);
        }
    },

    refreshToken: async (req, res, next) => {
        try {
            await authService.deleteToken(req.user.id);

            const token_pair = tokenizer();
            const { id } = req.user;
            await authService.createTokenPair({ userId: id, ...token_pair });

            res.status(OK).json(token_pair);
        } catch (e) {
            next(e);
        }
    }
};
