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
}
module.exports = User;