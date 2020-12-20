// module.exports = {
//     up: async (queryInterface, Sequelize) => {
//         await queryInterface.createTable(
//             'auth',
//             {
//                 id: {
//                     type: Sequelize.DataTypes.INTEGER,
//                     primaryKey: true,
//                     autoIncrement: true
//                 },
//                 access_token: {
//                     type: Sequelize.DataTypes.STRING,
//                     allowNull: false,
//                     unique: true
//                 },
//                 refresh_token: {
//                     type: Sequelize.DataTypes.STRING,
//                     allowNull: false,
//                     unique: true
//                 },
//                 user_id: {
//                     type: Sequelize.DataTypes.INTEGER,
//                     allowNull: false,
//                     foreignKey: true,
//                     onDelete: 'cascade',
//                     onUpdate: 'cascade',
//                     references: {
//                         model: 'users',
//                         key: 'id'
//                     }
//                 },
//                 createdAt: {
//                     type: Sequelize.DataTypes.DATE,
//                     defaultValue: new Date()
//                 }
//             }
//         );
//     },
//
//     // eslint-disable-next-line no-unused-vars
//     down: async (queryInterface, Sequelize) => {
//         await queryInterface.dropTable('auth', { cascade: true });
//     }
// };
