const { Model, DataTypes } = require('sequelize');

class Address extends Model {
    //conectar com a base de dados
    static init(connection) {
        super.init({
            //campos
            zipcode: DataTypes.STRING,
            street: DataTypes.STRING,
            number: DataTypes.INTEGER
        }, {
            sequelize: connection
        })
    }
    //relacionamento 1 pra muitos
    static associate(models){
        this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user'})
    }
}
module.exports = Address;