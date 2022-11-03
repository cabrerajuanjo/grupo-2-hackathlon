module.exports = (sequelize, DataTypes) => {
    const alias = 'User';
    const cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        email: { 
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        first_name: { 
            type: DataTypes.STRING,
            allowNull: false
        },
        last_name: { 
            type: DataTypes.STRING,
            allowNull: false
        },
        points: { 
            type: DataTypes.INTEGER,
            allowNull: false
        },
        isAdmin: { 
            type: DataTypes.TINYINT(1),
            allowNull: false
        }
    }

    const config = {
        timestamps: false
    }

    const User = sequelize.define(alias, cols, config);
    
    return User;
}