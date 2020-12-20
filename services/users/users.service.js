const database = require('../../database').getInstance();

module.exports = {
    createUser: (user) => {
        const User = database.getModel('User');

        return User.create({ ...user });
    },

    getUsers: () => {
        const User = database.getModel('User');

        return User.findAll();
    },

    getUserById: (userId) => {
        const User = database.getModel('User');

        return User.findByPk(userId);
    },

    getUserByIdWithCar: (userId) => {
        const Car = database.getModel('Car');
        const User = database.getModel('User');

        return Car.findAll({
            include: { model: User },
            where: { id: userId }
        });
    },

    getUsersWithCars: () => {
        const Car = database.getModel('Car');
        const User = database.getModel('User');

        return User.findAll({
            include: { model: Car }
        });
    },

    updateUser: (user) => {
        const User = database.getModel('User');

        return User.update(
            { ...user },
            {
                where: {
                    id: user.id
                }
            }
        );
    },

    deleteUser: (userId) => {
        const User = database.getModel('User');

        return User.destroy({
            where: {
                id: userId
            }
        });
    }
};
