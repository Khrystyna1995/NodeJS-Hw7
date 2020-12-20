const { authService } = require('../../services');
const tokenizer = require('../../helpers');
const { OK } = require('../../configs/error-codes');

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
