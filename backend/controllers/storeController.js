const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient();

async function create(req, res, next){
    try{
        const store = await prisma.store.create({
            data: req.body
        })
        res.send(store);
    }catch(error){
        next(error)
    }
}


module.exports = {
    create
}


