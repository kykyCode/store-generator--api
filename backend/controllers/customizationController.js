const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient();

async function create(req, res, next){
    try{
        const customization = await prisma.customization.create({
            data: req.body
        })
        res.send(customization);
    }catch(error){
        next(error)
    }
}

async function update(req, res, next){
    try{
        const customizationId = req.params.id
        const customization = await prisma.customization.update({
            data: req.body,
            where:{
                id: parseInt(customizationId)
            }
        })  
        res.send(customization)
    }catch(error){
        next(error)
    }
}

module.exports = {
    create,
    update
}


