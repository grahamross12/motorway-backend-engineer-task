module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("Vehichles", {
        make: {
            type: DataTypes.STRING,
        },
        model: {
            type: DataTypes.STRING,
        }
    })
    
    return User;
}