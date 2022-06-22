const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient();
const path = require('path');

async function create(req, res, next){
    try{
        const store = await prisma.store.create({
            data: {...req.body.store,
                address: {
                    create: req.body.address
                },
                customization: {
                    create: {}
                }
            },
        })
        res.send(store);
    }catch(error){
        next(error)
    }
}

async function sendFile(req, res, next){
    return res.sendFile('/products_images/bag-black.png' , { root : 'public'});
}


module.exports = {
    create,
    sendFile
}


