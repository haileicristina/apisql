const { Model, DataTypes } = require('sequelize');

class Tech extends Model {
    //conectar com a base de dados
    static init(connection) {
        super.init({
            //campos
           name: DataTypes.STRING,
            
        }, {
            sequelize: connection,
            tableName: 'techs',
        })
    }
    //relacionamento 1 pra muitos
    static associate(models){
       //relacionamento N para N
       //chave tech_id na tabela user_techs
       //e through nome da tabela que fara a relação entre usuarios e tecnologia
       // as é o nome para essa associação
       this.belongsToMany(models.User, { foreignKey: 'tech_id', through: 'user_techs', as: 'users'})
    }
}
module.exports = Tech;