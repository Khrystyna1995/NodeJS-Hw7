module.exports = {
    usersMiddleware: require('./users/users.middleware'),
    carsMiddleware: require('./cars/cars.middleware'),
    authMiddleware: require('./auth/auth.middleware'),
    validationMiddleware: require('./validation/validation.middleware'),
    tokenMiddleware: require('./auth')
};
