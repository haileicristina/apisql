const { Op } = require('sequelize');
const User = require('../models/User');


module.exports = {
    async show (req, res){
        //Encontrar todos os usuários com email que termina com email.com.br
        // Desses usuários quero buscar todos que moram na Av. Faria Lima
        //Desses buscar as tecnologias que começam com React

        const users = await User.findAll({
            attributes: ['name', 'email'],
            where: {
                email: {
                    //chave do objeto
                    [Op.iLike]: '%@email.com'
                }
            },
            include: [
                {association: 'addresses', where: { street: 'Av. Faria Lima'}},
                {
                    association: 'techs',
                    required: false,
                    where: {
                        name: {
                            [Op.iLike]: 'React%'
                        }
                    }
                },
            ]
        })
        return res.status(200).json(users);
    }
}