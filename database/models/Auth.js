// module.exports = (client, DataTypes) => {
//     const Auth = client.define(
//         'Auth',
//         {
//             id: {
//                 type: DataTypes.INTEGER,
//                 primaryKey: true,
//                 autoIncrement: true
//             },
//             access_token: {
//                 type: DataTypes.STRING,
//                 allowNull: true,
//                 unique: true
//             },
//             refresh_token: {
//                 type: DataTypes.STRING,
//                 allowNull: true,
//                 unique: true
//             },
//             user_id: {
//                 type: DataTypes.INTEGER,
//                 allowNull: true,
//                 foreignKey: true,
//                 onDelete: 'cascade',
//                 onUpdate: 'cascade',
//                 reference: {
//                     model: {
//                         tableName: 'users',
//                         schema: 'auto_shop'
//                     },
//                     key: 'id'
//                 }
//             },
//             createAt: {
//                 type: DataTypes.DATE,
//                 default: client.fn('NOW')
//             }
//         },
//         {
//             tableName: 'auth',
//             timestamps: false
//         }
//     );
//
//     return Auth;
// };
