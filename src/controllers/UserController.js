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