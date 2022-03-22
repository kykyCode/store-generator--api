const bcrypt = require('bcrypt');
const {PrismaClient} = require('@prisma/client')
const jwt = require('jsonwebtoken');
const prisma = new PrismaClient();

async function show(req, res, next){
    const userId = req.params.id;
    const user = await prisma.user.findUnique({
        where: {
            id: parseInt(userId)
        }
    })
    if(!user){
        res.status(404).send({error: 'Resource not found', status: 404});
        return
    }
    delete user.password
    delete user.id
    delete user.refreshToken
    res.send(user);
}

module.exports = {
    show
}


