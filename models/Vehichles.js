module.exports = (sequelize, DataTypes) => {
    // Define the vehichles table
    const Vehichles = sequelize.define("Vehichles", {
        make: {
            type: DataTypes.STRING,
        },
        model: {
            type: DataTypes.STRING,
        },
        createdAt:{
            type: 'TIMESTAMP',
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        updatedAt:{
            type: 'TIMESTAMP',
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),
            allowNull: false
        }
    })

    return Vehichles;
}