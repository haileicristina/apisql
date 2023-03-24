const School= require('../models/School');

module.exports = {
    
    async createSchool(req, res){
        const { name_school, price_school, description_school } = req.body;
        try{
            const school = await School.create({
                name_school, price_school, description_school
            });

            return res.status(201).json(school);
        }catch(error){
            return res.status(400).json({
                message: "User can't be created",
                error: error
            })
        }
    },
}