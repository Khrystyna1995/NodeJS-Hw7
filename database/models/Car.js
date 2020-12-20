module.exports = (client, DataTypes) => {
    const Car = client.define(
        'Car',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            model: {
                type: DataTypes.STRING,
                allowNull: false
            },
            users_id: {
                type: DataTypes.INTEGER,
                foreignKey: true,
                allowNull: true,
                onDelete: 'cascade',
                onUpdate: 'cascade',
                reference: {
                    model: {
                        tableName: 'users',
                        schema: 'auto_shop'
                    },
                    key: 'id'
                }
            }
        },
        {
            tableName: 'cars',
            timestamps: false
        }
    );

    return Car;
};
