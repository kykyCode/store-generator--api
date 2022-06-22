const bcrypt = require('bcrypt');
const {PrismaClient} = require('@prisma/client')
const jwt = require('jsonwebtoken');


const prisma = new PrismaClient();

async function register(req, res, next){
    const userCredentials = req.body;
    bcrypt.genSalt(10, function(err, salt){
        bcrypt.hash(userCredentials.password, salt, async function(err, hash){
            userCredentials.password = hash;
            try{
                const user = await prisma.user.create({
                    data: userCredentials
                })
                res.send(user)
            }catch(error){
                next(error)
            }
        })
    })
}

async function login(req, res, next){
        const payload = {
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email
        }
        try{
            const user = await prisma.user.findUnique({
                where:{
                    email:req.body.email
                }
            })
            if(!user){
                res.status(404).send({error: 'Resource not found', status: 404});
            }else{
                bcrypt.compare(req.body.password, user.password, async (err, result)=>{
                    if(err) return err;
                    if(!result) return new Error('Invalid password');
                    const accessToken = jwt.sign(payload, process.env.TOKEN_SECRET, {expiresIn: 1200})
                    res.cookie('JWT', accessToken, {
                        maxAge: 3600000,
                        httpOnly: true
                    })
                    delete user.password
                    delete user.accessToken
                    delete user.createdAt
                    res.send(user);
                })
            }
        }catch(error){
            next(error)
        }
    }

async function logout(req, res, next){
    res.status(202).clearCookie('JWT').send('LOGOUT');
}

async function isLogged(req, res, next){
    if(req.cookies['JWT']) {res.send({logged: true, })}
    else{res.send({logged: false})}
    
}

module.exports = {
    register,
    login,
    logout,
    isLogged
}


