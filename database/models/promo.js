module.exports = (sequelize, DataTypes) => {
    const alias = 'Promo';
    const cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        description: { 
            type: DataTypes.STRING,
            allowNull: false,
            unique: false
        },
        needed_points: {
            type: DataTypes.STRING,
            allowNull: false
        },
        descount: { 
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                min: 0,
                max: 99
            }
        },
        active: { 
            type: DataTypes.TINYINT(1),
            allowNull: false
        },
    }

    const config = {
        timestamps: false
    }

    const Promo = sequelize.define(alias, cols, config);
    
    return Promo;
}