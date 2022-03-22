const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient();

async function create(req, res, next){
    try{
        const address = await prisma.address.create({
            data: req.body
        })
        res.send(address);
    }catch(error){
        next(error)
    }
}

async function update(req, res, next){
    try{
        const addressId = req.params.id
        const address = await prisma.address.update({
            data: req.body,
            where:{
                id: parseInt(addressId)
            }
        })  
        res.send(address)
    }catch(error){
        next(error)
    }
}

module.exports = {
    create,
    update
}


