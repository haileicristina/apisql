const User = require('../models/User');

module.exports = {

    //encontrar todos os usuários
    async index(req, res){
        try{
            const users = await User.findAll();
            return res.status(200).json(users);
        }catch(error){
            return res.status(400).json({
                message: "The user can't be found",
                error: error
            })
        }
    },

    async nameUser(req, res){
        const { id } = req.params;
        
        const user = await User.findByPk(id, {
            attributes: ['name']
        })

        return res.status(200).json(user)
    },

    async nameAllUser(req, res){
       const { name } = req.query;
        
        const user = await User.findAll({
            attributes: ['name'],
            through: { 
                attributes: [] 
            }
        })

        return res.status(200).json(user)
    },


    //armazenar o usuário
    async store(req, res){
        const { name, email } = req.body;
        try{
            const user = await User.create({name, email});

            return res.status(201).json(user);
        }catch(error){
            return res.status(400).json({
                message: "User can't be created",
                error: error
            })
        }
    },

}