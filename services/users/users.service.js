const  database  = require('../../database').getInstance();

module.exports = {
    getUsers: () => {
        const User = database.getModel('User');

        return User.findAll()
    },
};
