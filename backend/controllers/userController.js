const bcrypt = require('bcrypt');
const {PrismaClient} = require('@prisma/client')
const jwt = require('jsonwebtoken');
const prisma = new PrismaClient();

async function show(req, res, next){
    const userId = req.params.id;
    const user = await prisma.user.findUnique({
        where: {
            id: parseInt(userId)
        },
        include: {
            Address: true,
        }
    })
    if(!user){
        res.status(404).send({error: 'Resource not found', status: 404});
        return
    }
    delete user.password
    delete user.refreshToken
    res.send(user);
}

async function update(req, res, next){
    try{
        const userId = req.params.id;
        const user = await prisma.user.update({
            data: req.body,
            where: {
                id: parseInt(userId)
            }
        })
        res.send(user)
    }catch(error){
        next(error)
    }
}

module.exports = {
    show,
    update
}


