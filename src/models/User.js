const { Model, DataTypes } = require('sequelize');

class User extends Model {
    //conectar com a base de dados
    static init(connection) {
        super.init({
            //campos
            name: DataTypes.STRING,
            email: DataTypes.STRING,
        }, {
            sequelize: connection
        })
    }
    static associate(models){
        //user_id aramazenado dentro da tabela de Address
        this.hasMany(models.Address, { foreignKey: 'user_id', as: 'addresses'})
        this.belongsToMany(models.Tech, { foreignKey: 'user_id', through: 'user_techs', as: 'techs'})

    }
}
module.exports = User;