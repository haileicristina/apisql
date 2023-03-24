const User = require('../models/User');
const Tech = require('../models/Tech');
const School = require('../models/School');


module.exports = {

    async index(req, res){
        const { user_id } = req.params;

        const user = await User.findByPk(user_id, {
            include: { association: 'techs', through: {attributes: []}}
        })
        return res.status(200).json(user.techs)
    },

    async forName(req, res){
        const { user_id } = req.params;

        const user = await User.findByPk(user_id, {
            include:{
                association: 'techs',
                attributes: ['name'],
                through: { 
                    attributes: [] 
                }
            }
        })
        return res.status(200).json(user.techs)
    },

    async store(req, res){
        const { user_id } = req.params;
        const { name } = req.body;
       
        const user = await User.findByPk(user_id);

        if(!user){
            return res.status(400).json({error: 'User not found'})
        }

        const [tech] = await Tech.findOrCreate({
            where: { name }
        });
              
        await user.addTech(tech);
        return res.status(201).json(tech)
    },

    //listando as escolas
    async listSchoolTech(req, res){         
       
        try {
            const school = await School.find().populate('tech')       
                        
            return res.status(200).json({school})

        }catch (error){
            return res.status(400).json({
                error: "Error show list School e Techs",
                message: error
            })
        }
      },

     
// criar escola com o id da tecnologia
    async createSchoolTech(req, res){        
        const { tech_id } = req.params;
        const { name_school, price_school, description_school } = req.body;

        const tech = await Tech.findByPk(tech_id);

        if(!tech){
            return res.status(400).json({error: 'Tech not found'})
        }      
        
        const school = new School({ 
            name_school, price_school, description_school , techId: tech._id });
            await school.save();       
        
        return res.status(201).json(school)
    },

    async updateSchool(req, res){ 
        try {           
            const { id, name } = req.params;
            const {  name_school, price_school, description_school } = req.body;
        
            const [techs] = await Tech.update({ name }, { where: { id } });
            const school = await School.findByIdAndUpdate(id, { name_school, price_school, description_school }, { new: true });
        
            res.json({ techs, school });
          } catch (error) {
            console.error(error);
            res.status(400).json({ message: 'Error in update Schools' });
          }
      },  
      

   
    async delete(req, res){
        const { user_id } = req.params;
        const { name } = req.body;

        const user = await User.findByPk(user_id);

        if(!user){
            return res.status(400).json({error: 'User not found'})
        }

        const tech =  await Tech.findOne({
            where: { name }
        })

        await user.removeTech(tech)
        return res.status(200).json({
            message: 'Tech deleted sucessfully'
        })
    }
}